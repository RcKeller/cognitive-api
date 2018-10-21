const autobind = require('auto-bind')
const { azure } = require('../../../config')

/*
BASE CLASS: Azure API
This serves as the base configuration for querying the API
*/
module.exports = class Azure {
  constructor() {
    autobind(this)
    this.azure = azure
  }
}
