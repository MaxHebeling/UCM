export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

// Prefijo de URL por idioma (es = raíz, en = /en)
export function prefix(lang: Locale) {
  return lang === "es" ? "" : "/en";
}

// Construye un href respetando el idioma actual
export function localePath(lang: Locale, path: string) {
  const p = path === "/" ? "" : path;
  return `${prefix(lang)}${p}` || "/";
}

// Dado un pathname, devuelve su equivalente en el otro idioma
export function switchPath(current: string, to: Locale) {
  const stripped = current.replace(/^\/en(?=\/|$)/, "") || "/";
  return to === "es" ? stripped : `/en${stripped === "/" ? "" : stripped}`;
}
