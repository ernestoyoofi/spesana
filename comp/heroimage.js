import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Comp() {
  const router = useRouter();
    return (
        <div className={styles.banner}>
            <img src="/assets/image/banner.jpg" width="100%" />
        </div>
    )
}