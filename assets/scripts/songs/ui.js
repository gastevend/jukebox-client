'use strict'

const showSongsTemplate = require('../templates/songlist.handlebars')

const searchSuccess = data => {
  console.log('searhcing songs is working and data is', data)
  const showSongsHtml = showSongsTemplate({ songs: data.songs })
  $('.view').append(showSongsHtml)
}

const searchFailure = error => {
  console.log('searhcing songs is NOT working and error is', error)
}

module.exports = {
  searchSuccess,
  searchFailure
}
