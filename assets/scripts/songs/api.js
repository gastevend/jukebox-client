'use strict'

const config = require('../config')
const store = require('../store')

const search = () => {
  return $.ajax({
    url: config.apiOrigin + '/songs',
    method: 'GET'
  })
}

const barList = () => {
  return $.ajax({
    url: config.apiOrigin + '/user_songs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const yourList = () => {
  return $.ajax({
    url: config.apiOrigin + '/your-songs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const chooseSong = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/user_songs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const leave = () => {
  return $.ajax({
    url: config.apiOrigin + '/remove-songs',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editSong = (data, rowToEdit) => {
  return $.ajax({
    url: config.apiOrigin + '/user_songs/' + rowToEdit,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  search,
  barList,
  yourList,
  chooseSong,
  leave,
  editSong
}
