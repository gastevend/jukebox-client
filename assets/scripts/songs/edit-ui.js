'use strict'

const showEditSongTemplate = require('../templates/editSong.handlebars')

const editClickSongSuccess = data => {
  console.log('you edited a song! data is ', data)
  const showEditSongHtml = showEditSongTemplate({ user_song: data.user_song })
  $('.one-song[data-id=' + data.user_song.id + ']').append(showEditSongHtml)
}

const editClickSongFailure = error => {
  console.log('editting a song did not work and error is', error)
}

module.exports = {
  editClickSongSuccess,
  editClickSongFailure
}
