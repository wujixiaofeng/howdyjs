export default `
\`\`\`
<template>
  <div id="example">
    <div class="wrapper">
      <div class="box"
           v-for="(item,index) in imgList"
           :key="index"
           @click="handleShowDialog($event, index)">
        <img :src="item"
             alt="image">
      </div>
      <div class="fake"
           v-for="num in 9"
           :key="'fake'+num"></div>
    </div>
    <AnimationDialog ref="dialog"
                     class="an-dialog"
                     :openFromItself="true">
      <div class="dialog-content">#{{active}}</div>
    </AnimationDialog>
  </div>
</template>

<script>
import AnimationDialog from '@/animation-dialog'
export default {
  components: {
    AnimationDialog
  },
  data () {
    return {
      imgList: Array.from({ length: 9 }, (item, index) => require(\`../assets/img/\${index + 1}.jpg\`)),
      active: 0
    }
  },
  methods: {
    handleShowDialog ($event, index) {
      this.active = index + 1
      this.$refs.dialog.open($event.currentTarget)
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.box {
  background: linear-gradient(45deg, #bdc3c7, #2c3e50);
  height: 160px;
  width: 160px;
  margin: 20px;
  cursor: pointer;
}
.fake {
  width: 160px;
  margin: 0 20px;
  height: 0;
  visibility: hidden;
}
.box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text {
  font-size: 20px;
  color: #889;
  padding: 5px;
}
.dialog-content {
  position: absolute;
  z-index: 10;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0 0 3px #ffaa00, 0 0 5px #262626;
}

/* 关闭按钮颜色 */
.animation-dialog-wrapper >>> .icon-close .line {
  background: #ccc !important;
}
.animation-dialog-wrapper >>> .icon-close:hover .line {
  background: #eee !important;
}
</style>
\`\`\`
`
