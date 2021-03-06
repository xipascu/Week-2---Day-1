var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");

var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

// "/" root path
app.get("/", (req, res) => {
  res.end();
});

app.get('/urls', (req, res) => {
    let templateVars = {urls: urlDatabase};
    res.render("urls_index", templateVars);
});

app.get('/urls/:id', (req, res) => {
  let templateVars = {urls: urlDatabase};
  res.render("urls_show", templateVars);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/urls.json", (req, res) => {
    res.json(urlDatabase);
  });

// app.get("/hello", (req, res) => {
//     res.end("<html><body>Hello <b>World</b></body></html>\n");
//   });  