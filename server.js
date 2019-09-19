const express = require("express");
const hbs = require('hbs');
const app = express();
console.log('hi')
// app.use(
//   (date = (req, res, next) => {
//     let requestAt = new Date();
//     console.log(requestAt);
//     next();
//   })
// );
requestDate = (req, res, next) => {
  let requestAt = new Date().getHours();
  
  console.log(requestAt);
  requestAt < 18 && requestAt > 8 ? time='office is open' : time='office is closed';
  console.log(time)
  next();
};
app.use (express.static('public'));
app.set('view engine', hbs);

app.get('/home', requestDate, (req, res) => {
  
    res.render('index.hbs',{time});
  })


// app.get("/home", requestDate, (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });
// app.get("/ourmenu", requestDate, (req, res) => {
//   res.sendFile(__dirname + "/public/menu.html");
// });

// app.get("/contact", requestDate, (req, res) => {
//   res.sendFile(__dirname + "/public/contact.html");
// });
// app.get("/users/:nom", requestDate, (req, res) => {
//   console.log(req.params.nom);
//   res.send(req.params.nom + " is connected");
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, err => {
 err ? console.log(err) : console.log(`Server is running on port ${PORT}`);
});
