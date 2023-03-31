import React, { useState } from 'react'
import { LeaveData } from '../../LeaveData'
import styles from '../../styles/leaveapplication.module.css'
import Select from 'react-select'


const Tablerender = ({ LeaveApplicationData }) => {
    const handleOnCLick = (value, enrollement) => {
        let student = LeaveData.filter(item => item.Enrollment_Number === enrollement);
        if (value === "accept") {
            student["approval"] = "approved";
        } else {
            student["approval"] = "denied";
        }
        console.log(student);
    }
    const tableRows = LeaveApplicationData.map(
        (element, index) => {
            return (
                <div className={styles.row}>
                    <div className={styles.col1}>{index + 1}</div>
                    <div className={styles.col}>{element.Name}</div>
                    <div className={styles.col}>{element.Enrollment_Number}</div>
                    <div className={styles.col}>{element.Room_Number}</div>
                    <div className={styles.col}>{element.Mobile_Number}</div>
                    <div className={styles.col}>{element.Father_Mobile_Number}</div>
                    <div className={styles.col}>{element.Reason_for_Leave}</div>
                    <div className={styles.col}>{element.Date_of_leave}</div>
                    <div className={styles.col1}>{element.Duration}</div>
                    <div className={styles.col1}>{<button onClick={handleOnCLick("accept", element.Enrollment_Number)}>Accept</button>}</div>
                    <div className={styles.col1}>{<button onClick={handleOnCLick("Reject", element.Enrollment_Number)}>Reject</button>}</div>
                </div>

            )
        }
    )
    return (
        <>
            <div className={styles.row}>
                <div className={styles.col1}>Sr. No</div>
                <div className={styles.col}>Name</div>
                <div className={styles.col}>Enrollment Number</div>
                <div className={styles.col}>Room Number</div>
                <div className={styles.col}>contact number</div>
                <div className={styles.col}>Parent contact</div>
                <div className={styles.col}>Reason</div>
                <div className={styles.col}>Date</div>
                <div className={styles.col1}>Duration</div>
                <div className={styles.col1}>Accept</div>
                <div className={styles.col1}>Reject</div>
                </div>
            {tableRows}
           
        </>
    )
}
// function  getValue(value){
//     switch(value){
//         case "pending" return 1;
//         case ""
//     }
// }


const leaveapplication = () => {
    const [LeaveApplicationStatus, setLeaveApplicationStatus] = ("pending");
    console.log("Leave application status:", LeaveApplicationStatus);
    const [LeaveApplication, setLeaveApplication] = useState(LeaveData);
    const filterByRequest = (value) => {
        if (value === "All") {
            setLeaveApplication(LeaveData);
        } else {
            setLeaveApplication(LeaveData.filter(student => student["approval"] === value))
        }
    }
    return (
        <div className={styles.cont}>
            <div className={styles.header} style={{ backgroundColor: "#95faa6", fontSize: "20px" }}>
                <div>Leave Application</div>
            </div>
            <div className={styles.filter}>
                <Select options={options}
                    onChange={e => {
                        filterByRequest(e.value);
                        //  setLeaveApplicationStatus(e.value);
                    }}
                    className={styles.branchSearch}
                />
            </div>
            <div>
                {LeaveApplicationStatus === "pending" && <h2>Pending Requests</h2>}
                {LeaveApplicationStatus === "approved" && <h2>Approved Requests</h2>}
                {LeaveApplicationStatus === "All" && <h2>All requests</h2>}
                {LeaveApplicationStatus === "denied" && <h2>Rejected Request</h2>}
            </div>

            <div className={styles.table_design}>

                <Tablerender LeaveApplicationData={LeaveApplication} />
            </div>
        </div>
    );
}
export default leaveapplication

const options = [

    { value: "All", label: "All" },
    { value: "pending", label: "pending" },
    { value: "approved", label: "approved" },
    { value: "denied", label: "denied" }

];
