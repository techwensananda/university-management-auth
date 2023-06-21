
import mongoose from 'mongoose';
import app from './app';
import config from './config/index';



async function main() {
    try {
        
        await mongoose.connect(config.database_url as string);
        console.log('db connect successful');
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
          })
    } catch (error) {
        console.log('db connect fail',error);
        
    }
    
    
}
main()


      