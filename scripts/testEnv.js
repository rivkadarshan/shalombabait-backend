import dotenv from 'dotenv';
dotenv.config();

console.log('USER:', process.env.MYSQL_USER);
console.log('PASSWORD:', process.env.MYSQL_PASSWORD);
console.log('DB:', process.env.MYSQL_DATABASE);
