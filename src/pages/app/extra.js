import React, { useEffect, useState } from 'react'
import styles from '@/styles/Extra.module.css'
import Link from 'next/link'
import Select from 'react-select'
import stuDetails from '../../utils/students.json';
import hosteldata from '../../utils/hostel.json';
import {updateHostel} from '../../utils/firebaseConfig'

const Extra = () => {
    const [StudentDetails, setFilteredStudents] = useState(stuDetails.Sheet1);




    useEffect(() => {
      
        // hosteldata.Sheet1.forEach(element => {
        //     console.log(element);
        //     updateHostel(hosteldata.Sheet1[0]["Enrollment Number"],hosteldata.Sheet1[0]);
        // });
        // console.log(hosteldata.Sheet1[0]["Enrollment Number"],hosteldata.Sheet1[0]);
        // updateHostel(hosteldata.Sheet1[0]["Enrollment Number"],hosteldata.Sheet1[0]);
      return () => {
        
      }
    }, [])
    

    const filterByDepartment = department => {
        if(department==="All"){
            setFilteredStudents(stuDetails.Sheet1);
        }else{
        setFilteredStudents(
          stuDetails.Sheet1.filter(student => student["Branch "] === department)
        )
        }
      }

      const filterByName = name => {
        setFilteredStudents(
          stuDetails.Sheet1.filter(student => student["Name"].includes(name))
        )
      }
      const filterByRollNo = RollNo => {
        setFilteredStudents(
          stuDetails.Sheet1.filter(student => student["Enrollment Number"].toString(10).includes( RollNo))
        )
      }
    
    return (
        <div className={styles.cont}>
            <div className={styles.header}>
                <div className={styles.title}>ADMIN PANEL</div>
                <div className={styles.avatar}></div>
            </div>
            <div className={styles.filter}>
                <div className={styles.filName}>Filters</div>
                <input type="text" name="" id="" className={styles.stuSearch} placeholder="search by name" onChange={e => filterByName(e.target.value)}/>
                <input type="text" name="" id="" className={styles.stuSearch} placeholder="search by Enrollment" onChange={e=>filterByRollNo(e.target.value)}/>
                <input type="text" name="" id="" className={styles.stuSearch} placeholder="search by Room no."/>

                <Select options={options}
                   onChange={e => filterByDepartment(e.value)}
                    className={styles.branchSearch}
                />
            </div>
            <div className={styles.students}>

                <div className={styles.title}> allocated student list</div>

                <div className={styles.table}>
                    <div className={[styles.row1]}>
                        <div className={styles.item}>name</div>
                        <div className={styles.item}>enrollment</div>
                        <div className={styles.item}>Branch</div>
                        <div className={styles.item1}>hostel</div>
                        <div className={styles.item1}>Room</div>
                        <div className={styles.item1}>status</div>
                        <div className={styles.item1}>View</div>
                    </div>

                    {
                       StudentDetails.map((item, i) => {
                            return (
                                <div className={styles.row} key={i}>
                                    <div className={styles.item}>{item.Name}</div>
                                    <div className={styles.item}>{item["Enrollment Number"]}</div>
                                    <div className={styles.item}>{item["Branch "]}</div>
                                    <div className={styles.item1}>{
                                        item["Gender "] == "Male" || item["Gender "] == "Male " ? (
                                            hostels[Math.floor(Math.random() * hostels.length)]) : "G1"
                                    }
                                    </div>
                                    <div className={styles.item1}>{
                                        (Math.floor(Math.random() * 2) + 1).toString() + (Math.floor(Math.random() * 3) + 1).toString() + (Math.floor(Math.random() * 30) + 1).toString().padStart(2, '0')

                                    }</div>
                                    <div className={styles.item1}>
                                        <div className={

                                            Math.floor(Math.random() * 2) ? styles.dot : styles.dot1
                                        

                                        }></div>
                                    </div>
                                    <div className={styles.item1}>View</div>
                                </div>
                            )
                                    
                        })
                    }


                </div>


            </div>
        </div>
    )
}

export default Extra;


const options = [

    {value:"All", label:"All"},
    { value: "Chemical Engineering", label: "Chemical Engineering" },
    { value: "Computer Engineering", label: "Computer Engineering" },
    { value: "Information Technology", label: "Information Technology" },
    { value: "Electrical Engineering", label: "Electrical Engineering" },
    { value: "Mechanical Engineering", label: "Mechanical Engineering" },
    { value: "Power Electronics Engineering", label: "Power Electronics Engineering" },
    { value: "Computer Science and Engineering", label: "Computer Science and Engineering" },
    { value: "Electronics & Communication Engineering", label: "Electronics & Communication Engineering" },
    { value: "Instrumentation & Control Engineering", label: "Instrumentation & Control Engineering" },
    { value: "Electronics And Instrumentation Engineering", label: "Electronics And Instrumentation Engineering" },
];
branches: [
    {
        name: "Chemical Engg.",
        capacity: 60
    },
    {
        name: "Civil Engg.",
        capacity: 60
    },
    {
        name: "Computer Engg.",
        capacity: 60
    },
    {
        name: "Computer Science Engg.",
        capacity: 60
    },
    {
        name: "Electric Engg.",
        capacity: 120
    },
    {
        name: "EC Engg.",
        capacity: 120
    },
    {
        name: "IT Engg.",
        capacity: 60
    },
    {
        name: "IC Engg.",
        capacity: 60
    },
    {
        name: "Mech Engg.",
        capacity: 90
    },
    {
        name: "PE Engg.",
        capacity: 60
    },
    {
        name: "EI Engg.",
        capacity: 60
    },

]

const hostels = ["H1", "H2"];



