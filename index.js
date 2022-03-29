const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.use('/', express.static(__dirname));

  app.post('/', function (req, res) {
        
    console.log(req.body); 
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
      "items": [
        {
          "title": "TITLE ONE",
          "description": "Description 1",
          "image": "https://www.beautyarmy.com/wp-content/uploads/2019/12/stack.jpg"
        },
        {
          "title": "TITLE TWO",
          "description": "Description 2",
          "image": "https://www.salesbabu.com/wp-content/uploads/2014/02/stock.png"
        },
        {
          "title": "TITLE THREE",
          "description": "Description 3",
          "image": "https://3.imimg.com/data3/QJ/UW/MY-14248082/stock-inventory-management-system-with-pos-point-of-sale-500x500.jpg"
        }
      ]
     }, null, 3));
    
        
    

  })
      
    

  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
  console.log("init server")
    
