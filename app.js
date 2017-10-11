//app.js
const util = require('./utils/util')
App({
  onLaunch() {
    util.login().then((user) => { console.log(user.toJSON()) }).catch(err => { console.log(err) })
  }
})