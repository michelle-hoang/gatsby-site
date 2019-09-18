import React from "react"
import { Helmet } from "react-helmet"

class myHelmet extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Michelle Hoang's Portfolio"></meta>
          <title>Michelle Hoang</title>
          <link rel="canonical" href="https://www.michellehoang.dev/" />
        </Helmet>
      </div>
    )
  }
}

export default myHelmet
