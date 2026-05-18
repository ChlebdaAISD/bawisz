import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const animalsDir = path.join(root, 'public/assets/animals')
const heroPath = path.join(root, 'public/assets/zdjecia/strona_glowna/hero.webp')
const heroMobilePath = path.join(root, 'public/assets/zdjecia/strona_glowna/hero-mobile.webp')
const logoPath = path.join(root, 'public/assets/logo_small.webp')
const sourcesDir = path.join(root, 'scripts/.image-sources')

async function isUpToDate(srcPath, outPath) {
  if (!fs.existsSync(outPath)) return false
  const src = fs.statSync(srcPath)
  const out = fs.statSync(outPath)
  return out.mtimeMs >= src.mtimeMs
}

async function convertAnimals() {
  const pngs = fs.readdirSync(animalsDir).filter((f) => f.endsWith('.png'))
  let converted = 0
  for (const file of pngs) {
    const src = path.join(animalsDir, file)
    const out = path.join(animalsDir, file.replace(/\.png$/, '.webp'))
    if (await isUpToDate(src, out)) continue
    await sharp(src).resize(280, 280, { fit: 'inside' }).webp({ quality: 82 }).toFile(out)
    converted++
  }
  return { total: pngs.length, converted }
}

async function resizeLogo() {
  if (!fs.existsSync(logoPath)) return false
  const meta = await sharp(logoPath).metadata()
  if (meta.width <= 200) return false
  // Preserve the high-res original outside public/ before in-place rewrite so it can be restored later.
  fs.mkdirSync(sourcesDir, { recursive: true })
  const backupPath = path.join(sourcesDir, 'logo_small.source.webp')
  if (!fs.existsSync(backupPath)) fs.copyFileSync(logoPath, backupPath)
  const buf = await sharp(logoPath).resize(176, 176, { fit: 'inside' }).webp({ quality: 90 }).toBuffer()
  fs.writeFileSync(logoPath, buf)
  console.warn(`[optimize-images] resized logo in-place ${meta.width}×${meta.height} → 176×176; original saved to ${path.basename(backupPath)}`)
  return true
}

async function generateHeroMobile() {
  if (!fs.existsSync(heroPath)) {
    console.warn('hero.webp missing — skipping mobile variant')
    return false
  }
  if (await isUpToDate(heroPath, heroMobilePath)) return false
  await sharp(heroPath).resize(960, null, { fit: 'inside' }).webp({ quality: 75 }).toFile(heroMobilePath)
  return true
}

const t0 = Date.now()
const animals = await convertAnimals()
const heroMobile = await generateHeroMobile()
const logo = await resizeLogo()
const ms = Date.now() - t0
console.log(`[optimize-images] animals: ${animals.converted}/${animals.total} converted; hero-mobile: ${heroMobile ? 'generated' : 'up-to-date'}; logo: ${logo ? 'resized' : 'up-to-date'}; ${ms}ms`)
