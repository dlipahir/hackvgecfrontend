import React from 'react'
import styles from '@/styles/noticeboard.module.css'
import {data} from '../../noticeBoardData'
console.log(data)

const RenderNotice = () => {

  const noticeDetails = data.map(
    (element) => {
      console.log(element)
      return (
        <>
        <div className={styles.notice_ind}>
                  <h2>{element.Topic}</h2>
                  <h5>{element.Date}</h5>
                  <p>{element.Description}</p>
                  </div>
                  </>
            );
    }
  )
  return (
    <>
      {noticeDetails}
    </>
  );
}
const handleOnClick=()=>{
  
}

const noticeboard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.cont}>
        Notice Board
      </div>
      <div className={styles.detail_cont}>
        <RenderNotice />
      </div>
      <div>
        <button className={styles.btn} onClick={handleOnClick}>New Notice</button>
      </div>
    </div>
  )
}

export default noticeboard