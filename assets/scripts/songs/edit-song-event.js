'use strict'

const api = require('./api')
const editUi = require('./edit-ui')
const store = require('../store')

const onEdit = function () {
  const rowToEdit = $(this).closest('.one-song').attr('data-id')
  console.log(rowToEdit)
  $(this).closest('.one-song').empty()
  console.log($(this).attr('data-id'))
  const songId = $(this).attr('data-id')
  const userId = store.user.id
  const data = {
    'user_song': {
      'song_id': songId,
      'user_id': userId
    }
  }
  console.log(data)
  api.editSong(data, rowToEdit)
    .then(editUi.editClickSongSuccess)
    .catch(editUi.editClickSongFailure)
}

module.exports = {
  onEdit
}
