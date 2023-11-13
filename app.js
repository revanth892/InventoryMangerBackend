const express=require('express');
const sequelize=require('./config');
const router = require('./routes/routes');
const PORT =3000
// const router=require('./routes/routes');
const app = express();

// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'revanthnaidu@123',
//     database:'node-complete',
//     dialect:'mysql',
//     pool:{
//         max:5,
//         min:0,
//         idle:10000
//     }
// })
// const sequelize=new Sequelize('node-complete','root','revanthnaidu@123',{
//     host:'localhost',
//     dialect:'mysql',
//     pool:{
//         max:5,
//         min:0,
//         idle:10000
//     }
// })

// db.connect(err =>{
//     if(err)
//     {
//         console.log('MySQL conection error:',err);
//     }
//     else
//     {
//         console.log('Connected to MySQL');
//     }
// })
app.use(express.json());

app.use('/',router)
sequelize.sync({alter:true})
    .then(()=>{console.log('Database and tables are synced')})
    .catch(err=> console.error('Error syncing db',err));
    

// app.use('/',router)

app.listen(PORT,()=>{
    console.log("server is running");
})