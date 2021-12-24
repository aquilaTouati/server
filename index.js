
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routers.js/router2.js';
import userRoutes from './routers.js/router3.js';

const app = express();
//body parser helps to properly send the requests
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const CONNECTION_URL = 'mongodb+srv://akilol:strawberry1997@cluster0.csnp4.mongodb.net/test';
const PORT = process.env.PORT|| 5000;

//giving 2 parameters, connection URL and parser Object
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
 /*promise*/ .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);