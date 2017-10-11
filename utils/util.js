const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const AV = require('./av-weapp-min.js')
AV.init({
  appId: 'nWWN6Dpt603K5RWOWPp3Lbhh-gzGzoHsz',
  appKey: '4qKjHph1foiYeusWApsY5FxQ',
})
const login = () => {
  return AV.Promise.resolve(AV.User.current()).then(user =>
    user ? (user.isAuthenticated().then(authed => authed ? user : null)) : null
  ).then(user => user ? user : AV.User.loginWithWeapp());
}
module.exports = {
  login: login
}
