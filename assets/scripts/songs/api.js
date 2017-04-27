'use strict'

const config = require('../config')
// const store = require('../store')

const search = () => {
  return $.ajax({
    url: config.apiOrigin + '/songs',
    method: 'GET'
  })
}

const barList = () => {
  return $.ajax({
    url: config.apiOrigin + '/user_songs',
    method: 'GET'
  })
}

module.exports = {
  search,
  barList
}
