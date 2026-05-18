/// <reference types="vite/client" />

declare module 'aos' {
  interface AOSOptions {
    duration?: number
    delay?: number
    easing?: string
    once?: boolean
    mirror?: boolean
    anchorPlacement?: string
    offset?: number
    disable?: boolean | string
  }

  interface AOS {
    init(options?: AOSOptions): void
    refresh(): void
    refreshHard(): void
  }

  const aos: AOS
  export default aos
}
