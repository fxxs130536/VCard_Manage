<template>
    <div class="mesg-list">
        <div class="mesg-items" @click="open">
            <i-row>
                <i-col span="5" i-class="col-class mesg-img">
                    <img class="mesg-img fl" :src="list.strAvatarUrl" alt="">               
                </i-col>
                <i-col offset="1" span="14" i-class="col-class">
                        <p class="mesg-t text-oh font-color-title">{{list.strName}}在你的名片上互动了{{num}}次</p>
                </i-col>
                <i-col span="4" i-class="col-class">
                    <div class="icon-col">
                        <i-icon type="enter" color="#80848f" size="28" v-if="!openItem"/>
                        <i-icon type="unfold" color="#80848f" size="28" v-if="openItem"/>
                    </div>
                </i-col>
            </i-row>
            <div v-if="openItem">
                <i-row i-class="row-class" v-for="(item , index) in keyGroup" :key="index" v-if="list[item]">
                    <i-col span="5" i-class="row-text">{{item}}</i-col>
                    <i-col span="19" i-class="">
                        <i-progress :percent="list[item]" status="active"></i-progress>
                    </i-col>
                </i-row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    list: {

    },
    keyGroup: {},
    openItem: true
  },
  data () {
    return {
      num: 0
    }
  },
  mounted () {
    for (const key in this.keyGroup) {
      if (key === 'strName' || key === 'CreateBy' || key === 'operName' || key === 'OperatedUserId' || key === 'strAvatarUrl') {
      } else {
        this.num += this.list[key]
      }
    }
  },
  methods: {
    open () {
      this.openItem = !this.openItem
    }
  }
}
</script>
<style lang="less" scoped>
    .mesg-items{
        padding: 8px;
        border-bottom:1px solid #dddee1;
    
        .mesg-img{
            width: 100%;
            height: 60px;

        }
        .mesg-t{
            font-size: 14px;
            color: #495060;
            height: 60px;
            line-height: 60px;
        }
        .icon-col {
            padding-top: 15px;
            text-align: center;
        }
    }
    .row-text {
        text-align: center;
    }
    .row-class {
        padding-top: 10px;

    }
</style>


