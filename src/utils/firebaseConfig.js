const { initializeApp } = require("firebase/app");
// const { getDatabase,ref, set, child, get,update  } =require("firebase/database");
// import { getFirestore } from "firebase/firestore";
const { getFirestore, doc, getDoc, setDoc, Timestamp,addDoc ,collection,getDocs,orderBy,limit,query,where} = require("firebase/firestore");
// import { initializeApp } from 'firebase/app';
// import { getDatabase } from "firebase/database";

// Initialize Firebase
const hostelRoom = require('../utils/hostel.json');
const { Turret_Road } = require("next/font/google");





const firebaseConfig = {
  apiKey: "AIzaSyCFaHxcrvZ4j9tsuQY-vno04xN8UZAwI3w",
  authDomain: "barscan-f20f5.firebaseapp.com",
  projectId: "barscan-f20f5",
  storageBucket: "barscan-f20f5.appspot.com",
  messagingSenderId: "274890682360",
  appId: "1:274890682360:web:0c90c6e6bfb40fd35d700d",
  databaseURL:
    "https://barscan-f20f5-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// hostelRoom.Sheet1.forEach((ele, index) => { 
//   console.log(ele);


//  })
// const data =    {
//   fName: "Karan",
//   mName: "Dhrumilbhai",
//   lName: "Patel",
//   studentMobile : 7564092185,
//   fatherMobile: 9821073645,
//   enrollmentNumber: 200170107001,
//   addharCard: 975192731073,
//   year : 2023,
//   department: "Information Technology",
//   semester: 1,
//   ACPCRank: 3129,
//   PWD: "Yes",
//   hostelName: "B1",
//   floor: 0,
//   romNumber: 2101,
//   feesStatus: "Paid",
//   roomMate1: "Rohit Patel",
//   roomMate2: "Ankit Singh"
// };


//  const Sheet1 = [
//     {
//       fName: "Karan",
//       mName: "Dhrumilbhai",
//       lName: "Patel",
//       studentMobile : 7564092185,
//       fatherMobile: 9821073645,
//       enrollmentNumber: 200170107001,
//       addharCard: 975192731073,
//       year : 2023,
//       department: "Information Technology",
//       semester: 1,
//       ACPCRank: 3129,
//       PWD: "Yes",
//       hostelName: "B1",
//       floor: 0,
//       romNumber: 2101,
//       feesStatus: "Paid",
//       roomMate1: "Rohit Patel",
//       roomMate2: "Ankit Singh"
//     },
//     {
//       fName: "Ajay",
//       mName: "Dilipkumar",
//       lName: "Ahir",
//       studentMobile : 8971023465,
//       fatherMobile: 9876541230,
//       enrollmentNumber: 200170107002,
//       addharCard: 624080057725,
//       year : 2023,
//       department: "Chemical Engineering",
//       semester: 1,
//       ACPCRank: 4512,
//       PWD: "Yes",
//       hostelName: "B1",
//       floor: 0,
//       romNumber: 2101,
//       feesStatus: "Paid",
//       roomMate1: "Anish Gupta",
//       roomMate2: "Aditya Sharma"
//     },
//     {
//       fName: "Anirudh",
//       mName: "Arvind",
//       lName: "Chauhan",
//       studentMobile : 6348059721,
//       fatherMobile: 9967530192,
//       enrollmentNumber: 200170107003,
//       addharCard: 967677615161,
//       year : 2023,
//       department: "Computer Engineering",
//       semester: 1,
//       ACPCRank: 5438,
//       PWD: "No",
//       hostelName: "B1",
//       floor: 1,
//       romNumber: 2101,
//       feesStatus: "Paid",
//       roomMate1: "Vikram Chauhan",
//       roomMate2: "Rajat Trivedi"
//     },
//     {
//       fName: "Manoj",
//       mName: "Sanjay",
//       lName: "Sharma",
//       studentMobile : 7612385049,
//       fatherMobile: 9170893421,
//       enrollmentNumber: 200170107004,
//       addharCard: 668331675527,
//       year : 2023,
//       department: "Electrical Engineering",
//       semester: 1,
//       ACPCRank: 2906,
//       PWD: "No",
//       hostelName: "B1",
//       floor: 1,
//       romNumber: 2102,
//       feesStatus: "Paid",
//       roomMate1: "Sujit Desai",
//       roomMate2: "Rahul Shah"
//     },
//     {
//       fName: "Rajat",
//       mName: "Rahul",
//       lName: "Verma",
//       studentMobile : 9246871350,
//       fatherMobile: 9867504312,
//       enrollmentNumber: 200170107005,
//       addharCard: 319087781044,
//       year : 2023,
//       department: "Electronics & Communication Engineering",
//       semester: 1,
//       ACPCRank: 4815,
//       PWD: "No",
//       hostelName: "B1",
//       floor: 2,
//       romNumber: 2102,
//       feesStatus: "Paid",
//       roomMate1: "Rohan Kumar",
//       roomMate2: "Akash Singhani"
//     },
//     {
//       fName: "Siddharth",
//       mName: "Nitin",
//       lName: "Patel",
//       studentMobile : 5203981674,
//       fatherMobile: 8954123670,
//       enrollmentNumber: 200170107006,
//       addharCard: 155572425106,
//       year : 2023,
//       department: "Instrumentation & Control Engineering",
//       semester: 1,
//       ACPCRank: 1196,
//       PWD: "No",
//       hostelName: "B1",
//       floor: 2,
//       romNumber: 2102,
//       feesStatus: "Paid",
//       roomMate1: "Shivansh Choudhary",
//       roomMate2: "Ajay Agrawa"
//     },
//     {
//       fName: "Tarun",
//       mName: "Deepak",
//       lName: "Shah",
//       studentMobile : 3598402167,
//       fatherMobile: 9812673405,
//       enrollmentNumber: 200170107007,
//       addharCard: 373168173848,
//       year : 2023,
//       department: "Mechanical Engineering",
//       semester: 1,
//       ACPCRank: 5057,
//       PWD: "No",
//       hostelName: "B2",
//       floor: 1,
//       romNumber: 2103,
//       feesStatus: "Paid",
//       roomMate1: "Karan Joshi",
//       roomMate2: "Naveen Shah"
//     },
//     {
//       fName: "Rohit",
//       mName: "Rakesh",
//       lName: "Gupta",
//       studentMobile : 8021569374,
//       fatherMobile: 9876321450,
//       enrollmentNumber: 200170107008,
//       addharCard: 373168173849,
//       year : 2023,
//       department: "Power Electronics Engineering",
//       semester: 1,
//       ACPCRank: 5374,
//       PWD: "No",
//       hostelName: "B2",
//       floor: 1,
//       romNumber: 2103,
//       feesStatus: "Paid",
//       roomMate1: "Alok Verma",
//       roomMate2: "Varun Mehta"
//     },
//     {
//       fName: "Avikar",
//       mName: "Satish",
//       lName: "Trivedi",
//       studentMobile : 1674930582,
//       fatherMobile: 9035462178,
//       enrollmentNumber: 200170107009,
//       addharCard: 975392931073,
//       year : 2022,
//       department: "Computer Science and Engineering",
//       semester: 3,
//       ACPCRank: 3974,
//       PWD: "No",
//       hostelName: "B2",
//       floor: 2,
//       romNumber: 2103,
//       feesStatus: "Paid",
//       roomMate1: "Prashant Sharma",
//       roomMate2: "Abhishek Chauhan"
//     },
//     {
//       fName: "Pranav",
//       mName: "Anil",
//       lName: "Desai",
//       studentMobile : 4927681350,
//       fatherMobile: 9987654310,
//       enrollmentNumber: 200170107010,
//       addharCard: 624080057726,
//       year : 2022,
//       department: "Information Technology",
//       semester: 3,
//       ACPCRank: 2145,
//       PWD: "No",
//       hostelName: "B2",
//       floor: 2,
//       romNumber: 2104,
//       feesStatus: "Paid",
//       roomMate1: "Manish Patel",
//       roomMate2: "Yuvraj Singh"
//     },
//     {
//       fName: "Gaurav",
//       mName: "Ajay",
//       lName: "Mehta",
//       studentMobile : 6058942713,
//       fatherMobile: 9168745032,
//       enrollmentNumber: 200170107011,
//       addharCard: 967677615261,
//       year : 2022,
//       department: "Chemical Engineering",
//       semester: 3,
//       ACPCRank: 5187,
//       PWD: "No",
//       hostelName: "B2",
//       floor: 1,
//       romNumber: 2104,
//       feesStatus: "Paid",
//       roomMate1: "Rahul Verma",
//       roomMate2: "Arjun Choudhary"
//     },
//     {
//       fName: "Karthik",
//       mName: "Naveen",
//       lName: "Singh",
//       studentMobile : 8157309642,
//       fatherMobile: 9810765432,
//       enrollmentNumber: 200170107012,
//       addharCard: 668331675527,
//       year : 2022,
//       department: "Computer Engineering",
//       semester: 3,
//       ACPCRank: 4836,
//       PWD: "No",
//       hostelName: "B2",
//       floor: 1,
//       romNumber: 2104,
//       feesStatus: "Paid",
//       roomMate1: "Sandeep Shah",
//       roomMate2: "Deepak Agrawal"
//     },
//     {
//       fName: "Abhinav",
//       mName: "Ashok",
//       lName: "Choudhary",
//       studentMobile : 2761059834,
//       fatherMobile: 9843120765,
//       enrollmentNumber: 200170107013,
//       addharCard: 319086781044,
//       year : 2022,
//       department: "Electrical Engineering",
//       semester: 3,
//       ACPCRank: 2895,
//       PWD: "No",
//       hostelName: "B2",
//       floor: 2,
//       romNumber: 2105,
//       feesStatus: "Paid",
//       roomMate1: "Rohit Mehta",
//       roomMate2: "Rajiv Trivedi"
//     },
//     {
//       fName: "Aman",
//       mName: "Ankit",
//       lName: "Patel",
//       studentMobile : 4708365291,
//       fatherMobile: 8967431205,
//       enrollmentNumber: 200170107014,
//       addharCard: 155576425106,
//       year : 2022,
//       department: "Electronics & Communication Engineering",
//       semester: 3,
//       ACPCRank: 3362,
//       PWD: "No",
//       hostelName: "B2",
//       floor: 1,
//       romNumber: 2105,
//       feesStatus: "Not Paid",
//       roomMate1: "Vishal Patel",
//       roomMate2: "Sameer Gupta"
//     },
//     {
//       fName: "Mayank",
//       mName: "Karan",
//       lName: "Sharma",
//       studentMobile : 6839102457,
//       fatherMobile: 9975421863,
//       enrollmentNumber: 200170107015,
//       addharCard: 373168173848,
//       year : 2022,
//       department: "Instrumentation & Control Engineering",
//       semester: 3,
//       ACPCRank: 5061,
//       PWD: "No",
//       hostelName: "B2",
//       floor: 1,
//       romNumber: 2105,
//       feesStatus: "Not Paid",
//       roomMate1: "Nitesh Sharma",
//       roomMate2: "Aman Singh"
//     },
//     {
//       fName: "Arman",
//       mName: "Nizambhai",
//       lName: "Navodia",
//       studentMobile : 9601262057,
//       fatherMobile: 7698849939,
//       enrollmentNumber: 200170107090,
//       addharCard: 674704771234,
//       year : 2021,
//       department: "Computer Engineering",
//       semester: 6,
//       ACPCRank: 1148,
//       PWD: "No",
//       hostelName: "B2",
//       floor: 1,
//       romNumber: 2106,
//       feesStatus: "Paid",
//       roomMate1: "Dilip Ahir",
//       roomMate2: "Umar Badi"
//     },
//     {
//       fName: "Dilip",
//       mName: "Bhimabhai",
//       lName: "Ahir",
//       studentMobile : 9313903585,
//       fatherMobile: 7698849940,
//       enrollmentNumber: 200170107124,
//       addharCard: 674704771235,
//       year : 2021,
//       department: "Computer Engineering",
//       semester: 6,
//       ACPCRank: 2048,
//       PWD: "No",
//       hostelName: "B2",
//       floor: 1,
//       romNumber: 2106,
//       feesStatus: "Paid",
//       roomMate1: "Arman Navodia",
//       roomMate2: "Umar Badi"
//     },
//     {
//       fName: "Umar",
//       mName: "Yunus",
//       lName: "Badi",
//       studentMobile : 7698849938,
//       fatherMobile: 97273015077,
//       enrollmentNumber: 200170107109,
//       addharCard: 674704771235,
//       year : 2021,
//       department: "Computer Engineering",
//       semester: 6,
//       ACPCRank: 1503,
//       PWD: "No",
//       hostelName: "B2",
//       floor: 1,
//       romNumber: 2106,
//       feesStatus: "Paid",
//       roomMate1: "Dilip Ahir",
//       roomMate2: "Arman Navodia"
//     }
//   ]


 

//  const updateHostel = async(enroll="29032",data={})=>{
//   console.log()
//   //   const docRef = await addDoc(collection(db, "hostel"), {hello :true});
//   // console.log("Document written with ID: ", docRef.id);
   

//     // const docSnap1 = await setDoc(doc(db, "hostel", enroll), {hello:true});
//     await setDoc(doc(db, "hostel", enroll.toString()), data);
    
//     console.log("hello")
// }

//  //updateHostel(data.enrollmentNumber,data);

//  Sheet1.forEach(element => {
//   updateHostel(element.enrollmentNumber,element);
// });


export const getDatafromRoomNo = async (roomNo)=>{
  const data = [];
  const q = query(collection(db, "hostel"), where("romNumber", "==", roomNo));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  data.push({id:doc.id,value:doc.data()});
});
return data;
}

















