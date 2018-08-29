<template lang="pug">
    .radar-item
        img.radar-img(:src="https://i.loli.net/2017/08/21/599a521472424.jpg")

</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    turn () {
      const { link } = this.news
      this.$router.push(link)
    }
  }
}
</script>

<style lang="less" scoped>
    .radar-item {
        display: flex;
        height: 90px;
        align-items: center;
        border: 1px solid #eee;
    }
</style>
