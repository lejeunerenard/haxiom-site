import 'whatwg-fetch'
const apiURL = 'https://api.github.com/'

export default class User {
  constructor (options = {}) {
    this.name = options.name
  }

  getEvents () {
    return fetch(apiURL + 'users/' + this.name + '/events')
    .then((response) => {
      return response.json()
    })
  }
}
