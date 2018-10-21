// Core process exception handling
require('./exceptions/process')
const express = require('express')
const config = require('../config')
const { Express, API, HTTP } = require('./setup')

// Initialize express instance and configure parsers / sessionware
const server = express()
Express(server, config)
// Initialize routes - API, client pages, etc
API(server, config)
// Serve content via HTTP or HTTPS
HTTP(server, config)
