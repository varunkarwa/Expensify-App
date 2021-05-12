import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default};

// database.ref('expenses').on('child_removed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').once('value')
// //     .then((snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach(childSnapshot => {
// //             expenses.push({
// //                 id:childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });

// // database.ref('expenses').on('value', snapshot => {
// //     const expenses = [];
// //     snapshot.forEach(childSnapshot => {
// //         expenses.push({
// //             id:childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // });

// // database.ref('expenses').push({
// //     description: 'Rent',
// //     note: '',
// //     amount: 109500,
// //     createdAt: 976123498763
// // });

// // database.ref('notes/-M_QWVpDxb1phSODS_Vm').remove();

// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'Reaact Native, Angular, Python'
// // });

// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // })

// // database.ref()
// //     .once('value')
// //     .then((snapshot) => {
// //         console.log(snapshot.val());
// //     })
// //     .catch((e) => {
// //         console.log(e);
// //     })

// // database.ref().set({
// //     name: 'Varun Karwa',
// //     age: 20,
// //     stressLevel: 6,
// //     job: {
// //         title:'Software Developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Bhusawal',
// //         country: 'USA'
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((error) => {
// //     console.log(error);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company' : 'Amazon',
// //     'location/city': 'Seatle'
// // })

// // database.ref().remove().then(() => {
// //     console.log('Data was removed');
// // }).catch((error) => {
// //     console.log(error);
// // })