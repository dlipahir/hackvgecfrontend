import React from 'react'
import styles from '@/styles/RoomView.module.css'
import Link from 'next/link'
import info from '../../assets/img/info.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

const RoomView = () => {

    const {query} =useRouter();
  
    console.log(query)

    return (
        <div className={styles.cont}>
            
            <div className={styles.roominfo}>
                <div>Room  : {query.room}</div>
                <div>Floor : {query.room.slice(1,2)}</div>
                <div>hostel : {query.room.slice(0,1)}</div>
            </div>
            <div className={styles.studentinfo}>
                <div className={styles.title}>Student Details : </div>
                <div className={styles.row}>
                    <div className={styles.name0}>SR No.</div>
                    <div className={styles.name}>Name</div>
                    <div className={styles.name}>Mobile No.</div>
                    <div className={styles.name0}>info</div>
                </div>
                {

                    data.students.map((item, i) => {
                        return (
                            <div className={styles.row}>
                                <div className={styles.name0}>{i + 1}</div>
                                <div className={styles.name}>{item.name}</div>
                                <div className={styles.name}>{item.mobile}</div>
                                <div className={styles.name1}>
                                    view <Image src={info} alt="d" height={20} style={{ marginLeft: 5 }} />
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <div className={styles.inventory}>
                <div className={styles.title}>Inventory : </div>
                <div className={styles.row}>
                    <div className={styles.name0}>SR No.</div>
                    <div className={styles.name}>Name</div>
                    <div className={styles.name}>Units</div>
                   
                </div>
                {
                    data.inventory.map((item,i)=>{
                        return(
                            <div className={styles.row}>
                            <div className={styles.name0}>{i + 1}</div>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.name}>{item.no} units</div>
                           
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RoomView


const data = {

    students: [
        {
            name: "dilip ahir",
            mobile: "9313903585",
            enroll: "200171017124"
        },
        {
            name: "arman novadia",
            mobile: "9313903585", enroll: "200171017124"
        },
        {
            name: "umar badi",
            mobile: "9313903585",
            enroll: "200171017124"
        },
    ],
    inventory :[
        {
            name:"Tables",
            no:"3"
        },
        {
            name:"Chairs",
            no:"3"
        },
        {
            name:"Beds",
            no:"3"
        },
        {
            name:"Fans",
            no:"2"
        },
        {
            name:"Locker",
            no:"2"
        },
        {
            name:"Tubelights",
            no:"2"
        },
    ]
}