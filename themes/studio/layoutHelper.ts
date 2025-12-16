import type { CSSProperties } from 'vue'

export function resolveAssetUrl(url?: string): string {
  if (!url) return ''
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

export function handleBackground(background?: string, dim = false): CSSProperties {
  if (!background)
    return {}

  const isColor = ['#', 'rgb', 'hsl'].some(v => background.indexOf(v) === 0)

  const style: CSSProperties = {
    background: isColor ? background : undefined,
    color: isColor ? undefined : 'white',
    backgroundImage: isColor
      ? undefined
      : dim
        ? `linear-gradient(#0005, #0008), url(${CSS.escape(resolveAssetUrl(background))})`
        : `url("${CSS.escape(resolveAssetUrl(background))}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  return style
}
