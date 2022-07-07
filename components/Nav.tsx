import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/products'>Products</Link>
        </li>
      </ul>
    </div>
  )
}
