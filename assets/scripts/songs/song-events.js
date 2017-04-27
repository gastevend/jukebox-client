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

const onBarList = function () {
  event.preventDefault()
  api.barList()
    .then(ui.barListSuccess)
    .catch(ui.barListFailure)
}

const addHandlers = () => {
  $('#search').on('click', onSearch)
  $('#bar').on('click', onBarList)
  // $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
