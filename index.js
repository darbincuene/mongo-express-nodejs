'use strict'
import mongoose from 'mongoose';
import app from './app.js';

const port =4000

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://127.0.0.1/shirt')
    .then(()=>{
        console.log('conexion a la base de datos');

        app.listen(port,()=>{
            console.log("servicio funciona correctamente")
        })

    })
    .catch(err =>console.log(err));

