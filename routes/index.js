// Full Documentation - https://docs.turbo360.co
const express = require('express')
const { route } = require('../app')
const router = express.Router()

/*  This is the home route. It renders the index.mustache page from the views directory.
  Data is rendered using the Mustache templating engine. For more
  information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
})


 
// creating another get handler
router.get('/test',(req,res)=>{ // test can be determined as an variable
  res.json({
    data: 'This is a test response'
  })
})
// using an query get handler
router.get('/query', (req,res) => {
const name = req.query.name // this how you add an query parameter
/* query parameter takes an key as an input and has an value in it ex= localhost:/3000/query?name=manish   */
// we can append query parameter with & //
const occupation = req.query.occupation
const age = req.query.age
const data = { // data object renders the name and occupation keys value dynamically
  name: name,
  occupation: occupation,
  age : age
 }
 res.render('profile',data) // profile is the path to file where the data will be rendered dynamically in html
// have comeented out res.json so that i can render the data dynamically
 /* res.json({
    name: name,
    occupation: occupation                
  }) */
})

// an post request
router.post('/post',(req,res) =>{
  const body = req.body // normally comes from a post form
  res.json({
    confirmation: 'success',
    data: body 
  })
})

// using parameters to dynamically print the entered data
// adding colons makes the param an dynamic variable that we can enter on url
router.get('/:param',(req,res)=>{ // when added : it becomes an parameter
   const path = req.params.param
  res.json({
    data: path
  })
})

// using multiple request parameters
router.get('/:man/:women',(req,res)=>{
  const man = req.params.man
  const women = req.params.women
  res.json({
    man: man,
    women: women
  })
})
module.exports = router
