const { MongoClient } = require('mongodb');

require('dotenv').config();

// CONNECTION STRING
const URI = `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@cluster0.q23poih.mongodb.net/`;

const withDB = async (operations , res) => {
	try {
		const client = await MongoClient.connect(URI);

		const db = client.db('almaxProject');
		await operations(db);
		client.close();
	} catch(error){
		res.json('Failed To Connect With DB');
		console.log('Failed To Connect With DB')
	}
};

module.exports = withDB;