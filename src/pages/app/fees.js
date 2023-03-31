import styles from '../../styles/fees.module.css'
import React, { useState } from 'react'
import { data } from '../../feesData'
import { render } from 'react-dom';


const Tablerender = ({ FeesPaidStatus }) => {
    let index = 0;

    console.log("render", FeesPaidStatus);
    const tableRows = data.map(
        (element) => {
            console.log(element)
            console.log(FeesPaidStatus)
            if (element.Fees_paid == FeesPaidStatus) {
                index++;
                return (
                    <div className={styles.row}>
                        <div className={styles.col}>{index}</div>
                        <div className={styles.col}>{element.Name}</div>
                        <div className={styles.col}>{element.Enrollment_Number}</div>
                        <div className={styles.col}>{element.Semester}</div>
                        <div className={styles.col}>{element.Branch}</div>
                    </div>

                )
            }
        }
    )
    return (
        <>
            <div className={styles.row}>
                <div className={styles.col}>Sr. No</div>
                <div className={styles.col}>Name</div>
                <div className={styles.col}>Enrollement Number</div>
                <div className={styles.col}>Semester</div>
                <div className={styles.col}>Branch</div>
            </div>
            {tableRows}
        </>
    )
}

const Fees = () => {
    const [FeesPaidStatus, setFeesPaidStatus] = useState(false);
    console.log("render", FeesPaidStatus)
    const FeesPaid = data.filter(item => item.Fees_paid === false);
    const FeesRemaining = data.filter(item => item.Fees_paid === true);
    const FeesPaidCount = FeesPaid.length;
    const FeesRemainingCount = FeesRemaining.length


    return (
        <div className={styles.main}>
            <div className={styles.cont}>
                Fee Payment Detail
            </div>
            <div className={styles.card_view_container}>
                <div className={styles.card_view} onClick={() => {
                    setFeesPaidStatus(false)
                    console.log("clicked1")
                }}>
                    <div style={{ paddingTop: "30px" }}>
                        <h2>Fees remaining</h2>
                        <h3>{FeesPaidCount}</h3>
                    </div>
                </div>

                <div className={styles.card_view} onClick={() => {
                    setFeesPaidStatus(true)
                    console.log("clicked")
                }}>
                    <div style={{ paddingTop: "30px" }}>
                        <h2>Fees paid</h2>
                        <h3>{FeesRemainingCount}</h3>
                    </div>
                </div>
            </div>
            <div>
                {FeesPaidStatus === true && <h2>Fees Paid</h2>}
                {FeesPaidStatus === false && <h2>Fees remaining</h2>}
            </div>

            <div className={styles.table_design}>

                <Tablerender FeesPaidStatus={FeesPaidStatus} />
            </div>
        </div>
    )
}


export default Fees