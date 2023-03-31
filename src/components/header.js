import React from 'react'
import styles from '@/styles/Header.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.logo}>
        <Image src={require("../assets/img/logo.png")} alt="" srcset="" height={50} />
      </div>
      {/* <div style={{display:"flex",alignItems:"center"}}> */}

        <div className={styles.navicont}>
          {
            nav.map((item, i) => {
              return (
                <div className={styles.navitem}>
                  <Link href={item.ref}>
                    {item.name}
                  </Link>
                </div>

              )
            })
          }

        </div>
        <div className={styles.logo}>
          <Image src={require("../assets/img/avatar.png")} alt="" srcset="" height={40} />
        </div>
      </div>
    // </div>
  )
}

export default Header

const nav = [
  {
    name: 'Home',
    ref: '/'
  },
  {
    name: 'Entry',
    ref: '/app/entry'
  },
  {
    name: 'Hostel',
    ref: '/app/hostelView'
  },
  {
    name: 'Fees',
    ref: '/app/fees'
  },
  {
    name: 'Complain',
    ref: '/'
  },
  {
    name: 'Notice Board',
    ref: '/app/noticeBoard'
  },
  {
    name: 'Students',
    ref: '/'
  },
]