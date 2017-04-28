'use strict'

const api = require('./api')
const dynamicUi = require('./dynamic-ui')
const store = require('../store')

const onChooseSong = function () {
  const songId = $(this).attr('data-id')
  const userId = store.user.id
  const data = {
    'user_song': {
      'song_id': songId,
      'user_id': userId
    }
  }
  api.chooseSong(data)
    .then(dynamicUi.chooseSongSuccess)
    .catch(dynamicUi.chooseSongFailure)
}

const onEdit = function () {
  const rowToEdit = $(this).attr('data-id')
  console.log(rowToEdit)
  const songId = '1' // this is wrong
  const userId = store.user.id
  const data = {
    'user_song': {
      'song_id': songId,
      'user_id': userId
    }
  }
  api.editSong(data, rowToEdit)
    .then(dynamicUi.editSongSuccess)
    .catch(dynamicUi.editSongFailure)
}

module.exports = {
  onChooseSong,
  onEdit
}
