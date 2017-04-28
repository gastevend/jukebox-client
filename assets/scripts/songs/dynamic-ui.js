'use strict'

const showEditSongTemplate = require('../templates/editSong.handlebars')

const chooseSongSuccess = data => {
  console.log('you chose a song! data is ', data)
}

const chooseSongFailure = error => {
  console.log('choosing a song did not work and error is', error)
}

const editSongSuccess = data => {
  console.log('you edited a song! data is ', data)
  const showEditSongHtml = showEditSongTemplate({ user_song: data.user_song })
  $('.one-song[data-id=' + data.user_song.id + ']').append(showEditSongHtml)
}

const editSongFailure = error => {
  console.log('editting a song did not work and error is', error)
}

module.exports = {
  chooseSongSuccess,
  chooseSongFailure,
  editSongSuccess,
  editSongFailure
}
