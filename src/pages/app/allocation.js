import React, { useState } from 'react'
import styles from '@/styles/Allocation.module.css'
import Link from 'next/link'
import Quota from '@/components/Quota'
import Select from "react-select";
import { students } from '../../utils/Register'
import { Main } from '@/utils/Allocation';

const Allocation = () => {
const [stu, setstu] = useState(students);

 const handleAllocate = ()=>{
    const data = Main();
    console.log(data);
    setstu(data);
 }
    return (
        <div className={styles.cont}>
            <div className={styles.allcbtn} onClick={handleAllocate}>Allocate</div>
            <div className={styles.row}>
                <div className={styles.name0}>SR No.</div>
                <div className={styles.name}>Name</div>
                <div className={styles.name}>ACPC Rank</div>
                <div className={styles.name}>Caste</div>
                <div className={styles.name}>Department</div>
        
            </div>

            {
                stu.map((item,i) => {
                    return (
                        <div className={styles.row}>
                            <div className={styles.name0}>{i+1}</div>
                            <div className={styles.name}>{item.Name}</div>
                            <div className={styles.name}>{item["ACPC Rank"]}</div>
                            <div className={styles.name}>{item["Cast "]}</div>
                            <div className={styles.name}>{item["Branch "]}</div>
                    
                        </div>
                    )
                })
            }

        </div>


    )
}

export default Allocation

const data = {
    caste: [
        "General", "SC", "ST", "OBC/SEBC"
    ],
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
}


const preRules = {
    catse: [
        {
            name: "SEBC",
            reserv: 27
        },
        {
            name: "SC",
            reserv: 7
        },
        {
            name: "ST",
            reserv: 15
        },
        {
            name: "EWS",
            reserv: 10
        },
    ],
    extras: [
        {
            name: "Other states",
            reserv: 5
        },
        {
            name: "D2D quota",
            reserv: 10
        },
        {
            name: "PWD quota",
            reserv: 5
        },
    ]
}