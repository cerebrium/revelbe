const sequelize = require('../sequelize');
const { pickRandom, randomDate } = require('./helpers/random');

async function reset() {
	console.log('Will rewrite the SQLite example database, adding some dummy data.');

	await sequelize.sync({ force: true });

  // add some dummy data here - e.g.: 
	// await sequelize.models.[modelName].bulkCreate([
	// {key: value, key2: value2},
	// {key: value, key2: value2},
	// ]);

	console.log('Done!');
}

reset();
