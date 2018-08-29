<!--  -->
<template>
  <div class='page app'>
      <div class="rankFixd">
          <div class="ranking-header clearfix p-a-2 center-y">
          <span class="ranking-text fl">排行榜</span>
         <div class="">
            <img src="/static/assets/ranking/medal.png" alt="" class="ranking-img fr">
         </div>
      </div>
      <div class="">

      </div>
      <i-tabs :current="tabCurrent" @change="tabHandle">
            <i-tab key="hot" title="人气"></i-tab>
            <i-tab key="like" title="点赞"></i-tab>
            <i-tab key="collection" title="收藏"></i-tab>
    </i-tabs>
      </div>
      
    <div class="tabCont">
        <i-panel v-for="(items,index) in 5" :key="index">
            <div class="p-x-2 p-y-1 clearfix center-y">
                <div class="tab-l fl text-center font-color-sub center-a">
                    <image v-if="index === 0" src="/static/assets/ranking/no1.png" />
                    <image v-if="index === 1" src="/static/assets/ranking/no2.png" />
                    <image v-if="index === 2" src="/static/assets/ranking/no3.png"  />
                  <span v-if="index > 2"> {{index + 1}}</span>
                </div>
                <div class="tab-avatar fl center-x">
                    <i-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"></i-avatar>
                </div>
                <div class="tab-r fl p-l-1">
                    <div class="tab-desc-t flex">
                        <span class="tab-desc-name text-oh font">刘德华</span>
                        <span class="tab-desc-post text-oh p-l-1 text-right font-sub">打扫厕所</span>
                    </div>
                    <div class="tab-desc-b text-oh font-sub">
                        打扫厕所
                    </div>
                </div>
            </div>
        </i-panel>
    </div>
  </div>
</template>

<script>
import api from '@/utils/api'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      tabCurrent: 'hot',
      type: 1,
      rowIndex: 1,
      rankingList: []
    }
  },

  components: {},

  computed: {},

  mounted () {
    // this.getData()
  },
  // 下拉刷新
  onPullDownRefresh () {
    this.resize()
  },
  // 上拉加载
  onReachBottom () {
    this.loadMore()
  },

  methods: {async getData () {
    wx.showLoading({title: '加载中'})
    const _this = this
    const par = {
      type: this.type,
      $rowIndex: this.rowIndex
    }
    const data = await api.get_rankingList(par)
    wx.hideLoading()
    wx.stopPullDownRefresh()
    try {
      data.map((item) => {
        let cardInfo = item.map
        _this.rankingList.push(cardInfo)
      })
    } catch (error) {

    }
  },
  resizeType (type) {
    const _this = this
    if (type == _this.type) return
    _this.type = type
    _this.rowIndex = 1
    _this.rankingList = []
    _this.getData()
  },
  loadMore () {
    this.rowIndex++
    this.getData()
  },
  resize () {
    this.rowIndex = 1
    this.rankingList = []
    this.getData()
  },
  goOtherCard (item) {
    this.$router.open({
      name: '查看名片',
      url: '../othercard/othercard',
      type: 'PUSH',
      params: {
        params: item
      }
    })
  },
  tabHandle (e) {
    this.tabCurrent = e.mp.detail.key
  }
  }
}
</script>
<style lang='less' scoped>
.app{
    padding-top: 162px;
}
.rankFixd{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
}
.ranking-header{
    background: #2d8cf0;
    background: linear-gradient(to right, #1488cc, #2d8cf0); 
    color: #fff;
    width: 100%;
    height: 120px;

    .ranking-text{
        font-size: 20px;
        font-weight: bold;
        width: calc(100% - 100px)
    }
    .ranking-img{
        width: 100px;
        height: 100px;
    }   
}
.tab-l{
    width: 35px;
    image{
        width: 20px;
        height: 20px;
    }
}
.tab-avatar{
    width: 50px;
}
.tab-r{
    width: calc(100% - 85px);
}
.tab-desc-name,.tab-desc-post{
    width: 50%;

}
.tab-desc-t{
    margin-bottom: 4px;
}

</style>