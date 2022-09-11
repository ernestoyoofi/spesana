import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Comp() {
  return (
    <div className={styles.banner}>
      <img src="/assets/image/banner.jpg" width="100%" />
    </div>
  )
}