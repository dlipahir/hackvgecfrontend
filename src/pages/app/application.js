import React from 'react'
import styles from '@/styles/Application.module.css'
import Link from 'next/link'

const Application = () => {
    return (<div className={styles.cont}>
        <div className={styles.head}>
            Applications
        </div>
        <div className={styles.mainouter}>


        <div className={styles.inner}>
            <div className={styles.gen}>Boys</div>
            {
                data.map((item, i) => {
                    console.log(item);
                    return (


                        <div className={styles.box}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.value}>{item.value}</div>
                        </div>
                    )

                })
            }
            <div className={styles.goto}>
                <Link href='/'>Go to allotment</Link>
            </div>


        </div>
        <div className={styles.inner}>
        <div className={styles.gen}>girls</div>
            {
                data.map((item, i) => {
                    console.log(item);
                    return (


                        <div className={styles.box}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.value}>{item.value}</div>
                        </div>
                    )

                })
            }
                        <div className={styles.goto}>
                <Link href='/'>Go to allotment</Link>
            </div>



        </div>
        </div>

    </div>)
}

export default Application


const data = [
    {
        title: "Acmedic year",
        value: "2022-23"
    },

    {
        title: "Total applications",
        value: "245"
    },

    {
        title: "vacancy",
        value: "114"
    },
]