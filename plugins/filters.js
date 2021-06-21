import Vue from 'vue'
import Marked from 'marked'

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
  return new Date(date).toLocaleDateString('fr', options).replace(':', 'h')
}

const filters = { markdownify, prettyDate }

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
