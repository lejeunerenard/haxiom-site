import OrgFeed from './org-feed'

let feed = new OrgFeed({
  orgName: 'haxiom'
})

feed.getEvents()
window.feed = feed
