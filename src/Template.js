import React from 'react'
import icon from './assets/images/favicon.ico'

export default class Template extends React.Component {
  render() {
    return(
      <html>
        <head>
          <link rel="stylesheet" href="/styles.css"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
          <script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
          <link rel="icon" href="/favicon.ico"/>
        </head>
        <body>
          <div id='outlet'>
            {this.props.children}
          </div>
          <script src="/bundle.js"></script>
        </body>
      </html>
    )
  }
}
