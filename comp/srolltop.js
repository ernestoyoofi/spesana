import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Comp() {
    const router = useRouter();

    useEffect(() => {
        window.onscroll = function() {
            scrollFunction()
        };
    })
    const ViewScroll = (style) => {
        document.getElementById("scrollTop").style.display = style
    }
    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    const scrollFunction = () =>{
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollTop").classList.add("ScrollView")
            document.getElementById("scrollTop").classList.remove("ScrollHide")
            setTimeout(
                function() {
                    ViewScroll("flex")
                },
                50
            );
        } else {
            document.getElementById("scrollTop").classList.add("ScrollHide")
            document.getElementById("scrollTop").classList.remove("ScrollView")
            setTimeout(
                function() {
                    ViewScroll("none")
                },
                50
            );
        }
    }
    return (
        <div className={styles.scrollTop_Container}>
            <button className={styles.scrollTop_Button} id="scrollTop" onClick={() => topFunction()}>
                <FontAwesomeIcon icon={faAngleUp} className={styles.icon} />
            </button>
        </div>
    )
}