export  const getTodayEntry = async()=>{
  const data = [];
  var d = new Date();
  const today =
      d.getFullYear() + ("0" + (d.getMonth() + 1)).slice(-2) + ("0" + d.getDate()).slice(-2);
  console.log(today);
  const querySnapshot = await getDocs(query(collection(db, "entry", today,"student"), limit(10)));

  
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    data.push({id:doc.id,value:doc.data()});
  });
  console.log("dat",data.length);
  return data;
  

}
//getTodayEntry();

const getStudentEntryBydate = async(enroll)=>{
  var d = new Date();
  const today =
      d.getFullYear() + ("0" + (d.getMonth() + 1)).slice(-2) + ("0" + d.getDate()).slice(-2);
      console.log(today);
      const querySnapshot = await getDocs(query(collection(db, "entry", today,enroll), limit(10)));


      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
}

//getStudentEntryBydate("200170107124");













// const mainput = (enroll)=>{
//   const today = new Date().toISOString().slice(0, 10).replaceAll('-','');
  



// }


// const addActivity  = async (enroll,time,checkIn=true,today)=>{
//   const docRef = await addDoc(collection(db, "entry",today,enroll), {
//     checkIn,
//     time: Timestamp.now(),
//     enroll
//   });
//   console.log("Document written with ID: ", docRef.id);
// }
// const setActivity  = async (enroll,time,checkIn=true,today)=>{

