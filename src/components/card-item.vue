<template>
    <div class="card" @click="onClick">
        <div class="card-left">
            <text class="card-left-title">{{title}}</text>
            <text class="card-left-text">{{text}}</text>
        </div>
        <div class="card-right">
            <image :src="image"
                   class="card-right-image"></image>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        text: String,
        image: String
    },
    methods: {
      onClick () {
         this.$emit("onClick");
      }
    }
};
</script>
<style>
.card {
  width: 350rpx;
  height: 200rpx;
  background-color: rgba(45, 185, 245, 0.3);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  margin-left: 17rpx;
}
.card-left {
  padding-top: 50rpx;
  padding-left: 10rpx;
  width: 200rpx;
}
.card-left-title {
  color: #5B5B5B;
  font-size: 28rpx;
  font-weight: 700;
  margin-bottom: 10rpx;
}
.card-left-text {
  color: #707070;
  font-size: 28rpx;
  font-weight: normal;
}
.card-right {
  width: 150rpx;
}
.card-right-image {
  width: 100rpx;
  height: 100rpx;
  margin-left: 25rpx;
  margin-top: 50rpx;
}
</style>

