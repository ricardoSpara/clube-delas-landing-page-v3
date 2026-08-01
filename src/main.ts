import './styles.css'
import { getWhatsappGroupUrl } from './config'

type PixelFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  loaded?: boolean
  push?: PixelFunction
  queue: unknown[][]
  version?: string
}

declare global {
  interface Window {
    _fbq?: PixelFunction
    fbq?: PixelFunction
    dataLayer?: Array<Record<string, string>>
  }
}

const META_PIXEL_ID = '915964627618020'
let pixelRequested = false

function installPixelQueue() {
  if (window.fbq) return

  const queue: unknown[][] = []
  const pixel = ((...args: unknown[]) => {
    if (pixel.callMethod) pixel.callMethod(...args)
    else queue.push(args)
  }) as PixelFunction
  pixel.push = pixel
  pixel.loaded = false
  pixel.version = '2.0'
  pixel.queue = queue
  window.fbq = pixel
  window._fbq = window._fbq ?? pixel

  pixel('init', META_PIXEL_ID)
  pixel('track', 'PageView')
  pixel('track', 'ViewContent')
}

function loadMetaPixel() {
  if (pixelRequested) return
  pixelRequested = true

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.append(script)
}

function trackLead(placement: string, platform: 'whatsapp' | 'telegram') {
  window.fbq?.('track', 'Lead', { content_name: `clube_delas_${platform}_${placement}` })
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event: 'generate_lead', placement, platform })
}

installPixelQueue()

// Mantém PageView/ViewContent e Lead no mesmo Pixel, sem deixar o script de
// terceiros competir com o conteúdo principal durante a primeira renderização.
window.setTimeout(loadMetaPixel, 8_000)
document.addEventListener('pointerdown', loadMetaPixel, { once: true, passive: true })
document.addEventListener('keydown', loadMetaPixel, { once: true })

document.querySelectorAll<HTMLAnchorElement>('[data-platform="whatsapp"]').forEach((link) => {
  link.href = getWhatsappGroupUrl()
  link.addEventListener('click', () => {
    link.href = getWhatsappGroupUrl()
    trackLead(link.dataset.placement ?? 'unknown', 'whatsapp')
    loadMetaPixel()
  })
})

document.querySelectorAll<HTMLAnchorElement>('[data-platform="telegram"]').forEach((link) => {
  link.addEventListener('click', () => {
    trackLead(link.dataset.placement ?? 'unknown', 'telegram')
    loadMetaPixel()
  })
})
