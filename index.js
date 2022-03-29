const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.use('/', express.static(__dirname));

  app.post('/', function (req, res) {
        
    console.log(req.body); 
    
    async function asyncCall() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      res.setHeader('Content-Type', 'application/json');
      res.json({
        "api_GetContext" : {
            "_id": "5d15f436966b92b943be9219",
            "index": 5,
            "guid": "4f60a28d-3eae-4f2d-abd2-184931b57c6e",
            "isActive": false,
            "balance": "$1,023.36",
            "picture": "http://placehold.it/32x32",
            "age": 23,
            "eyeColor": "blue",
            "name": {
                "first": "Moon",
                "last": "Petty"
            },
            "company": "KONGENE",
            "email": "moon.petty@kongene.ca",
            "phone": "+1 (962) 489-3119"
        }
    });

    }
    

     asyncCall();


  })
      
    

  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
  console.log("init server")
    
