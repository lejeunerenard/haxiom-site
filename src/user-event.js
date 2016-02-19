import defaults from 'lodash.defaults'
import Handlebars from 'handlebars'

const defaultPRTemplate = `
{{username}} {{action}} a PR.
`

export default class UserEvent {
  constructor (options) {
    options = defaults(options, {
      templates: {
        'PullRequestEvent': Handlebars.compile(defaultPRTemplate)
      }
    })

    // Errors
    if (options.type === undefined) {
      throw new Error('Event type is required')
    }

    if (options.actor === undefined || options.actor.login === undefined) {
      throw new Error('Event type is required')
    }

    // Useful aliases
    this.username = this.actor.login
  }

  render () {
    return this.templates[this.type](this)
  }
}
