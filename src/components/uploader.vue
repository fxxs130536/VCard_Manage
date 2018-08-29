<template>
  <div class="weui-cells">
    <div class="weui-cell">
      <div class="weui-cell__bd">
        <div class="weui-uploader m-x-1">
          <div class="weui-uploader__hd">
            <i-cell i-class="m-b-1" :title="title"><span slot="footer" v-if="max">{{files.length}}/{{max}}</span></i-cell>
            <!-- <div
              class="weui-uploader__title"
              v-text="title"
            />
            <div
              class="weui-uploader__info"
              v-if="max"
            >
              {{files.length}}/{{max}}
            </div> -->
          </div>
          <div class="weui-uploader__bd">
            <div class="weui-uploader__files clearfix ">
              <div class="upimg-list"
                v-for="(file,index) in files"
                :key="file.path"
              >
                <div
                  :class="['weui-uploader__file', {'weui-uploader__file_status': file.hasMask}]"
                  @click="longtap(file,index)"
                >
                  <img
                    class="weui-uploader__img"
                    mode="aspectFill"
                    :src="file.path"
                  />
                  <div
                    class="weui-uploader__file-content"
                    v-if="file.hasMask"
                  >
                 
                    <i-icon
                      v-if="file.failure"
                      color="#F43530"
                      type="prompt_fill"
                      size="23"
                    />
                    <span
                      v-text="file.progress + '%'"
                      v-else
                    />
                  </div>
                </div>
              </div>
              <div class="weui-uploader__input-box clearfix">
                <div
                  class="weui-uploader__input center-a"
                  @click="$emit('onSelect')"
                ><i-icon type="add" color="#80848f" size="34"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'uploader',
  props: {
    fileList: {
      type: Array,
      default: () => []
    },
    title: String,
    max: Number
  },
  computed: {
    files () {
      const curFiles = this.max ? this.fileList.slice(0, this.max) : this.fileList
      return curFiles.map((file) => {
        file.hasMask = file.failure || (file.progress && file.progress !== 100)

        return file
      })
    }
  },
  methods: {
    preview (rawFile) {
      if (rawFile.failure) return
      wx.previewImage({
        current: rawFile.path,
        urls: this.files.filter(file => !file.failure).map(file => file.path)
      })
    },
    longtap (rawFile, i) {
      var _this = this
      var itemList = ['预览图片', '删除图片']
      this.$wxapi.showActionSheet({itemList}).then(res => {
        if (res.tapIndex == 0) {
          // 打开大图
          _this.preview(rawFile)
        } else if (res.tapIndex == 1) {
          this.fileList.splice(i, 1)
        }
      }).catch(res => {
        // console.log(res)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.weui-uploader__file{
   width:100%;
  height:100%;
}
.upimg-list{
   float:left;
    width: calc((100% - (9px * 3))/4);
    height:79px;
    margin-right:9px;
    margin-bottom:9px;
  border:1px solid #d9d9d9;
  box-sizing: border-box;


}
.weui-uploader__img{
  display:block;
  width:100%;
  height:100%;
  box-sizing: border-box;
}


.upimg-list:nth-child(4n + 4) {
  margin-right: 0;
}
.weui-uploader__input-box{
  float:left;
position:relative;
// margin-right:9px;
margin-bottom:9px;
width: calc((100% - (9px * 3))/4);
height:79px;
border:1px solid #d9d9d9;

}
.weui-uploader__input{
  position:absolute;
z-index:1;
top:0;
left:0;
width:100%;
height:100%;
// opacity:0;

}
.weui-uploader__file-content{
  position:absolute;
top:50%;
left:50%;
-webkit-transform:translate(-50%,-50%);
transform:translate(-50%,-50%);
color:#fff;

}
</style>
