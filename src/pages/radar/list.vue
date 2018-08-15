<template lang="pug">
    .page 
        i-row
            i-tabs(:current="current" @change="handleChange")
                i-tab(key="tab1" title="时间")
                i-tab(key="tab2" title="行为")
                i-tab(key="tab3" title="人")
        .page-list(v-if="current == 'tab1'")
            i-row(i-class="tab1-content" v-for="(item , index) of radarList" :key="index")
                i-col(span="4" i-class="col-class")
                    i-avatar(i-class="radar-img" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="default" shape="square")
                i-col(span="16" i-class="col-class")
                    .radar-text
                        text.radar-title 基础容器，用来显示文字
                i-col(span="4" i-class="col-class")
                    i-icon.radar-icon(type="enter" size="28" color="#80848f")
        .action-list(v-if="current == 'tab2'")
            i-cell-group(i-class="action-top")
                i-cell(title="仅七天被查看的行为统计" i-class="top-cell")
                    i-icon.radar-icon(type="createtask" size="28" color="#2d8cf0" slot="footer")
        .center
            Card(title="已付款总金额" text='homeData' image="http://yj.kiy.cn/Content/Images/App/assets/icon/充值流量.png")
            Card(title="已付款总金额" text='homeData' image="http://yj.kiy.cn/Content/Images/App/assets/icon/充值流量.png")

</template>

<script>
import wx from "wx";
import { mapState, mapActions } from "vuex";
import Card from '@/components/card-item';

export default {
  data () {
      return {
          current: 'tab2',
          radarList: new Array(33)
      }
  },
  components: {
      Card
  },
  computed: {
    ...mapState(["topics"])
  },
  mounted() {
    this.refresh();
  },
  onPullDownRefresh() {
    this.refresh();
  },
  onReachBottom() {
    this.loadmore();
  },
  methods: {
    ...mapActions(["getTopics"]),
    async refresh() {
      await this.getTopics(true);
      wx.stopPullDownRefresh();
    },
    loadmore() {
      this.radarList.push(undefined)
    },
    handleChange({target}) {
        this.current = target.key
    }
  }
};
</script>

<style lang="less">
    .page {
        background-color: rgb(241, 240, 245);
        padding-bottom: 10px;
    }
    .page-list {
    }
    .tab1-content{
        width: 340px;
        height: 60px;
        margin: 5px auto;
        background-color: #fff;
        overflow: hidden;
        border: 1px solid #e9eaec;
        border-radius: 4px;
    }
    .col-class {
        overflow: hidden;
        text-align: center;
        justify-content: center;
    }
    .radar-img {
        width: 50px;
        height: 50px;
        margin-top: 15px;
    }
    .radar-text {
        flex: 1;
        height: 50px;
        padding:5px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .radar-title {
        font-size: 15px;
        vertical-align: middle;
    }
    .radar-icon {
        height: 60px;
        line-height: 60px;
        margin-left: 15px;
    }
    .action-top {
        height: 25px;
        margin-top: 4px;
    }
    .top-cell {
        height: 10px;
        overflow: hidden;
    }
    .center {
        width: 750rpx;
        height: 500rpx;
        background-color: #fff;
        padding-top: 25rpx;
        padding-bottom: 45rpx;
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
    }
    .center-left {
        margin-left: 15rpx;
        margin-right: 10rpx;
        margin-top: 10rpx;
        background: rgb(251,228,228);
    }
    .center-right {
        margin-right: 15rpx;
        margin-left: 10rpx;
        margin-top: 10rpx;
        background: rgb(251,228,228);
    }
    .center-title {
        color: #888888;
        font-size: 36rpx;
        font-weight: 700;
        margin-top: 20rpx;
        text-align: center;
    }
</style>
