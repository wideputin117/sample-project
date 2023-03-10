// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require('express')

const app = express() // initialize app

//  create an middleware function that will take place before the route every route will have this middleware ??? //
// to decide which route should have this middleware place them after the routes in which u dont want them 
// but before those routes in which u want them ie place them after or before app.use
app.use((req, res, next) => {
  const timestamp = new Date().toDateString()
  req.timestamp = timestamp
  next()
})
/*  Apps are configured with settings as shown in the conig object below.
    Options include setting views directory, static assets directory,
    and database settings. Default config settings can be seen here:
    https://docs.turbo360.co */

const config = {
  views: 'views', // Set views directory
  static: 'public', // Set static assets directory
  logging: true,

  /*  To use the Turbo 360 CMS, from the terminal run
      $ turbo extend cms
      then uncomment line 21 below: */

  // db: vertex.nedb()
}

vertex.configureApp(app, config)

// import routes
const index = require('./routes/index')
// importing register route
const register = require('./routes/register')
  // sample API Routes

// set routes
app.use('/', index)
app.use('/register', register) // connecting the register path to register route
  // sample API Routes

module.exports = app
