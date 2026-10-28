export const WHATSAPP_GROUPS = [
  'https://chat.whatsapp.com/DkmPy9yDQNGHs9RLssvrG0',
  'https://chat.whatsapp.com/Hk6f7hBJ74EDKWN8tAl9nq',
  'https://chat.whatsapp.com/E59lv1PHu6WLpLqwFSwhaa',
  'https://chat.whatsapp.com/BmI7ZgYfbI8EiRYs0xBMhE',
  'https://chat.whatsapp.com/GBQ8j8eS6y6KzVxftFfi1V',
  'https://chat.whatsapp.com/F1gg6mcVHAQ0M8GTPFtn0Q',
  'https://chat.whatsapp.com/BZeAIJhd7FAFSLSc2nwEkM',
  'https://chat.whatsapp.com/BwbyEB5lUYO8xElBSEeD5h'
] as const

export const COMMUNITY_SIZE = '80 mil+' as const
export const TELEGRAM_GROUP_URL = 'https://t.me/+JslsL6UzXv43OGYx' as const

export function getWhatsappGroupUrl() {
  const groupIndex = Math.floor(Math.random() * WHATSAPP_GROUPS.length)
  const url = new URL(WHATSAPP_GROUPS[groupIndex])
  const currentParams = new URLSearchParams(window.location.search)

  currentParams.forEach((value, key) => {
    if (key.startsWith('utm_') || key === 'fbclid') url.searchParams.set(key, value)
  })

  return url.toString()
}
