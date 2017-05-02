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

const onUserChoiceEdit = function () {
  const rowToEdit = $(this).attr('data-id')
  if ($('.edit-song-pane').is(':visible')) {
    $(this).popover()
  } else {
    api.search()
      .then(dynamicUi.searchEditSuccess.bind(null, rowToEdit))
      .catch(dynamicUi.searchEditFailure)
  }
}

module.exports = {
  onChooseSong,
  onUserChoiceEdit
}
