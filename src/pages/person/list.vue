<!-- 个人中心 -->
<template>
  <div class='page app'>
      <div class="me-header card-bg" :style="{ backgroundImage: 'url('+background+')' }">
          <div class="me-header-cont  p-y-2">
              <div>
                <i-row i-class="p-x-2">
                        <i-col i-class="" :span="4">
                            <i-avatar size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg"></i-avatar>
                        </i-col>
                        <i-col i-class="p-x-1" :span="18">
                            <p class="me-title">董小姐</p>
                            <p class="me-sub">智慧美貌集一身</p>

                        </i-col>
                        <i-col i-class="" :span="2">
                            <i-icon class="p-a-1" type="editor" size="22" @click="editor"/>
                        </i-col>
                    </i-row>
                    <i-divider lineColor="#dddee1"></i-divider>
                    <div class="me-b p-x-2">
                        <p class="me-title">广东印生活网络有限公司</p>
                        <p class="me-sub">电话：1353699106</p>
                        <p class="me-sub">邮箱：1353699106</p>
                    </div>
                </div>              
          </div>           
      </div>
        <div class="me-header-b bgf m-b-2">
            <i-row i-class="p-y-1 ranking">
                <i-col i-class="text-center font-color" span="8">
                    <p class="text-oh">0</p>
                    <p class="center-a"><i-icon type="flag_fill" color="#f5222d" size="22"/>人气</p>
                

                </i-col>
                <i-col i-class="text-center font-color" span="8">
                    <p class="text-oh">0</p>
                    <p class="center-a "><i-icon type="praise_fill" color="#19be6b" size="22"/>点赞</p>

                </i-col>
                <i-col i-class="text-center font-color" span="8">
                    <p class="text-oh">0</p>
                    <p class="center-a"><i-icon type="collection_fill" color="#ff9900" size="22"/>收藏</p>
                </i-col>
            </i-row>
             <i-divider lineColor="#dddee1" height="4"></i-divider>
            <i-row i-class="p-x-2 ">
                <i-col i-class="font-color-sub p-y-2" span="3">简介</i-col>
                <i-col i-class="font-color p-y-2" span="21">风流倜傥，年少多金,人见人爱风流倜傥，年少多金,人见人爱风流倜傥，年少多金,人见人爱风流倜傥，年少多金,人见人爱风流倜傥，年少多金,人见人爱风流倜傥，年少多金,人见人爱</i-col>
            </i-row>
        </div>
        <div class="bgf">
            <i-cell-group>
             <i-cell title="排行榜" is-link url="/pages/person/rankingList">
                 <i-icon slot="icon" type="barrage_fill" size="22" color="#2d8cf0" />
             </i-cell>
              <i-cell title="名片夹" is-link url="/pages/person/cardList">
                 <i-icon slot="icon"  type="businesscard_fill" size="22" color="#2d8cf0" />
             </i-cell>
             </i-cell-group>
        </div>
        <div class="submit-btn">
            <i-button @click="handleClick" type="primary">递名片</i-button>
        </div>
  </div>
</template>

<script>
import api from '@/utils/api'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      background: 'https://wx.qlogo.cn/mmopen/vi_32/ateb2NiaL4qEb0icXBSeOfCFAicqylicQOzTTeejUJ0oNoWP2Hib1tkAdr6gcD85Y6v7yynKuZ4YZmUol1fc3zaVusw/132'
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    editor () {
      this.$router.push({path: '/pages/person/editCard'})
    }
  }
}
</script>
<style lang='less' scoped>

.card-bg {
    width: 100%;
    height: 190px;
    position: relative;
    background-size: cover;

  }
  .me-header-cont{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
       height: 190px;
      background:rgba(0,0,0,0.22);
  }
.me-header{
    color: #fff;
}
.me-title{
    font-size: 16px;
}
.me-sub{
    font-size: 12px;
    line-height: 22px;
}
.ranking{
    .center-a{
        margin-top: 3px;
    }
}

</style>