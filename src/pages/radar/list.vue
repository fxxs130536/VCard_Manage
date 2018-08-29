<template>
    <div class="page">
        <i-row>
            <i-tabs :current="current" @change="handleChange">
                <i-tab key="tab1" title="时间"></i-tab>
                <i-tab key="tab2" title="行为"></i-tab>
                <i-tab key="tab3" title="人"></i-tab>
            </i-tabs>
        </i-row>
        <div v-if="current=='tab1'">
            <i-row i-class="tab1-content" v-for="(item , index) of radarList" :key="index">
                <i-col span="4" i-class="col-class">
                    <i-avatar i-class="radar-img" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="default" shape="square">

                    </i-avatar>
                </i-col>
                <i-col span="16" i-class="col-class">
                    <div class="radar-text">
                        <p class="radar-title">用户查看了你的名片</p>
                    </div>
                </i-col>
                <i-col span="4" i-class="col-class">
                    <i-icon class="radar-icon" type="enter" size="28" color="#80848f"></i-icon>
                </i-col>
            </i-row>
        </div>
        <div class="action-list" v-if="current == 'tab2'">
            <i-cell-group i-class="action-top">
                <i-cell title="仅七天被查看的行为统计" i-class="top-cell">
                    <i-icon class="radar-icon" type="createtask" size="28" color="#2d8cf0" slot="footer"></i-icon>
                </i-cell>
            </i-cell-group>
            <div class="center">
                <Card title="名片转发" text='1次' image="http://yj.kiy.cn/Content/Images/App/assets/icon/充值流量.png"></Card>
                <Card title="名片点赞" text='1次' image="http://yj.kiy.cn/Content/Images/App/assets/icon/字体样式.png"></Card>
                <Card title="转发名片" text='2次' image="http://yj.kiy.cn/Content/Images/App/assets/icon/文件.png"></Card>
                <Card title="呼叫座机" text='3次' image="http://yj.kiy.cn/Content/Images/App/assets/icon/统计.png"></Card>
            </div>
            <div class="bottom">
                <i-cell-group>
                    <i-cell i-class="bottom-list" title="呼叫手机" value="1次">
                        <i-icon type="like_fill" slot="icon" color="#FFC125"></i-icon>
                    </i-cell>
                    <i-cell i-class="bottom-list" title="复制邮箱" value="1次">
                        <i-icon type="share_fill" slot="icon" color="#EE30A7"></i-icon>
                    </i-cell>
                    <i-cell i-class="bottom-list" title="复制微信" value="1次">
                        <i-icon type="mobilephone" slot="icon" color="#B23AEE"></i-icon>
                    </i-cell>
                    <i-cell i-class="bottom-list" title="保持信息" value="1次">
                        <i-icon type="send" slot="icon" color="#7FFF00"></i-icon>
                    </i-cell>
                    <i-cell i-class="bottom-list" title="查看朋友圈" value="1次">
                        <i-icon type="shop_fill" slot="icon" color="#C5C1AA"></i-icon>
                    </i-cell>
                    <i-cell i-class="bottom-list" title="查看商品" value="1次">
                        <i-icon type="shop_fill" slot="icon" color="#EEEE00"></i-icon>
                    </i-cell>
                </i-cell-group>
            </div>
        </div>
        <div class="action-detail" v-if=" current== 'tab3' ">
            <i-cell-group i-class="action-top">
                <i-cell title="仅七天被查看的行为统计" i-class="top-cell">
                    <i-icon class="radar-icon" type="createtask" size="28" color="#2d8cf0" slot="footer"></i-icon>
                </i-cell>
            </i-cell-group>
            <div class="action-detail-center">
                <div v-for="(item , index) in manDetailList" :key="index">
                    <manDetail :list="item"></manDetail>
                </div>
                
            </div>
            
        </div>
    </div>   

</template>

<script>
import wx from "wx";
import { mapState, mapActions } from "vuex";
import Card from '@/components/card-item';
import manDetail from '@/components/man-detail.vue'

export default {
  data () {
      return {
          current: 'tab3',
          radarList: new Array(33),
          manDetailList: new Array(33)
      }
  },
  components: {
      Card,
      manDetail
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
        height: 450rpx;
        background-color: #fff;
        padding-top: 25rpx;
        padding-bottom: 25rpx;
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
    }
    .bottom-list {

    }
    .bottom-icon {
        color: 'red';
    }
    
    .caption-wrap{
    margin-bottom: 30px;
    }

    .caption-title{
    font-weight: bold;
    padding:20px 10px;
    }

    .collapse-item-title{
    font-size: 12px;
    color: #737373;
    font-weight: bold;
    }

    .collapse-item-content{
    font-size: 14px;
    color: #444444;
    }
    .action-detail-center {
        background: #fff;
    }
    .collapse-item-title {
        height:40px;
        padding: 5px;
        color: #737373;
        font-size: 16px;
        
    }

</style>
