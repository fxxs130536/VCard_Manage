<template>
    <div class="mesg-list">
        <div class="mesg-items" @click="open">
            <i-row>
                <i-col span="5" i-class="col-class mesg-img">
                    <img class="mesg-img fl" src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">               
                </i-col>
                <i-col offset="1" span="14" i-class="col-class">
                        <p class="mesg-t text-oh font-color-title">高档名片在你的名片上互动了22次</p>
                </i-col>
                <i-col span="4" i-class="col-class">
                    <div class="icon-col">
                        <i-icon type="enter" color="#80848f" size="28" v-if="!openItem"/>
                        <i-icon type="unfold" color="#80848f" size="28" v-if="openItem"/>
                    </div>
                </i-col>
            </i-row>
            <div v-if="openItem">
                <i-row i-class="row-class">
                    <i-col span="5" i-class="row-text">查看名片</i-col>
                    <i-col span="19" i-class="">
                        <i-progress percent="15" status="active"></i-progress>
                    </i-col>
                </i-row>
                <i-row i-class="row-class">
                    <i-col span="5" i-class="row-text">呼叫手机</i-col>
                    <i-col span="19" i-class="">
                        <i-progress percent="35" status="success"></i-progress>
                    </i-col>
                </i-row>
                <i-row i-class="row-class">
                    <i-col span="5" i-class="row-text">复制微信</i-col>
                    <i-col span="19" i-class="">
                        <i-progress percent="45" status="active"></i-progress>
                    </i-col>
                </i-row>
                <i-row i-class="row-class">
                    <i-col span="5" i-class="row-text">查看商品</i-col>
                    <i-col span="19" i-class="">
                        <i-progress percent="15" status="wrong"></i-progress>
                    </i-col>
                </i-row>
                <i-row i-class="row-class">
                    <i-col span="5" i-class="row-text">查看官网</i-col>
                    <i-col span="19" i-class="">
                        <i-progress percent="99" status="success"></i-progress>
                    </i-col>
                </i-row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    list: '',
    openItem: true
  },
  methods: {
    open() {
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


