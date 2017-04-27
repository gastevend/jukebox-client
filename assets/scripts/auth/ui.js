'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran. data is ', data)
}

const signUpFailure = (error) => {
  console.error('signUpFailure ran. error is ', error)
}

const signInSuccess = data => {
  console.log('signInSuccess ran. data is ', data)
  store.user = data.user
}

const signInFailure = error => {
  console.error('signInFailure ran. error is ', error)
}

const signOutSuccess = data => {
  console.log('signOutSuccess is running and nothing is returned')
  store.user = null
}

const signOutFailure = error => {
  console.error('signOutFailure ran. error is ', error)
}

const changePasswordSuccess = data => {
  console.log('changePassword is running')
}

const changePasswordFailure = error => {
  console.error('changePasswordFailure ran. error is ', error)
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
