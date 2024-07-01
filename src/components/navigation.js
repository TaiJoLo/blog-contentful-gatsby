import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>Gatsby Starter Contentful</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <a href="https://laurenlo.me/" className="text-black">
          Home
        </a>
      </li>
      <li className={styles.navigationItem}>
        <a href="https://laurenlo-blog.netlify.app" className="text-black">
          Blog
        </a>
      </li>
    </ul>
  </nav>
)

export default Navigation
