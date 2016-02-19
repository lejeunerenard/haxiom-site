import 'whatwg-fetch'
import UserEvent from './user-event'
const apiURL = 'https://api.github.com/'

export default class User {
  constructor (options = {}) {
    this.name = options.name
  }

  getEvents () {
    return fetch(apiURL + 'users/' + this.name + '/events')
    .then((response) => {
      return response.json()
    }).then((events) => {
      return events.map((event) => {
        return new UserEvent(event)
      })
    })
  }
}
