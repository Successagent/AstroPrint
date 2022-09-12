import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import HeaderStyles from './header.module.css'
import { Button, SmallButton } from '../Button'

function Header() {
  let timeout
  let scroll = 0
  const { ref: headerRef, inView, entry } = useInView()
  return (
    <>
      <header ref={headerRef} className={HeaderStyles.header}>
        <div className={HeaderStyles.logo}>Astro</div>

        <ul className={HeaderStyles.links}>
          <Link to={'/'}>
            <li className={HeaderStyles.link}>Home</li>
          </Link>
          <Link to={'/about'}>
            <li className={HeaderStyles.link}>About</li>
          </Link>
          <Link to={'/services'}>
            <li className={HeaderStyles.link}>Services</li>
          </Link>
          <Link to={'/faq'}>
            <li className={HeaderStyles.link}>Faq</li>
          </Link>
          <Link to={'/contact'}>
            <li className={HeaderStyles.link}>Contact</li>
          </Link>
        </ul>

        <div className={HeaderStyles.buttonSet}>
          <SmallButton width={'50px'}>Q</SmallButton>
          <Button>Get A Quote</Button>
        </div>
      </header>
      {!inView && (
        <header className={`${HeaderStyles.header} ${HeaderStyles.sticky}`}>
          <div className={HeaderStyles.logo}>Astro</div>

          <ul className={HeaderStyles.links}>
            <Link to={'/'}>
              <li className={HeaderStyles.link}>Home</li>
            </Link>
            <Link to={'/about'}>
              <li className={HeaderStyles.link}>About</li>
            </Link>
            <Link to={'/services'}>
              <li className={HeaderStyles.link}>Services</li>
            </Link>
            <Link to={'/faq'}>
              <li className={HeaderStyles.link}>Faq</li>
            </Link>
            <Link to={'/contact'}>
              <li className={HeaderStyles.link}>Contact</li>
            </Link>
          </ul>

          <div className={HeaderStyles.buttonSet}>
            <SmallButton width={'50px'}>Q</SmallButton>
            <Button>Get A Quote</Button>
          </div>
        </header>
      )}
    </>
  )
}

export default Header
