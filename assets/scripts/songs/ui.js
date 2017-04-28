'use strict'

const showSongsTemplate = require('../templates/songlist.handlebars')
const showBarListTemplate = require('../templates/barlist.handlebars')
const showYourListTemplate = require('../templates/yourlist.handlebars')
const dynamicSongEvents = require('./dynamic-song-events.js')

const searchSuccess = data => {
  console.log('searhcing songs is working and data is', data)
  const showSongsHtml = showSongsTemplate({ songs: data.songs })
  $('.view').append(showSongsHtml)
  $('.song').on('click', dynamicSongEvents.onChooseSong)
}

const searchFailure = error => {
  console.log('searhcing songs is NOT working and error is', error)
}

const barListSuccess = data => {
  console.log('bar list songs is working and data is', data)
  const showBarListHtml = showBarListTemplate({ user_songs: data.user_songs })
  $('.view').append(showBarListHtml)
}

const barListFailure = error => {
  console.log('bar list songs is NOT working and error is', error)
}

const yourListSuccess = data => {
  console.log('your list songs is working and data is', data)
  const showYourListHtml = showYourListTemplate({ user_songs: data.user_songs })
  $('.view').append(showYourListHtml)
}

const yourListFailure = error => {
  console.log('your list songs is NOT working and error is', error)
}

const leaveSuccess = data => {
  console.log('you left and so did your songs')
  // const showYourListHtml = showYourListTemplate({ user_songs: data.user_songs })
  // $('.view').append(showYourListHtml)
}

const leaveFailure = error => {
  console.log('you can never leave! and error is', error)
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
