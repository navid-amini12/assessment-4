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
// starting new 

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

// ending new 


app.listen(4000, () => console.log("Server running on 4000"));
