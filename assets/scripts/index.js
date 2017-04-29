'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const viewHandler = require('./views.js')

viewHandler.showHide()
// $('#sign-out').hide()
// $('#change-password').hide()

const authEvents = require('./auth/auth-events.js')
const songEvents = require('./songs/song-events.js')

$(() => {
  authEvents.addHandlers()
  songEvents.addHandlers()
})
