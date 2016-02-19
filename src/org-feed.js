import defaults from 'lodash.defaults'
import 'whatwg-fetch'
import User from './user'

const apiURL = 'https://api.github.com/'

export default class OrgFeed {
  constructor (options = {}) {
    options = defaults(options, {
      orgName: 'haxiom',
      maxItems: 15,
      pollPeriod: 1000
    })

    this.orgName = options.orgName
    this.maxItems = options.maxItems
    this.pollPeriod = options.pollPeriod

    this.events = []
  }

  getUsers () {
    return fetch(apiURL + 'orgs/' + this.orgName + '/public_members')
    .then((response) => {
      return response.json()
    }).catch((err) => {
      console.error(err)
    })
  }

  getEvents () {
    this.getUsers().then((users) => {
      users.forEach((userJson) => {
        let user = new User({
          name: userJson.login
        })
        user.getEvents().then((events) => {
          this.events.push(events)
        })
      })
    })
  }
}