//   console.log("Document written with ID: ", docRef.id);
//   const docSnap = await setDoc(doc(db, "student", enroll), {
//     checkIn,time
//   });
//   const docSnap1 = await setDoc(doc(db, "entry", today,"student",enroll), {
//     checkIn,time
//   });
// }







// const getTodayEntries = async()=>{
//     const today = new Date().toISOString().slice(0, 10).replaceAll('-','');
//     const querySnapshot = await getDocs(query(collection(db, "entry","20230330","20230330"), limit(2)));
//     //query(citiesRef, orderBy("name"), limit(3))
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//     });




//   //   console.log(today);
//   //    const docRef = doc(db, "entry", "20230330");
//   //   const data  = await getDoc(docRef);

//   //   if (data.exists()) {
//   //       console.log("Document data:", data.data());
//   //     } else {
//   //       // doc.data() will be undefined in this case
//   //       console.log("No such document!");
//   //     }
//    }
// const getTodayEntries2 = async()=>{
//     const today = new Date().toISOString().slice(0, 10).replaceAll('-','');
//     const querySnapshot = await getDocs(query(collection(db, "entry","20230328","200170107125"), limit(2)));
//     //query(citiesRef, orderBy("name"), limit(3))
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//     });




//   //   console.log(today);
//   //    const docRef = doc(db, "entry","20230328","200170107124");
//   //   const data  = await getDoc(docRef);

