var express = require('express'),
    cors = require('cors'),
    app = express();
const port = 8080;

var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.use(cors());

app.get('/',(req,res)=>{
    res.send({mytext: 'Nodejs side!'});
});

app.listen(port, ()=>{
console.log(`Listening on port ${port} !!`);
});