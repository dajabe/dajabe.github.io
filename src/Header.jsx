import React from 'react'

import logo from './djb-logo-grey.png'

export default function Header() {
  return (
    <header className="main-header">
      <a
        className="main-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} className="main-logo" alt="logo" />
      </a>
      <h1>Hello World!</h1>
    </header>
  )
}
