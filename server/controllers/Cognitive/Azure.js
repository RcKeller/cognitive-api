const autobind = require('auto-bind')

/*
BASE CLASS: Azure API
This serves as the base configuration for querying the API
*/
module.exports = class Azure {
  constructor() {
    this.base = 'https://access.redhat.com/labs/securitydataapi'
    autobind(this)
  }
}
