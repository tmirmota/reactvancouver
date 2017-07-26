import React from 'react'

// Material UI Components
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const Nav = () =>
  <ul className="nav justify-content-center pt-2">
    <li className="nav-item pr-3">
      <Button className="text-white">React Vancouver</Button>
    </li>
    <li className="nav-item pr-3">
      <Button className="text-white">
        <i className="fa fa-meetup pr-2" />
        Meetup Page
      </Button>
    </li>
    <li className="nav-item pr-3">
      <Button className="text-white">
        <i className="fa fa-slack pr-2" />
        Slack Group
      </Button>
    </li>
  </ul>

export default Nav
