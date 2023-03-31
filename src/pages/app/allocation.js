import React, { useState } from 'react'
import styles from '@/styles/Allocation.module.css'
import Link from 'next/link'
import Quota from '@/components/Quota'
import Select from "react-select";

const Allocation = () => {

    //   const [rules, setRules] = useState({});
    const [caste, setCaste] = useState("");
    const options = [
        { value: "SEBC", label: "SEBC" },
        { value: "SC", label: "SC" },
        { value: "ST", label: "ST" },
        { value: "EWC", label: "EWC" },
    ];
    return (
        <div className={styles.cont}>
            <div className={styles.head}>
                Applications
            </div>
            <div className={styles.innercont}>
                <div className={styles.rules}>
                    <div className={styles.title}>
                        Rules
                    </div>
                    <div className={styles.title}>  
                            ACPC Rules
                        </div>
                    <div className={styles.preRules}>
                        <div className={styles.boxOuter}>
                        {
                            preRules.catse.map((item, i) => {
                                return (
                                    <div className={styles.box}>
                                        {item.name} : {item.reserv}%
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className={styles.boxOuter}>

                        {
                            preRules.extras.map((item, i) => {
                                return (
                                    <div className={styles.box}>
                                        {item.name} : {item.reserv}%
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                set rule for caste
                <Select options={options} onChange={(caste1)=>{setCaste(caste1)}}/>
                
            </div>
            <div>{`${caste.value}`}</div>
            {
                caste
            } */}


            <div className="casteSelection">
                <div>
                    OBC caste %
                </div>
                <input type='text' />
                <div>
                    SC caste %
                </div>
                <input type='text' />
                <div>
                    ST caste %
                </div>
                <input type='text' />




            </div>



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