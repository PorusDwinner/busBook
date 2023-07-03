const trips = require('./Data/trips');

// withDB FUNCTION TO CONNECT WITH DATABASE
const withDB = require('./withDB/withDB');

// CREATE COLLECTION USING SCHEMA
//--------ALWAYS RUN 'createCollections()' BEFORE 'insertDataToCollections()'-------\\

function createCollections(){

    // withDB( async(db) => {
    //     await db.createCollection('TRIPS',{
    //         validator : {
    //             $jsonSchema : {
    //                 bsonType : 'object',
    //                 required : ['BusNo','BusName','category','Source','Destination','Date',
    //                             'DepartureTime','ArrivalTime','TripTime','Fare','session','Animeties_list'],
    //                 properties : {
    //                     BusNo : {
    //                         bsonType : 'string',
    //                         description : 'bus no. must be a string'
    //                     },
    //                     BusName : {
    //                         bsonType : 'string',
    //                         description : 'bus name must be a string'
    //                     },
    //                     category : {
    //                         bsonType : 'string',
    //                         description : 'category must be a stirng'
    //                     },
    //                     Source : {
    //                         bsonType : 'string',
    //                         description : 'source name must be a string'
    //                     },
    //                     Destination : {
    //                         bsonType : 'string',
    //                         description : 'destination name must be a string'
    //                     },
    //                     Date : {
    //                         bsonType : 'string',
    //                         description : 'description must be an string'
    //                     },
    //                     DepartureTime : {
    //                         bsonType : 'string',
    //                         description : 'departure time must be a string'
    //                     },
    //                     ArrivalTime : {
    //                         bsonType : 'string',
    //                         description : 'arrival time must be a string'
    //                     },
    //                     TripTime : {
    //                         bsonType : 'string',
    //                         description : 'trip time must be a string'
    //                     },
    //                     Fare : {
    //                         bsonType : 'string',
    //                         description : 'fare must be a string'
    //                     },
    //                     Session : {
    //                         bsonType : 'string',
    //                         description : 'session must be a string'
    //                     },
    //                     Animeties_list : {
    //                         bsonType : 'array',
    //                         items : {
    //                             bsonType : 'string',
    //                             description : 'animities list items must be a string'
    //                         }
    //                     },
    //                 }
    //             }
    //         }
    //     })
    //     .then(() => console.log('TRIPS Collection Created Succesfully'))
    //     .catch((err) => console.log('Failed To Create TRIPS Collection',err));
    // });
    

    // CREATE BOOKINGS COLLECTION TO SAVE BOOKINGS FROM THE USER

    // withDB( async(db) => {
    //     await db.createCollection('BOOKINGS',{
    //         validator : {
    //             $jsonSchema : {
    //                 bsonType : 'object',
    //                 required : ['formData'],
    //                 properties : {
    //                     bsonType : 'object',
    //                     description : 'form data must be an object'
    //                 },
    //             }
    //         }
    //     })
    //     .then(() => console.log('BOOKINGS Collection Created Successfully'))
    //     .catch((err) => console.log('Failed To Create BOOKINGS Collection'));
    // });

    // withDB( async(db) => {
    //     await db.createCollection('USERS',{
    //         validator : {
    //             $jsonSchema : {
    //                 bsonType : 'object',
    //                 required : ['username','password','email','mobile'],
    //                 properties : {
    //                     username : {
    //                         bsonType : 'stirng',
    //                         description : 'name must be a stirng'
    //                     },
    //                     password : {
    //                         bsonType : 'string',
    //                         description : 'password must be a string'
    //                     },
    //                     email : {
    //                         bsonType : 'string',
    //                         description : 'email must be a string'
    //                     },
    //                     mobile : {
    //                         bsonType : 'int',
    //                         description : 'mobile no. must be integer value'
    //                     }
    //                 }
    //             }
    //         }
    //     })
    //     .then(() => console.log('USERS Collection Created Succesfully'))
    //     .catch((err) => console.log('Failed To Create USERS Collection'));
    // });
};

// ADD DATA TO RESPECTIVE COLLECTION

function insertDataToCollections(){

    withDB( async(db) => {
        await db.collection('TRIPS').insertMany(trips)
            .then(() => console.log('Data Added To TRIPS Collection'))
            .catch((err) => console.log('Failed To Add Data To TRIPS Collection',err));
    })
    .then(() => console.log('TRIPS COLLECTION CREATED SUCCESFULLY'))
};

function drop(){
    withDB(async(db) => {
        await db.collection('TRIPS').drop()
        .then(() => console.log('TRIPS droped Succesfully'))
        .catch((err) => console.log('Failed To Drop TRIPS', err));
    })
};
// createCollections();
insertDataToCollections();
// drop();
