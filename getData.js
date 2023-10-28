// import React, { Component } from 'react';
// import { FlatList, Text, View } from 'react-native';
// import { db } from './firebaseConfig';
// import { collection, doc, addDoc, setDoc, getDoc, docRef, getDocs } from "firebase/firestore";
// import firestore from './firebaseConfig'

// class YourComponent extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         data: [],
//       };
//     }
  
//     componentDidMount() {
//       this.fetchData();
//     }
  
//     async fetchData() {
//       const querySnapshot = await getDocs(collection(db, 'students'));
//       const dataArray = querySnapshot.docs.map(doc => doc.data());
//       this.setState({ data: dataArray });
//     }
  
//     render() {
        
//       return (
        
//         <View>
//           <FlatList
//             data={this.state.data}
//             renderItem={({ item }) => <Text>{item.gradebook.absences}</Text>}
//             keyExtractor={item => item.id.toString()}
//           />
//         </View>
        
//       );
//     }
//   }
  
//   export default YourComponent;