'use strict'

const showBarJumboTemplate = require('../templates/bar-jumbo.handlebars')
const showSearchJumboTemplate = require('../templates/search-jumbo.handlebars')
const showYourJumboTemplate = require('../templates/your-jumbo.handlebars')
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
  const showSearchJumbo = showSearchJumboTemplate()
  $('.jumbotron').empty()
  $('.jumbotron').append(showSearchJumbo)
}

const onBarList = function () {
  event.preventDefault()
  $('.view').empty()
  api.barList()
    .then(ui.barListSuccess)
    .catch(ui.barListFailure)
  $('.navi').removeClass('active')
  $(this).addClass('active')
  const showBarJumbo = showBarJumboTemplate()
  $('.jumbotron').empty()
  $('.jumbotron').append(showBarJumbo)
}

const onYourList = function () {
  event.preventDefault()
  $('.view').empty()
  api.yourList()
    .then(ui.yourListSuccess)
    .catch(ui.yourListFailure)
  $('.navi').removeClass('active')
  $(this).addClass('active')
  const showYourJumbo = showYourJumboTemplate()
  $('.jumbotron').empty()
  $('.jumbotron').append(showYourJumbo)
  $('[data-toggle="popover"]').popover()
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
