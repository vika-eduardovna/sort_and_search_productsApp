import React from 'react'
import s from './style.module.sass'
import { Link } from 'react-router-dom'

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
        <Link to='/add'>Add</Link>
        <Link to='/showlist'>Show products</Link>
    </div>
  )
}
