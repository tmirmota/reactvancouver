import React from 'react'

export default () => (
  <ul className="nav justify-content-center pt-2">
    <li className="nav-item pr-3">
      <div className="mdl-button mdl-js-button mdl-js-ripple-effect">
        <a
          href="https://www.meetup.com/ReactJS-Vancouver-Meetup/"
          target="_blank"
          className="text-white"
        >
          <i className="fa fa-meetup pr-2" />
          Meetup Page
        </a>
      </div>
    </li>
    <li className="nav-item pr-3">
      <div className="mdl-button mdl-js-button mdl-js-ripple-effect">
        <a
          href="https://reactvancouver-slack.now.sh/"
          target="_blank"
          className="text-white"
        >
          <i className="fa fa-slack pr-2" />
          Slack Group
        </a>
      </div>
    </li>
  </ul>
)

