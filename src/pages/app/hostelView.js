import React from 'react'
import styles from '@/styles/HostelView.module.css'
import Link from 'next/link'
import Header from '@/components/header'

const HostelView = () => {
    return (
        <div className={styles.cont}>
            {/* <Header /> */}
            <div className={styles.maintitle}>Hostel View</div>
            <SHostel title="Boys Hostel 1"/>
            <SHostel title="Boys Hostel 2"/>
            <SHostel title="Girls Hostel "/>
         



        </div>
    )
}

export default HostelView;

const data = [

    {
        roomNo: 2101,
        check: [0, 1, 2]
    },
    {
        roomNo: 2102,
        check: [0, 0, 0]
    },
    {
        roomNo: 2103,
        check: [1, 1, 0]
    },
    {
        roomNo: 2104,
        check: [0, 1, 0]
    },
    {
        roomNo: 2105,
        check: [0, 1, 0]
    },
    {
        roomNo: 2106,
        check: [0, 1, 0]
    },
    {
        roomNo: 2107,
        check: [0, 1, 0]
    },
    {
        roomNo: 2107,
        check: [0, 1, 0]
    },
    {
        roomNo: 2107,
        check: [0, 1, 0]
    },
    {
        roomNo: 2107,
        check: [0, 1, 0]
    },
    {
        roomNo: 2107,
        check: [0, 1, 0]
    },
    {
        roomNo: 2107,
        check: [0, 1, 0]
    },
    {
        roomNo: 2107,
        check: [0, 1, 0]
    },
    {
        roomNo: 2107,
        check: [0, 1, 0]
    },
    {
        roomNo: 2107,
        check: [0, 1, 0]
    },
]

const colors = [
    "red", "green", "blue"
]



const SHostel = ({title}) => {
  return (
    <>
    <div className={styles.tit}>{title}</div>
    <div className={styles.rooms}>
    {
        data.map((room, i) => {
            return (
                <div>
                    <Link href={{
                        pathname: "/app/roomView",
                        query:{room: room.roomNo},
                    }}>
                        <div className={styles.room}>
                            <div className={styles.roomno}>{room.roomNo}</div>
                            <div className={styles.dots}>
                                {

                                    room.check.map((chck) => {
                                        return (
                                            <div className={styles.dot} style={{ backgroundColor: colors[chck] }}></div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })
    }
</div>
</>

  )
}


