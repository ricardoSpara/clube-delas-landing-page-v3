export const WHATSAPP_GROUPS = ['https://conectatribo.com.br/t/bM4x1M'] as const

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
