'use strict'

const chooseSongSuccess = data => {
  console.log('you chose a song! data is ', data)
  // const showYourListHtml = showYourListTemplate({ user_songs: data.user_songs })
  // $('.view').append(showYourListHtml)
}

const chooseSongFailure = error => {
  console.log('choosing a song did not work and error is', error)
}

module.exports = {
  chooseSongSuccess,
  chooseSongFailure
}
