<!-- 编辑名片 -->
<template>
  <div class='page app'>

    <div class="edit-top bgf m-x-1 m-b-1">
      <div class="edit-img p-t-2 p-b-1 center-a ">
        <img class="" :src="userInfo.strAvatarUrl" alt="" @click="modifiyHead">
      </div>

      <i-panel>
        <i-input v-model="userInfo.strName" title="名字" placeholder="修改名字" />

      </i-panel>
      <i-panel>
        <i-input v-model="userInfo.strMobile" type="number" title="电话号码" placeholder="修改电话号码" />
      </i-panel>
    </div>
    <div class="bgf m-x-1 m-b-1">
      <i-panel>
        <i-input v-model="userInfo.strCompany" title="公司名字" placeholder="请输入公司名字" />

      </i-panel>
      <i-panel>
        <i-input v-model="userInfo.strPosition" type="text" title="职位" placeholder="请输入职位" />

      </i-panel>
      <i-panel>
        <i-input v-model="userInfo.strEmail" type="text" title="邮箱" placeholder="请输入邮箱" />

      </i-panel>
      <i-panel >
        <i-cell title="修改背景图" @click="modifiyBackground">
          <i-avatar slot="footer" :src="userInfo.strBackground" size="default" shape="square" @click="modifiyBackground"  ></i-avatar>
        </i-cell>

      </i-panel>

    </div>
    <div class="bgf m-x-1 m-b-1">
      <i-panel title="简介">
        <div class="desc-wrapper clearfix">
          <textarea v-model="userInfo.strIntro" class="desc-textarea" placeholder="请输入个人简介(最多200字)" maxlength="200" />
          <div class="weui-textarea-counter fr p-r-2 m-b-1">{{fontNumTotal}}/200</div>
        
        </div>
      </i-panel>

    </div>
    <uploader @onSelect="onSelect" @longtap ='longtap' :file-list="files" title="文件上传" :max="max"></uploader>
    <div class="submit-btn">
      <i-button @click="saveForm" type="primary">提交保存</i-button>
    </div>
  </div>
</template>

<script>
  import api from '@/utils/api'
  import store from '@/store/store'
  import uploader from '@/components/uploader'
  import {
    validatPhone,
    validatEmail
  } from '@/utils/validate'
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    data () {
      return {
        files: [],
        max: 8,
        fontNum: 0,
        userInfo: {},
        off: {
          background: false,
          avatar: false
        }
      }
    },

    components: {
      uploader
    },
    computed: {
      fontNumTotal () {
        if (this.userInfo.strIntro) {
          this.fontNum = this.userInfo.strIntro.toString().length
  
          return this.fontNum
        }
      }
    },

    mounted () {
      this.getUserInfo()
      console.log(this.userInfo)
    },

    methods: {
  
      async getUserInfo () {
        var _this = this
        var par = {
          '@strOpenId': store.state.openId
        }
        try {
          var data = await api.Get_UserInfo(par)
          console.log(data)
          _this.userInfo = data
          this.strIntro = data.strIntro
          _this.files = []
          data.images.map(item => {
            item.path = item.imgUrl
            _this.files.push(item)
          })
          console.log(_this.files)
        } catch (error) {}
      },

      saveForm () {
        var _this = this
        if (this.off.avatar) {
          _this.upDateHead(_this.userInfo.strAvatarUrl, 1)
        }
        if (this.off.background) {
          _this.upDateHead(_this.userInfo.strBackground, 1)
        }
      },
      onSelect () {
        this.$wxapi.chooseImage({
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          count: this.max

        }).then(res => {
          console.log(res.tempFiles)
          this.files = this.files.concat(res.tempFiles)
        }).catch(err => {
          console.log(err)
        })
      },
      upDateHead (localImage, type) {
        const _this = this
        var par = {
          strOpenId: this.userInfo.strOpenId,
          intType: type
        }
  
        api.wxUploadFile({
          filePath: localImage,
          formData: par
        })
          .then(res => {
            if (type == 1) {
              _this.userInfo.strAvatarUrl = res.imgUrl
            } else {
              _this.userInfo.strBackground = res.imgUrl
            }
          })
      },
      modifiyHead () {
        var _this = this
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            _this.userInfo.strAvatarUrl = res.tempFilePaths[0]
            _this.off.avatar = true
          // _this.upDateHead(res.tempFilePaths[0], 1);
          },
          fail: function () {},
          complete: function () {}
        })
      },
      modifiyBackground () {
        var _this = this
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            _this.userInfo.strBackground = res.tempFilePaths[0]
            _this.off.background = true
            // _this.upDateHead(res.tempFilePaths[0], 3)
          },
          fail: function () {},
          complete: function () {}
        })
      }
    }
  }
</script>
<style lang='less' scoped>
  .edit-img {
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    } // border-bottom: 1px solid #dddee1;
  }


  .desc-textarea {
    padding: 7px 15px;
    font-size: 13px;
    height: 88px;
    line-height: 20px;
    width: 100%;
    box-sizing: border-box;
  }

  .edit-bg {
    width: 45px;
    height: 45px;
  }

</style>
