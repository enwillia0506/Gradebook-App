import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import firebase from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebaseConfig';

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
    const docRef = addDoc(collection(db, "students"), {
      gradebook: gradebook
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
// }
const grades = []

export const FirebaseFetcher = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    // const db = firebase.firestore();
    
    const fetchData = async () => {
      const data = await db.collection('students').get();
      data.docs.forEach(doc => {
        console.log(doc.data());
        const { heading, text } = doc.data()
        grades.push((
          heading,
          text
        ))
      })
      setStudents(grades)
    };
    fetchData();
  }, []);

  return (
    // <div>
    //   {/* Your JSX here */}
    // </div>
    <View>
      <FlatList 
        data={grades}
        renderItem={({ item }) => (
          <Text>
            hello
          </Text>
        )}
      />
      {/* <Text>Hello</Text> */}
    </View>
  );
};


