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
