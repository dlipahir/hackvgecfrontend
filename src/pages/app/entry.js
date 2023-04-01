import React, { useEffect, useState } from 'react'
import styles from '@/styles/Entry.module.css'
import { getTodayEntry } from '../../utils/firebaseConfig'
import Image from 'next/image'

const Entry = () => {

  const [data, setData] = useState([]);
  console.log("out", data);

  const getData = async () => {
    const ent = await getTodayEntry();
    setData(ent);
  }


  useEffect(() => {
    console.log("in");
    getData();
  }, [])

  return (
    <div className={styles.cont}>
      <div className={styles.row}>
        <div className={styles.col}>Enrollment No.</div>
        <div className={styles.col}>Last Entry</div>
        <div className={styles.col}>current status</div>
        <div className={styles.col}>Info</div>
       
      </div>

      {
        data.map((item, i) => {
          return (

            <div className={styles.row}>
              <div className={styles.col}>{item.id}</div>
              <div className={styles.col}>{
                new Date(item.value.time.seconds * 1000).toString().split(" ")[4]
              }</div>
              <div className={styles.col}>
                <div className={styles.dot} style={{background : item.value.checkIn ? "green" : "red"}}></div>

              </div>
              <div className={styles.col}>
                
                <Image src={require('../../assets/img/info.png')} alt="" srcset="" height={20}/>
              </div>


            </div>
          )
        })}

    </div>
  )
}

export default Entry