<!--  -->
<template>
  <div class="page">
      <mesgList :list="page"></mesgList>
  </div>
</template>

<script>
import api from '@/utils/api'
import { mapGetters, mapActions } from 'vuex'
import mesgList from '@/components/mesg-list'
export default {
  data () {
    return {
      page: 10
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
  components: {mesgList},

  computed: {},

  mounted () {},

  methods: {}
}
</script>
<style lang='less' scoped>

</style>