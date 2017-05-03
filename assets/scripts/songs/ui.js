'use strict'

const showSongsTemplate = require('../templates/songlist.handlebars')
const showBarListTemplate = require('../templates/barlist.handlebars')
const showYourListTemplate = require('../templates/yourlist.handlebars')
const dynamicSongEvents = require('./dynamic-song-events.js')

const searchSuccess = data => {
  const showSongsHtml = showSongsTemplate({ songs: data.songs })
  $('.view').append(showSongsHtml)
  $('.song').on('click', dynamicSongEvents.onChooseSong)
}

const searchFailure = error => {
  console.error('error is ', error)
}

const barListSuccess = data => {
  const showBarListHtml = showBarListTemplate({ user_songs: data.user_songs })
  $('.view').append(showBarListHtml)
}

const barListFailure = error => {
  console.error('bar list songs is NOT working and error is', error)
}

const yourListSuccess = data => {
  const showYourListHtml = showYourListTemplate({ user_songs: data.user_songs })
  $('.view').append(showYourListHtml)
  $('.edit').on('click', dynamicSongEvents.onUserChoiceEdit)
}

const yourListFailure = error => {
  console.error('your list songs is NOT working and error is', error)
}

const leaveSuccess = data => {
  // const showYourListHtml = showYourListTemplate({ user_songs: data.user_songs })
  // $('.view').append(showYourListHtml)
}

const leaveFailure = error => {
  console.error('you can never leave! and error is', error)
}

module.exports = {
  searchSuccess,
  searchFailure,
  barListSuccess,
  barListFailure,
  yourListSuccess,
  yourListFailure,
  leaveSuccess,
  leaveFailure
}
