import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import firebase from './firebaseConfig';
import { collection, doc, setDoc, getDoc, docRef, getDocs } from "firebase/firestore";

import { db } from './firebaseConfig';
import YourComponent from './getData';


let gradebook = {
  emily: {
      name: 'Emily',
      grade: 93,
      absences: 1,
      imgUri: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg'
  },
  leo: {
      name: 'Leo',
      grade: 72,
      absences: 3,
      imgUri: 'https://upload.wikimedia.org/wikipedia/en/6/61/Tricolor-Corgi.jpg'
  },
  susan: {
      name: 'Susan',
      grade: 81,
      absences: 5,
      imgUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Golden_Retriever_standing_Tucker.jpg/640px-Golden_Retriever_standing_Tucker.jpg'
  },
  lassie: {
      name: 'Lassie',
      grade: 100,
      absences: 2,
      imgUri: 'https://a-z-animals.com/media/2023/04/iStock-471005804.jpg'
  },
  george: {
      name: 'George',
      grade: 62,
      absences: 4,
      imgUri: 'https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg'
  }
}

// async function GetData() {
  try {
    // const db = firebase.firestore();
    await setDoc(doc(db, 'students', 'gradebook'), {
      gradebook: gradebook
    });
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
// }

// const grades = []
export const FirebaseFetcher = () => {
  const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async function GetData() {
    const querySnapshot = await getDocs(collection(db, 'students'));
    const dataArray = querySnapshot.docs.map(doc => doc.data());
    setData(dataArray);
    console.log(dataArray)
  };

  fetchData();
}, []);
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//         const querySnapshot = await getDocs(collection(db, "students"));
//         querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`)  
// })
//         fetchData()
//       }
      return (
            <View>    
               {/* <FlatList data={students} renderItem={
        ({ item }) => <GetData  />
      } /> */}
              <h1>Z101 Gradebook</h1>
              <p>Tried for many, many hours to get Firebase data to display on page.</p>

              <h2>Students</h2>
              <h3>Emily</h3>
                <p>Grade: 93</p>
                <p>Absences: 1</p>

              <h3>Leo</h3>
                <p>Grade: 93</p>
                <p>Absences: 1</p>

              <h3>Susan</h3>
                <p>Grade: 93</p>
                <p>Absences: 1</p>
              <h3>Lassie</h3>

                <p>Grade: 93</p>
                <p>Absences: 1</p>
              <h3>George</h3>
                <p>Grade: 93</p>
                <p>Absences: 1</p>

              </View>
            
          )
}

async function GetData() {
  const docRef = doc(db, "students", "gradebook");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

}

GetData()



// export const FirebaseFetcher = () => {
//   const [students, setStudents] = useState([]);
//   useEffect(() => {
//     // const db = firebase.firestore();
    
    
//     const fetchData = async () => {
//       const data = await db.collection('students').get();
//       data.docs.forEach(doc => {
//         console.log(doc.data());
//         const { gradebook, text } = doc.data()
//         grades.push((
//           emily,
//           grade
//         ))
//         console.log(grades);
//       })
//       setStudents(grades)
//     };
//     fetchData();
//   }, []);

//   return (
//     // <div>
//     //   {/* Your JSX here */}
//     // </div>
//     <View>
//       <FlatList 
//         data={grades}
//         renderItem={({ item }) => (
//           <Text>
//             hello
//           </Text>
//         )}
//       />
//       {/* <Text>Hello</Text> */}
//     </View>
//   );
// };


