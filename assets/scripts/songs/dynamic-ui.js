'use strict'

const chooseSongSuccess = data => {
  console.log('you chose a song! data is ', data)
  // const showYourListHtml = showYourListTemplate({ user_songs: data.user_songs })
  // $('.view').append(showYourListHtml)
}

const chooseSongFailure = error => {
  console.log('choosing a song did not work and error is', error)
}

const editSongSuccess = data => {
  console.log('you edited a song! data is ', data)
  // const showYourListHtml = showYourListTemplate({ user_songs: data.user_songs })
  // $('.view').append(showYourListHtml)
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
