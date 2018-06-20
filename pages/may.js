import React from 'react'
import Router from 'next/router'
import { MONTH } from '../constants/eventConstants'

export default class extends React.Component {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: `/${MONTH}`,
      })
      res.end()
      res.finished = true
    } else {
      Router.replace('/may')
    }
    return {}
  }
}
