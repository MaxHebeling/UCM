import type { Locale } from "./config";
import { programas, respaldos, valores, stats, testimonios, identidad } from "@/data/site";
import { programasEN, respaldosEN, valoresEN, statsEN, testimoniosEN, identidadEN } from "@/data/en";
import { comparativas, actualizado } from "@/data/comparativas";
import { comparativasEN, actualizadoEN } from "@/data/comparativas-en";

export function getComparativas(lang: Locale) {
  return lang === "en" ? comparativasEN : comparativas;
}
export function getActualizado(lang: Locale) {
  return lang === "en" ? actualizadoEN : actualizado;
}

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
