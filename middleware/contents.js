import contents from '~/static/contents.json'

export default function ({ store }) {
  store.commit('contents/add', contents)
}
