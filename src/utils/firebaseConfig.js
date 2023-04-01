const { initializeApp } = require("firebase/app");
// const { getDatabase,ref, set, child, get,update  } =require("firebase/database");
// import { getFirestore } from "firebase/firestore";
const { getFirestore, doc, getDoc, setDoc, Timestamp,addDoc ,collection,getDocs,orderBy,limit,query,where} = require("firebase/firestore");
// import { initializeApp } from 'firebase/app';
// import { getDatabase } from "firebase/database";

// Initialize Firebase
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


export const getTodayEntry = async()=>{
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
