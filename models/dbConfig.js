const { Pool } = require('pg');
const itemsPool = new Pool({
    connectionString: process.env.DBConfigLink
});
module.exports = itemsPool;
