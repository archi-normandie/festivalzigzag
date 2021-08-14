export const state = () => ({
  all: null
})

export const mutations = {
  add (state, contents) {
    const formattedContents = {}
    for (const index in contents) {
      formattedContents[index] = contents[index]
      if (formattedContents[index].booking) {
        formattedContents[index].booking.dates = formattedContents[index].booking.dates.map((date) => {
          return {
            raw: date.date,
            formatted: prettyDate(date.date)
          }
        })
      }
    }
    state.all = formattedContents
  }
}

const prettyDate = function (date) {
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
