'use strict'

const searchSuccess = data => {
  console.log('searhcing songs is working and data is', data)
}

const searchFailure = error => {
  console.log('searhcing songs is NOT working and error is', error)
}

module.exports = {
  searchSuccess,
  searchFailure
}
