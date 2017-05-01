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
  $('.navi').removeClass('active')
  $(this).addClass('active')
}

const onBarList = function () {
  event.preventDefault()
  $('.view').empty()
  api.barList()
    .then(ui.barListSuccess)
    .catch(ui.barListFailure)
  $('.navi').removeClass('active')
  $(this).addClass('active')
}

const onYourList = function () {
  event.preventDefault()
  $('.view').empty()
  api.yourList()
    .then(ui.yourListSuccess)
    .catch(ui.yourListFailure)
  $('.navi').removeClass('active')
  $(this).addClass('active')
}

const onLeave = function () {
  event.preventDefault()
  $('.view').empty()
  api.leave()
    .then(ui.leaveSuccess)
    .catch(ui.leaveFailure)
}

const addHandlers = () => {
  $('#search').on('click', onSearch)
  $('#bar').on('click', onBarList)
  $('#you').on('click', onYourList)
  $('#leave').on('click', onLeave)
}

module.exports = {
  addHandlers
}
