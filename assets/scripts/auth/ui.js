'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran. data is ', data)
  $('.sign-up-container').hide()
  $('#susuccess').show()
  $('.sound-board').show()
  $('#suerror').hide()
}

const signUpFailure = (error) => {
  console.error('signUpFailure ran. error is ', error)
  $('#suerror').show()
}

const signInSuccess = data => {
  console.log('signInSuccess ran. data is ', data)
  store.user = data.user
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#susuccess').hide()
  $('.sound-board').hide()
  $('#sulink').hide()
  $('.footer').show()
  $('.headerz').show()
  $('#sierror').hide()
  $('#cpdropdown').show()
}

const signInFailure = error => {
  console.error('signInFailure ran. error is ', error)
  $('#sierror').show()
}

const signOutSuccess = data => {
  console.log('signOutSuccess is running and nothing is returned')
  store.user = null
  $('#sign-out').hide()
  $('#sign-in').show()
  $('.footer').hide()
  $('.headerz').hide()
  $('.sound-board').show()
  $('#cpdropdown').hide()
  $('#sulink').show()
  $('.view').empty()
}

const signOutFailure = error => {
  console.error('signOutFailure ran. error is ', error)
}

const changePasswordSuccess = data => {
  console.log('changePassword is running')
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
