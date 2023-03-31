import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LeaveData } from '../../LeaveData'
import styles from '../../styles/leaveapplication.module.css'
import Select from 'react-select'


const Tablerender = ({ LeaveApplicationData }) => {
    const handleOnCLick=(value,enrollement)=>{
        let student = LeaveData.filter(item=>item.Enrollment_Number===enrollement);
        if(value==="accept"){
          student["approval"]="approved";
        }else{
            student["approval"]="denied";
        }
        console.log(student);
    }
    const tableRows = LeaveApplicationData.map(
        (element, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{element.Name}</td>
                    <td>{element.Enrollment_Number}</td>
                    <td>{element.Room_Number}</td>
                    <td>{element.Mobile_Number}</td>
                    <td>{element.Father_Mobile_Number}</td>
                    <td>{element.Reason_for_Leave}</td>
                    <td>{element.Date_of_leave}</td>
                    <td>{element.Duration}</td>
                    <td>{<button onClick={handleOnCLick("accept",element.Enrollment_Number)}>Accept</button>}</td>
                    <td>{<button onClick={handleOnCLick("Reject",element.Enrollment_Number)}>Reject</button>}</td>
                </tr>

            )
        }
    )
    return (
        <>
            <Table hover>
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Enrollement Number</th>
                        <th>Room Number</th>
                        <th>contact number</th>
                        <th>Parent contact</th>
                        <th>Reason</th>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Accept</th>
                        <th>Reject</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
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
     console.log("Leave application status:",LeaveApplicationStatus);
    const [LeaveApplication, setLeaveApplication] = useState(LeaveData);
    const filterByRequest = (value) => {
        if(value==="All"){
            setLeaveApplication(LeaveData);
        }else{
        setLeaveApplication(LeaveData.filter(student => student["approval"] === value))
        }
    }
    return (
        <div className={styles.cont}>
            <div className={styles.header}>
                <div className={styles.title}>ADMIN PANEL</div>
                <div className={styles.avatar}></div>
            </div>
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
