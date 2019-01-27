// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {
  constructor () {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {bitrate: 8, video: {resolution: '1080p'}}
    }
  }

  render() {
    return (
        <button className="bitrate" onClick={this.bitHandler}>Bitrate Adjuster</button>
        <button className="resolution" onClick={this.resHandler}>Resolution Adjuster</button>
    )
  }
}
