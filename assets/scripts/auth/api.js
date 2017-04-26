'use strict'

const config = require('../config')
// const store = require('../store')

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

module.exports = {
  signUp
  // signIn,
  // signOut,
  // changePassword
}
