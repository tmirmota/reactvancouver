import React from 'react'
import PropTypes from 'prop-types'

export default class MeetupGroup extends React.Component {
  state = {
    group: null,
  }
  componentDidMount() {
    fetch('https://meetup.reactvancouver.com/')
      .then(res => res.json())
      .then(json => this.setState({ group: json }))
  }
  render() {
    return this.props.children(this.state.group)
  }
}

MeetupGroup.propTypes = {
  children: PropTypes.func.isRequired,
}
