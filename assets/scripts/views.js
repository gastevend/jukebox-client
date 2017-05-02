'use strict'

const showHide = function () {
  $('#sign-out').hide()
  $('#cpdropdown').hide()
  $('.sign-up-container').hide()
  $('#leave').hide()
  $('.headerz').hide()
  $('.footer').hide()
  $('#susuccess').hide()
  $('#suerror').hide()
  $('#sierror').hide()
  $('#cpsuccess').hide()
  $('#cperror').hide()
  $('.jumbotron').hide()
  $('.add-animation').hide()
}

const onShowSignUp = function () {
  $('.sound-board').hide()
  $('.sign-up-container').show()
}

const addHandlers = () => {
  $('#sulink').on('click', onShowSignUp)
}

module.exports = {
  showHide,
  addHandlers
}
