
  const express = require("express");
  const bodyParser = require("body-parser");

  const app = express();
  app.use(bodyParser.urlencoded({extended: true}));



  app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
  });

  app.get("/BMICalculator", function(req, res){
    res.sendFile(__dirname + "/BMI.html");
  });

  app.post("/", function(req, res){

    var num1= req.body.num1;
    var num2= req.body.num2;
    var result= Number(num1)+Number(num2);

    res.send("Your result is: "+result+" Thanks");
  });

  app.post("/BMICalculator", function(req, res){

      var height=Number(req.body.height);
      var weight=Number(req.body.weight);
      var bmi= weight/(height*height);

      res.send("Your BMI is: "+bmi);
  });

  app.listen(3000, function(){
    console.log("server has started on port 3000");
  });
