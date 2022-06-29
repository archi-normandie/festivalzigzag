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

export function getDay (date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  // 2021-10-09 11:30
  // Le format ISO doit être YYYY-MM-DDTHH:mm
  // RFC 2822 https://datatracker.ietf.org/doc/html/rfc2822#page-14
  // ou ISO8601 https://262.ecma-international.org/11.0/#sec-date.parse
  date = date.trim().replace(' ', 'T')
  const day = new Date(date).toLocaleDateString('fr', options).replace(':', 'h')
  return day.charAt(0).toUpperCase() + day.slice(1)
}
export function getHour (date) {
  date = new Date(date)
  return `${date.getHours()}${String.fromCharCode(160)}h${String.fromCharCode(160)}${date.getMinutes() < 10 ? '0' : null}${date.getMinutes()}`
}

const filters = { markdownify, prettyDate, getDay, getHour }

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
