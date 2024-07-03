import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.navigationItem}>Digtal Garden</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <a href="https://laurenlo.me/" className="text-black">
          Portfolio
        </a>
      </li>
    </ul>
  </nav>
)

export default Navigation