//   //   if (data.exists()) {
//   //       console.log("Document data:", data.data());
//   //     } else {
//   //       doc.data() will be undefined in this case
//   //       console.log("No such document!");
//   //     }
//    }
// const getTodayEntries3 = async()=>{
//     // const today = new Date().toISOString().slice(0, 10).replaceAll('-','');
//     // const querySnapshot = await getDocs(query(collection(db, "entry","20230328"), limit(2)));
//     // //query(citiesRef, orderBy("name"), limit(3))
//     // querySnapshot.forEach((doc) => {
//     //   // doc.data() is never undefined for query doc snapshots
//     //   console.log(doc.id, " => ", doc.data());
//     // });




//     //console.log(today);
//      const docRef = doc(db, "entry","20230331");
//     const data  = await getDoc(docRef);

//     if (data.exists()) {
//         console.log("Document data:", data.data());
//       } else {
//         doc.data();
//         // will be undefined in this case
//         console.log("No such document!");
//       }
//    }
// const getTodayEntries4 = async()=>{
//     // const today = new Date().toISOString().slice(0, 10).replaceAll('-','');
//     const querySnapshot = await getDocs(query(collection(db, "student"), where("checkIn", "==", true)));
//     //query(citiesRef, orderBy("name"), limit(3))
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//     });



