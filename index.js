const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

const initServer = async () => {
  app.use('/', express.static(__dirname));

  app.post('/', function (req, res) {
        
    console.log(req.body); 
    response.send("ok");
        

  })
      
    

  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
  console.log("init server")
    

}







initServer().catch(err => {
    console.log(err);
})
  
