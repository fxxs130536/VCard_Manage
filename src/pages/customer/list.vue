<!--  -->
<template>
  <div class="page">
    <view style="">
        <i-button i-class="customer-title" type="ghost" @click="handleClick" long="true">{{selctTitle !== '' ?selctTitle :selctActive[0]}}<i-icon class="tran" type="play_fill" /></i-button>
    </view>

    <i-panel title="标题">
        <view class="text-center" style="padding: 15px;">总{{customerTotal}}名客户</view>
    </i-panel>
    <customerList :list="page"></customerList>
  </div>

</template>

<script>
  import wx from 'wx'
  import {
    mapState,
    mapActions
  } from 'vuex'
import customerList from '@/components/customer-list'
  export default {
    data () {
      return {
        visible1: true,
        page: 10,
        selctActive: ['最后活动', '火爆活动'],
        selctTitle: '',
        customerTotal: 1000
      }
    },
    onReachBottom () {
      // 显示加载图标
      wx.showLoading({
        title: '玩命加载中'
      })
      // 页数+1
      this.page = this.page + 6
  
      // // 隐藏加载框
      wx.hideLoading()
    },
    components: {
      customerList
    },

    computed: {},

    mounted () {
    },

    methods: {
      handleClick () {
        this.$wxapi.showActionSheet({
          itemList: this.selctActive,
          itemColor: '#495060'
  
        }).then(res => {
          const index = res.tapIndex
          console.log(res)
          this.selctTitle = this.selctActive[index]
          switch (index) {
            case 0:
              console.log(index)
              break
            default:
              break
          }
        }).catch(res => {
          console.log(res.errMsg)
        })
      }
    }
  }
</script>
<style lang='less' scoped>
.customer-title{
    background: #ffffff 
}
.tran{
    display: inline-block;
    transform:rotate(90deg);
}
.text-center{
    text-align: center;
    background: #e9eaec;
    color: #495060;
    font-size: 12px;
}

</style>
