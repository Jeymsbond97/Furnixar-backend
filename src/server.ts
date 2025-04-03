/***                  IMPORT PACKAGES                     **/


console.log("EXUCUTED");
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import app from './app';



/**                    MAIN SECTIONS                      **/


mongoose.connect(process.env.MONGO_URL as string, {}).then((data) => {
    console.log("MongoDb connection succed");
    const PORT = process.env.PORT as String ?? 3003;
    app.listen(PORT, function(){
        console.info(`The server is running successfully on port: ${PORT}`);
        console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
}).catch((err) => {
    console.log("ERROR on connection MongoDb", err)
});




// MVC => Patternlar :
// Model => View => Controller
/*
    Model -> bu asosan biznes logiklarni bajaradi yani asosiy logik ishlarni bajaradi. va bu ikkiga bo'linadi: 
    1. Schema Modullar -> Bu asosan database bilan ishlaydi.
    2. Service Modellar -> Bu ase controller bilan to'g'ridan to'g'ri ishlaydi.
*/











/*

    Patterlar...........
    
    Architectoral pattern => MVC, Dependency Injection, MVP

    MVC -> MODEL VIEW CONTROLLER;

    DESIGN pattern: Middleware, Decotor

*/
