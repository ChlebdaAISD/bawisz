export const CONTACT = {
  name: 'Bawisz · bawialnia Montessori',
  shortName: 'Bawisz',

  phone: '+48 693 766 049',
  phoneRaw: '+48693766049',
  phoneDisplay: '693 766 049',

  email: 'bawisz.bawialnia@gmail.com',
  ownerEmail: 'bawisz.bawialnia@gmail.com',

  address: {
    street: 'ul. Krzywa 19B',
    postalCode: '34-400',
    city: 'Nowy Targ',
    full: 'ul. Krzywa 19B, 34-400 Nowy Targ',
    mapsQuery: 'Krzywa 19B, 34-400 Nowy Targ',
    mapsUrl: 'https://maps.google.com/?q=Krzywa+19B+Nowy+Targ',
  },

  hours: {
    weekdays: '10:00 — 19:00',
    weekend: '10:00 — 20:00',
    summary: 'pn-pt 10:00-19:00, sob-nd 10:00-20:00',
  },

  socials: {
    instagram: {
      handle: '@bawisz_bawialnia',
      url: 'https://www.instagram.com/bawisz_bawialnia/',
    },
    facebook: {
      handle: 'Bawisz · bawialnia Montessori',
      url: 'https://www.facebook.com/p/Bawisz-bawialnia-Montessori-61572522181693/',
    },
    tiktok: {
      handle: '@bawisz.bawialnia',
      url: 'https://www.tiktok.com/@bawisz.bawialnia',
    },
  },

  webhooks: {
    birthdayReservation: import.meta.env.VITE_BAWISZ_BIRTHDAY_WEBHOOK,
  },
}

export const telHref = `tel:${CONTACT.phoneRaw}`
export const mailHref = `mailto:${CONTACT.email}`
