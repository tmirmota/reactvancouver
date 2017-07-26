import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    url: null,
  }
  componentWillMount() {
    this.getRandomPic()
  }
  getRandomPic = () => {
    fetch('https://source.unsplash.com/random').then(res => res).then(data => {
      // console.log(data)
      const { url } = data
      this.setState({ url })
    })
  }
  render() {
    const { url } = this.state
    const style = {
      backgroundImage: `url(${url})`,
    }
    return (
      <div className="App" style={style}>
        Hello World
      </div>
    )
  }
}

export default App
