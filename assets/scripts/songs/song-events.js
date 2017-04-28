'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSearch = function () {
  event.preventDefault()
  $('.view').empty()
  api.search()
    .then(ui.searchSuccess)
    .catch(ui.searchFailure)
}

const onBarList = function () {
  event.preventDefault()
  $('.view').empty()
  api.barList()
    .then(ui.barListSuccess)
    .catch(ui.barListFailure)
}

const onYourList = function () {
  event.preventDefault()
  $('.view').empty()
  api.yourList()
    .then(ui.yourListSuccess)
    .catch(ui.yourListFailure)
}

const addHandlers = () => {
  $('#search').on('click', onSearch)
  $('#bar').on('click', onBarList)
  $('#you').on('click', onYourList)
}

module.exports = {
  addHandlers
}
