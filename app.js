//app.js
const AV = require('./utils/av-weapp-min.js')
AV.init({
  appId: 'nWWN6Dpt603K5RWOWPp3Lbhh-gzGzoHsz',
  appKey: '4qKjHph1foiYeusWApsY5FxQ',
});
App({
  onLaunch() {
    console.log('123')
    this.login().then((user) => { console.log(user.toJSON()) }).catch(err => { console.log(err) })
  },
  login: function () {
    return AV.Promise.resolve(AV.User.current()).then(user => user ? (user.isAuthenticated().then(authed => authed ? user : null)) : null).then(user => user ? user : AV.User.loginWithWeapp());
  }
})