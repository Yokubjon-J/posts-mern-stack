import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: '35mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '35mb', extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

app.get('/', (req,res)=>{
        res.send('this is a backyard');
})

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.URL_CONNECTION, {useNewUrlParser:true, useUnifiedTopology:true})
        .then(()=>app.listen(PORT, ()=>console.log(`Server listening on PORT ${PORT}`)))
        .catch((err)=>console.log(err.message));
mongoose.set('useFindAndModify', false);