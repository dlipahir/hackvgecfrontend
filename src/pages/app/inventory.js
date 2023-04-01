import React, { useState } from 'react'
import styles from '../../styles/inventory.module.css'
import { InventoryData } from '@/InventoryData'
const Tablerender = () => {
    const tableRows = InventoryData.map(
        (element,index) => {
                return (

                    <div className={styles.row}>
                        <div className={styles.col}>{index}</div>
                        <div className={styles.col}>{element.Name}</div>
                        <div className={styles.col}>{element.Room}</div>
                        <div className={styles.col}>{element.chair}</div>
                        <div className={styles.col}>{element.Table}</div>
                        <div className={styles.col}>{element.Bed}</div>
                        <div className={styles.col}>{element.Remarks}</div>
                    </div>

                )
        }
    )
    return (
        <>
        
            <div className={styles.row}>
                <div className={styles.col}>Sr. No</div>
                <div className={styles.col}>Name</div>
                <div className={styles.col}>Room Number</div>
                <div className={styles.col}>chair condition</div>
                <div className={styles.col}>Table condition</div>
                <div className={styles.col}>Bed condition</div>
                <div className={styles.col}>Remarks condition</div>
            </div>
            {tableRows}
        </>
    )
}

const inventory=()=>{
return(
<div>
            <div className={styles.cont}>
                Inventory Detail
            </div>
            <div className={styles.table}>
            <Tablerender />
            </div>
        </div>
);
}
export default inventory