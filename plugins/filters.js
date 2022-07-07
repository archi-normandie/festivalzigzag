import Vue from 'vue'
import { marked as Marked } from 'marked'

export function markdownify (text) {
  return Marked(text, {
    breaks: true,
    smartypants: true
  })
}

// const filters = { markdownify, prettyDate, getDay, getHour }
const filters = { markdownify }

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
