const mongoose = require('mongoose');
const db = process.env.DATABASE;
mongoose.connect(db, {
    
}).then(() => {
    console.log(`connection is successful`);
}).catch((error) => console.log(`no conncetion`)
    
);
