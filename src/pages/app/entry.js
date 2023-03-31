import React from 'react'
import styles from '@/styles/Entry.module.css'
import { getTodayEntries } from '../../utils/firebaseConfig'

const Entry = () => {

  return (
    <div className={styles.cont}>
     <div className={styles.row}>
      <div className={styles.col}>Name</div>
      <div className={styles.col}>Room No.</div>
      <div className={styles.col}>Room No.</div>
     </div>
    </div>
  )
}

export default Entry