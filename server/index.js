import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({limit: '35mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '35mb', extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

const URL_CONNECTION = 'mongodb+srv://yokubjon:qwerty12345@cluster0.bnjbc.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(URL_CONNECTION, {useNewUrlParser:true, useUnifiedTopology:true})
        .then(()=>app.listen(PORT, ()=>console.log(`Server listening on PORT ${PORT}`)))
        .catch((err)=>console.log(err.message));
mongoose.set('useFindAndModify', false);