import Vue from 'vue'
import Marked from 'marked'

export function markdownify (text) {
  console.log(Marked.parseInline(text))
  return Marked.parseInline(text)
}

const filters = { markdownify }

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
