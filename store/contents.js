export const state = () => ({
  all: null
})

export const mutations = {
  add (state, contents) {
    state.all = contents
  }
}
