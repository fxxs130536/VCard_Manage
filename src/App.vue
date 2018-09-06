
<script>
import api from '@/utils/api'
import store from '@/store/store'
export default {
  onLoad () {},
  created () {
    store.commit('inUserInfo')
    this.wxLogin()
  },
  methods: {
    async wxLogin () {
      var wxCode = await api.wxLogin()

      var openId = await api.wxOpenId(wxCode.code)
      var openIdCode = openId.openid
      var par = {
        'strOpenId': openIdCode
      }
      store.commit('inSendBtn', openId.isSend)
      try {
        var userInfo = await api.wxGetUserInfo()
        // 如果不是老用户，添加姓名和头像
        if (!openId.isOld) {
          par = Object.assign(par, {
            strName: userInfo.userInfo.nickName
          })
          par = Object.assign(par, {
            strAvatarUrl: userInfo.userInfo.avatarUrl
          })
          par = Object.assign(par, {
            strBackground: userInfo.userInfo.avatarUrl
          })
        }
        this.loginFn(par)
      } catch (ex) {
        this.loginFn(par)
      }
    },
    async loginFn (par) {
      var data = await api.post_login(par)

      store.commit('inUserInfo', data)
      store.commit('inOpenId', par.strOpenId)
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
}
</style>
