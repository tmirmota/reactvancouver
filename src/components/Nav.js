import React from 'react'

// Material UI Components
import Button from 'material-ui/Button'

const Nav = () =>
  <ul className="nav justify-content-center pt-2">
    <li className="nav-item pr-3">
      <Button
        href="https://www.meetup.com/ReactJS-Vancouver-Meetup/"
        target="_blank"
        className="text-white"
      >
        <i className="fa fa-meetup pr-2" />
        Meetup Page
      </Button>
    </li>
    <li className="nav-item pr-3">
      <Button
        href="https://reactvancouver.now.sh/"
        target="_blank"
        className="text-white"
      >
        <i className="fa fa-slack pr-2" />
        Slack Group
      </Button>
    </li>
  </ul>

export default Nav
