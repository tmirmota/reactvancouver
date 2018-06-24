import React, { Component } from 'react'

const PICATIC_HOST = 'https://api.picatic.com/v2'
const PICATIC_TEAM_ID = 1004
const PICATIC_API_KEY = 'sk_live_67c2aa1275dbb5e0822ba9bfa97ea132'

class Events extends Component {
  state = {
    events: [],
  }
  componentDidMount() {
    const url = `${PICATIC_HOST}/event?filter[team_id]=${PICATIC_TEAM_ID}&page[limit]=100&page[offset]=0`
    fetch(url, {
      headers: {
        Authorization: `Bearer ${PICATIC_API_KEY}`,
      },
    })
      .then(res => res.json())
      .then(json => this.setState({ events: json.data }))
      .catch(err => console.log(err))
  }
  render() {
    const { events } = this.state

    return (
      <div>
        {events.map(event => (
          <div key={event.id}>{event.attributes.title}</div>
        ))}
      </div>
    )
  }
}

export default Events
