'use strict'

const store = require('../store')
const showSearchJumboTemplate = require('../templates/search-jumbo.handlebars')

const signUpSuccess = (data) => {
  $('.sign-up-container').hide()
  $('#susuccess').show()
  $('.sound-board').show()
  $('#suerror').hide()
  $('#sierror').hide()
}

const signUpFailure = (error) => {
  console.error('signUpFailure ran. error is ', error)
  $('#suerror').show()
}

const signInSuccess = data => {
  store.user = data.user
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#susuccess').hide()
  $('#suerror').hide()
  $('.sound-board').hide()
  $('#sulink').hide()
  $('.footer').show()
  $('#sierror').hide()
  $('#cpdropdown').show()
  $('.sign-up-container').hide()
  $('#leave').show()
  $('.jumbotron').show()
  const showSearchJumbo = showSearchJumboTemplate()
  $('.jumbotron').append(showSearchJumbo)
}

const signInFailure = error => {
  console.error('signInFailure ran. error is ', error)
  $('#sierror').show()
  $('#suerror').hide()
}

const signOutSuccess = data => {
  store.user = null
  $('#sign-out').hide()
  $('#sign-in').show()
  $('.footer').hide()
  $('.sound-board').show()
  $('#cpdropdown').hide()
  $('#sulink').show()
  $('.view').empty()
  $('#leave').hide()
  $('.jumbotron').empty()
  $('.jumbotron').hide()
  $('.navi').removeClass('active')
}

const signOutFailure = error => {
  console.error('signOutFailure ran. error is ', error)
  $('#sierror').hide()
}

const changePasswordSuccess = data => {
  $('#cpsuccess').show()
  $('#cperror').hide()
}

const changePasswordFailure = error => {
  console.error('changePasswordFailure ran. error is ', error)
  $('#cperror').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
