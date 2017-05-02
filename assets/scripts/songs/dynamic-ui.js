'use strict'

const searchEditTemplate = require('../templates/searchEdit.handlebars')
const editSongEvent = require('./edit-song-event.js')

const chooseSongSuccess = data => {
  console.log('you chose a song! data is ', data)
  $('.add-animation').fadeIn('slow')
  $('.add-animation').fadeOut('slow')
}

const chooseSongFailure = error => {
  console.log('choosing a song did not work and error is', error)
}

const searchEditSuccess = (rowToEdit, data) => {
  console.log('looking for a new song is working and data is', data)
  const searchEditHtml = searchEditTemplate({ songs: data.songs })
  $('.one-song[data-id=' + rowToEdit + ']').append(searchEditHtml)
  $('.edit-song').on('click', editSongEvent.onEdit)
}

const searchEditFailure = error => {
  console.log('looking for a new song is NOT working and error is', error)
}

module.exports = {
  chooseSongSuccess,
  chooseSongFailure,
  searchEditSuccess,
  searchEditFailure
}
