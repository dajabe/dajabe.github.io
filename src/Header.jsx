import React from 'react'

import djbLogo from './logos/djb-logo-grey.png'
// import ghLogoDark from './logos/GitHub-Mark-120px-plus.png'
import ghLogoLight from './logos/GitHub-Mark-Light-120px-plus.png'
import liLogo from './logos/LI-In-Bug.png'

export default function Header() {
  return (
    <header className="main-header">
      <a
        className="main-link"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={djbLogo} className="main-logo" alt="logo" />
      </a>
      <h1 className="title">Hello World!</h1>
      <div className="contact">
        <span>Where to find me</span>
        <div className="contact--links">
          <a
            href="https://github.com/dajabe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="contact--logo"
              src={ghLogoLight}
              alt="GitHub Logo Link"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/djbenton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="contact--logo"
              src={liLogo}
              alt="LinkedIn Logo Link"
            />
          </a>
        </div>
      </div>
    </header>
  )
}
