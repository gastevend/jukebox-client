'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSearch = function () {
  event.preventDefault()
  api.search()
    .then(ui.searchSuccess)
    .catch(ui.searchFailure)
}

const addHandlers = () => {
  $('#search').on('click', onSearch)
  // $('#sign-in').on('submit', onSignIn)
  // $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
