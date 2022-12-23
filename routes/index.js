// Full Documentation - https://docs.turbo360.co
const express = require('express')
const { route } = require('../app')
const router = express.Router()
// http requests post,get,put,delete
/*  This is the home route. It renders the index.mustache page from the views directory.
  Data is rendered using the Mustache templating engine. For more
  information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
})

// creating list of profile of programmers
//collection of profiles
const profiles = {
  // username //
   bgates: {
    image: 'images/bgates.jpg', // this is the images key part of the profiles object//
      name: "Bill Gates", // name key //
      company: 'Microsoft',
      languages: ['javascript', 'c++','react']
        },
        // usernanme //
        sjobs: {
          image: '/images/steve.jpg',
      name: "Steve",
      company: 'Apple',
      languages: ['object-c','swift','c++']
        },
        // usernanme //
        elon: {
          image: '/images/elon.jpg',
      name: "Elon Musk",
      company: 'tesla',
      languages: ['c','c#','java']
        },
        // usernanme //
        megha: {
          name: 'Megha',
          company: 'chapri gang',
          languages: ['hindi','english','pahadi']
        }

      }
 
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
 res.render('profiletwo',data) // profile is the path to file where the data will be rendered dynamically in html
// have commented out res.json so that i can render the data dynamically
 /* res.json({
    name: name,
    occupation: occupation                
  }) */
})
// an post handler for the add profile form in profile.mustache //

router.post('/addprofile',(req,res)=> {
  const body = req.body // this takes the body and sends it to the post method
 
  // this is to render the languages as an array
  body['languages'] = req.body.languages.split(', ')
    // we wanna take the profiles collection and add an profile to it //
  // to do that use  this
  profiles[body.username] = body
  // this takes the new profile that is entered in the post form and redirected to profile to render // 
res.redirect('/profile/' + body.username)})  /**  instead of sending the json we are just gonna redirect
  
// lets render it as an json 
  res.json({
    confirmation: 'success',
    data: body
  })
})
// an post request
 **/

// using parameters to dynamically print the entered data
// adding colons makes the param an dynamic variable that we can enter on url
router.get('/:param',(req,res)=>{ // when added : it becomes an parameter
   const path = req.params.param
  res.json({
    data: path
  })
})

// using multiple request parameters

router.get('/:profile/:username',(req,res)=>{
  const profile = req.params.profile
  const username = req.params.username
  const currentProfile = profiles[username] // all the keys and their value are stored in this //
  if(currentProfile == null) {
    res.json({
      confirmation: 'fail',
      message:  'profile ' + username + ' not found'
    })
    return
  }
   res.render('profile',currentProfile) // rendering the template 'profile' and pass in the currentprofile to it
   // we replace raw json with rendering the template
  })
 
module.exports = router
