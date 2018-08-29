<template>
    <ul class="mesg-list">
        <li class="mesg-items" v-for="(items,index) in list" :key="index" @click="link">
            <i-row>
                <i-col span="5" i-class="col-class mesg-img">
                    <img class="mesg-img fl" src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">               
                </i-col>
                <i-col offset="1" span="12" i-class="col-class">
                        <p class="mesg-t text-oh font-color-title">刘德华</p>
                        <p class="mesg-s text-oh font-color-sub">你好我是董小姐，帅哥赶紧过来，你好我是董小姐，帅哥赶紧过来，你好我是董小姐，帅哥赶紧过来</p>
                </i-col>
                <i-col span="6" i-class="col-class ">
                        <p class="mesg-s  text-oh text-right font-color-sub">2018-07-11</p>
                </i-col>
            </i-row>
            <div >
            </div>

        </li>
    </ul>
    
</template>
<script>
export default {
  props: {
    list: ''
  },
  methods: {
    link () {
      this.$router.push({path: '/pages/radar/list', isTab: true})
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
      padding: 4px 0px;
    }
    .mesg-s{
      font-size: 12px;
      color: #80848f;
    }
}
</style>


