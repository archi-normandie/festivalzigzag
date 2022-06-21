import Vue from 'vue'
import { marked as Marked } from 'marked'

export function markdownify (text) {
  return Marked(text, {
    breaks: true,
    smartypants: true
  })
}

export function prettyDate (date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  // 2021-10-09 11:30
  // Le format ISO doit être YYYY-MM-DDTHH:mm
  // RFC 2822 https://datatracker.ietf.org/doc/html/rfc2822#page-14
  // ou ISO8601 https://262.ecma-international.org/11.0/#sec-date.parse
  date = date.trim().replace(' ', 'T')
  return new Date(date).toLocaleDateString('fr', options).replace(':', 'h')
}

const filters = { markdownify, prettyDate }

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