//    }


//    getTodayEntries4();



//  const checkStudentActivity = async (enroll) => {
//   console.log("yae")
//   const checkRef = doc(db, "student", `${enroll}`);
//   const docSnap = await getDoc(checkRef);
  
  
//   if (docSnap.exists()) {
//     //  console.log("Document data:", docSnap.data());
//     return docSnap.data();
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
//   return docSnap.data();

//   // await setDoc(doc(db, "cities", "LA"), {
//   //   name: "Los Angeles",
//   //   state: "CA",
//   //   country: "USA"
//   // });
// };

//  const setNewStudent = async (enroll,time,checkIn=true) => {
//   const docSnap = await setDoc(doc(db, "student", enroll), {
//     checkIn,time
//   });
//  // console.log(docSnap);
//   addActivity(enroll,time,checkIn);
// }

// const addActivity  = async (enroll,time,checkIn=true)=>{
//   const today = new Date().toISOString().slice(0, 10).replaceAll('-','');
//   const docRef = await addDoc(collection(db, "entry",today,enroll), {
//     checkIn,
//     time: Timestamp.now(),
//     enroll
//   });
//   console.log("Document written with ID: ", docRef.id);
// }
// const setActivity  = async (enroll,time,checkIn=true,today)=>{

//   console.log("Document written with ID: ", docRef.id);
//   const docSnap = await setDoc(doc(db, "student", enroll), {
//     checkIn,time
//   });
//   const docSnap1 = await setDoc(doc(db, "entry", today,"student",enroll), {
//     checkIn,time
//   });
// }






// const handleMain = async (enroll) => {
//   const data = await checkStudentActivity(enroll);
//   const time = Timestamp.now();
//   console.log(data);
//   if (data == undefined) {
//     console.log("add new data");
//     setNewStudent(enroll,time);
//   } else {
//     setNewStudent(enroll,time,!data.checkIn);
//   }
// };

// module.exports={
//   getTodayEntries,
// }

// //handleMain("200170107125");

// // async function  writeUserData(enroll, name)  {
// //     const db = getDatabase();
// //   await  set(ref(db, 'users/' + enroll), {
// //       name: name,
// //       entry:true
// //     });
// //     console.log("hello")
// //   }

// //  async function getValue(enroll){
// //     const db = getDatabase();

// //     const dbRef = ref(db);
// //  const itm =  await  get(child(dbRef,`users/${enroll}`));
// //  console.log("data1",itm.toJSON())
// //  return itm.toJSON();

// // //  .then((snapshot) => {
// // //       if (snapshot.exists()) {
// // //         console.log(snapshot.val());
// // //         const data= snapshot.val();
// // //         console.log(data);
// // //         return data;
// // //       } else {
// // //         console.log("No data available");
// // //         return false;
// // //       }
// // //     }).catch((error) => {
// // //       console.error(error);
// // //       return false;
// // //     });

// //  }

// //  const updateEntry = (enroll,data)=>{
// //     const db = getDatabase();

// //     const dbRef = ref(db);
// //     const updates = {};
// //     const newentry = !data.entry;
// //     console.log("ent" , data.entry,newentry)
// //   updates[`users/${enroll}/entry`] = !data.entry;
// //  update(dbRef, updates);
// //   console.log("entry updated");

// //  }

// //   //writeUserData("200170107124","Dilip").then((data)=>{console.log})

// //  //getValue();
// //  //updateEntry("200170107124");

// //  const mainHandle =async (enroll)=>{
// //     const data = await getValue(enroll);
// //     console.log("data",data);

// //     if(data==null){
// //         writeUserData(enroll,"qwerty");
// //         console.log("you are checked in");
// //         return;
// //     }
// //     else{
// //         updateEntry(enroll,data);
// //     }
// //  }

// //  mainHandle("200170107136");
