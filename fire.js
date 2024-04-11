// Assuming 'firestore' is already initialized as in the previous example

// Example: Retrieve data from Firestore
const docRef = firestore.collection('planets').doc('earth');

docRef.get().then((doc) => {
    if (doc.exists) {
        const data = doc.data();
        console.log('Document data:', data);

        // Now you can render the data in your HTML
        document.getElementById('planetName').innerText = data.name;
        document.getElementById('planetDescription').innerText = data.description;
    } else {
        console.log('No such document!');
    }
}).catch((error) => {
    console.log('Error getting document:', error);
});
