const axios = require('axios')

const Azure = require('./Azure')
module.exports = class Vision extends Azure {
  constructor (router) {
    super(router)
    // router.get('/cve', this.getCVEs)
  }
}
