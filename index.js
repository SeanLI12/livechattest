const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.use('/', express.static(__dirname));

  app.post('/', function (req, res) {
        
    console.log(req.body); 
    res.send(JSON.stringify({ Result: 1 }, null, 3));
    
        
    

  })
      
    

  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
  console.log("init server")
    
