// Sync <head> meta tags on client-side route change.
// Crawlers see prerendered HTML; this only matters when a user navigates
// SPA-style and shares the URL (browser tab) — OG previews stay correct.

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

export function updateHead({ title, description, canonical, ogImage }) {
  if (title) document.title = title
  if (description) setMeta('meta[name="description"]', 'content', description)
  if (canonical) setMeta('link[rel="canonical"]', 'href', canonical)
  if (title) setMeta('meta[property="og:title"]', 'content', title)
  if (description) setMeta('meta[property="og:description"]', 'content', description)
  if (canonical) setMeta('meta[property="og:url"]', 'content', canonical)
  if (ogImage) setMeta('meta[property="og:image"]', 'content', ogImage)
  if (title) setMeta('meta[name="twitter:title"]', 'content', title)
  if (description) setMeta('meta[name="twitter:description"]', 'content', description)
  if (ogImage) setMeta('meta[name="twitter:image"]', 'content', ogImage)
}
