import type { Locale } from "./config";
import { programas, respaldos, valores, stats, testimonios, identidad } from "@/data/site";
import { programasEN, respaldosEN, valoresEN, statsEN, testimoniosEN, identidadEN } from "@/data/en";

export function getProgramas(lang: Locale) {
  return lang === "en" ? programasEN : programas;
}
export function getRespaldos(lang: Locale) {
  return lang === "en" ? respaldosEN : respaldos;
}
export function getValores(lang: Locale) {
  return lang === "en" ? valoresEN : valores;
}
export function getStats(lang: Locale) {
  return lang === "en" ? statsEN : stats;
}
export function getTestimonios(lang: Locale) {
  return lang === "en" ? testimoniosEN : testimonios;
}
export function getIdentidad(lang: Locale) {
  return lang === "en" ? identidadEN : identidad;
}
