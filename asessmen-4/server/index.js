const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliments", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});


app.get("/api/fortune", (req, res) => {
  const fortune = ["A friend asks only for your time not your money.!",
					 "A faithful friend is a strong defense.",
					 "Don’t just spend time. Invest it.",
           "A faithful friend is a strong defense.",
					 "Do not underestimate yourself. Human beings have unlimited potentials.",
           "Don’t let friends impose on you, work calmly and silently",
					 "Do not make extra work for yourself.",
  ];

  let randomIndex2 = Math.floor(Math.random() * fortune.length);
  let randomCompliment = fortune[randomIndex2];

  res.status(200).send(randomCompliment);
});

app.listen(4000, () => console.log("Server running on 4000"));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/validator', function(req, res) {

    if (req.body.age  < 12  ) {
      res.status(401).send("Age must be 18+. Data could not be sent to the server <br><br>  Error 401 ");
   } else {
     res.status(200).send("Your date has been successfully sent to the server");
   }
})
app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/movies', function(req, res) {
  switch (req.body.movies) {
    case 'Friday the 13th':
      res.status(200).send("Great choice!! You love horror movies. Here is a list of horror movies you could try: <br> Ready or Not <br> The Night House <br> Martin <br> Spider Baby <br>");

      break;
  
    case 'Transporter series':
      res.status(200).send("You have a thing for action movies!Here is a list:<br> Ready or Not <br> Black Night <br> Wrath of Man <br> The Rock <br>");

      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
  

})
app.listen(8070, function() {
  console.log('Server running at http://127.0.0.1:8070/');
});

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/game', function(req, res) {

 if (req.body.a == 100 ) {
  res.status(200).send("You wont the game. Congrats!!");
 } else {
  res.status(406).send("You lost");

 }
  
})
app.listen(8050, function() {
  console.log('Server running at http://127.0.0.1:8050/');
});













