'use strict'

const api = require('./api')
const editUi = require('./edit-ui')
const store = require('../store')

const onEdit = function () {
  const rowToEdit = $(this).closest('.one-song').attr('data-id')
  $(this).closest('.one-song').empty()
  const songId = $(this).attr('data-id')
  const userId = store.user.id
  const data = {
    'user_song': {
      'song_id': songId,
      'user_id': userId
    }
  }
  api.editSong(data, rowToEdit)
    .then(editUi.editClickSongSuccess)
    .catch(editUi.editClickSongFailure)
}

module.exports = {
  onEdit
}
