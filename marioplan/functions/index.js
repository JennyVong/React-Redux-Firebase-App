const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
response.send("Hello from Firebase!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});

exports.projectsCreated = functions.firestore
    .document('project/{authorId}')
    .onCreate((snap, context) => {
    const project = snap.data();
    const notification = {
        content: 'Added New Project',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()

    };

    return createNotification(notification);

})
