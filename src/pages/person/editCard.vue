<!-- 编辑名片 -->
<template>
  <div class='page app'>

    <div class="edit-top bgf m-x-1 m-b-1">
      <div class="edit-img p-t-2 p-b-1 center-a ">
        <img class="" src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
      </div>

      <i-panel>
        <i-input v-model="edit.name" title="名字" placeholder="修改名字" />

      </i-panel>
      <i-panel>
        <i-input v-model="edit.phone" type="number" title="电话号码" placeholder="修改电话号码" />
      </i-panel>
    </div>
    <div class="bgf m-x-1 m-b-1">
      <i-panel>
        <i-input v-model="edit.company" title="公司名字" placeholder="请输入公司名字" />

      </i-panel>
      <i-panel>
        <i-input v-model="edit.title" type="text" title="职位" placeholder="请输入职位" />

      </i-panel>
      <i-panel>
        <i-input v-model="edit.eamil" type="text" title="邮箱" placeholder="请输入邮箱" />

      </i-panel>
      <i-panel>
        <i-cell title="修改背景图">
          <i-avatar slot="footer" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="default" shape="square"></i-avatar>
        </i-cell>

      </i-panel>

    </div>
    <div class="bgf m-x-1 m-b-1">
      <i-panel title="简介">
        <div class="desc-wrapper clearfix">
          <textarea v-model="edit.desc" class="desc-textarea" placeholder="请输入个人简介(最多200字)" maxlength="200" />
          <div class="weui-textarea-counter fr p-r-2 m-b-1">{{fontNumTotal}}/200</div>
        </div>
      </i-panel>

    </div>
    <uploader @onSelect="onSelect" :file-list="files" title="文件上传" :max="max"></uploader>
    <div class="submit-btn">
      <i-button @click="handleClick" type="primary">提交保存</i-button>
    </div>
  </div>
</template>

<script>
  import api from '@/utils/api'
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
        files: [{
          path: 'https://i.loli.net/2017/08/21/599a521472424.jpg' // 本地文件路径

        }],
        max: 8,
        edit: {
          photo: '',
          name: '刘德华',
          phone: 13553699106,
          company: '印生活网络科技有限公司',
          title: '扫厕所',
          eamil: '529388989@qq.com',
          desc: '在印生活上班是我的荣幸',
          fontNum: 0
        }
      }
    },

    components: {
      uploader
    },

    computed: {
      fontNumTotal () {
        this.edit.fontNum = this.edit.desc.toString().length
        return this.edit.fontNum
      }
    },

    mounted () {},

    methods: {
      saveForm () {

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
      upImage () {

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

  .desc-wrapper {}

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
