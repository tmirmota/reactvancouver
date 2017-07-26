import React from 'react'

const Nav = () =>
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <a className="nav-link" href="#">
        React Vancouver
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <i className="fa fa-meetup pr-2" />
        Meetup Page
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        <i className="fa fa-slack pr-2" />
        Slack Group
      </a>
    </li>
  </ul>

export default Nav
