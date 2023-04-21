import React from 'react'
import styles from '@/styles/studentdetail.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const studentdetail = () => {
    // const [students, setstudents] = useState([]);

    const {query} =useRouter() ;
    
  
    console.log(query)

    return (
        <div className={styles.cont}>
            {/* <div className={styles.header}>
                <div className={styles.title}>ADMIN PANEL</div>
                <div className={styles.avatar}></div>
            </div> */}
            <div className={styles.header} style={{ backgroundColor: "#95faa6", fontSize: "20px" }}>
                <div>Student detail</div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "80%" }}>
                    <div className={styles.container}>
                        <div className={styles.inner_container}>
                            <div className={styles.property}>First name</div>
                            <div className={styles.value}>{query.fName}</div>
                        </div>
                        <div className={styles.inner_container}>
                            <div className={styles.property}>Middle name</div>
                            <div className={styles.value}>{query.mName}</div>
                        </div>
                        <div className={styles.inner_container}>
                            <div className={styles.property}>Last name</div>
                            <div className={styles.value}>{query.lName}</div>
                        </div>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.inner_container}>
                            <div className={styles.property}>Enrollment Nubmer </div>
                            <div className={styles.value}>{query.enrollmentNumber}</div>
                        </div>
                        <div className={styles.inner_container}>
                            <div className={styles.property}>Mobile Number </div>
                            <div className={styles.value}>{query.studentMobile}</div>
                        </div>
                        <div className={styles.inner_container}>
                            <div className={styles.property}>Parents Mobile Number </div>
                            <div className={styles.value}>{query.fatherMobile}</div>
                        </div>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.inner_container}>
                            <div className={styles.property}>Year </div>
                            <div className={styles.value}>{query.year}</div>
                        </div>
                        <div className={styles.inner_container}>
                            <div className={styles.property}>Department </div>
                            <div className={styles.value}>{query.department}</div>
                        </div>
                        <div className={styles.inner_container}>
                            <div className={styles.property}>Semester </div>
                            <div className={styles.value}>{query.semester}</div>
                        </div>
                    </div>
                </div>
                <div style={{height:"fit-content ",width: "fitContent", marginTop: "16px", border: "solid", borderColor: "black" }}>
                    <Image src={require('../../../src/images.jpg')} />
                </div>
            </div>

            <div className={styles.container_second}>
                <div className={styles.inner_container}>
                    <div className={styles.property}>ACPC Rank </div>
                    <div className={styles.value}>{query.ACPCRank}</div>
                </div>
                <div className={styles.inner_container}>
                    <div className={styles.property}>Diploma/12th percentage</div>
                    <div className={styles.value}>60%</div>
                </div>
                <div className={styles.inner_container}>
                    <div className={styles.property}>PWD </div>
                    <div className={styles.value}>{query.PWD}</div>
                </div>
            </div>

            <div className={styles.container_second}>
                <div className={styles.inner_container}>
                    <div className={styles.property}>Hostel Number</div>
                    <div className={styles.value}>{query.hostelName}</div>
                </div>
                <div className={styles.inner_container}>
                    <div className={styles.property}>Floor</div>
                    <div className={styles.value}>{query.floor}</div>
                </div>
                <div className={styles.inner_container}>
                    <div className={styles.property}>Room Number </div>
                    <div className={styles.value}>{query.romNumber}</div>
                </div>
            </div>
            <div style={{width:"57%",margin:"16px"}}>
                <div className={styles.inner_container}>
                    <div className={styles.property}>Home Address</div>
                    <div className={styles.value}> 1G ,jam Khambaliya,DevBhoomi Dwarka 361305</div>
                </div>
            </div>

            <div className={styles.container_second}>
                <div className={styles.inner_container}>
                    <div className={styles.property}>Addhar Number</div>
                    <div className={styles.value}>{query.addharCard}</div>
                </div>
                <div className={styles.inner_container}>
                    <div className={styles.property}>Fees Status</div>
                    <div className={styles.value}>{query.feesStatus}</div>
                </div>
            </div>

            {/* <div className={styles.container_second}>
                <div className={styles.inner_container}>
                    <div className={styles.property}>Room mate - I</div>
                    <div className={styles.value}>Name</div>
                </div>
                <div className={styles.inner_container}>
                    <div className={styles.property}>Room mate - II</div>
                    <div className={styles.value}>Name</div>
                </div>
            </div> */}
            <div className={styles.container}>
               ACPC admission letter: pdf
            </div>
        </div>
    )
}

export default studentdetail
