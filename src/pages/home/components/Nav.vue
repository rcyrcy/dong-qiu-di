<template>
  <div class="subnav-bar-wrapper">
    <div class="subnav-bar">
      <a
        v-for="(item,index) in navlist"
        :key="item.id"
        href="javascript:;"
        class="subnav-bar-txt"
        :class="{active:activedIndex === index}"
        @click="changeNav(index)"
      >{{item.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "navHome",
  props: {
    activedIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      navlist: [
        { title: "热门", id: "001" },
        { title: "头条", id: "002" },
        { title: "中超", id: "003" },
        { title: "足彩", id: "004" },
        { title: "深度", id: "005" },
        { title: "闲情", id: "006" },
        { title: "集锦", id: "007" },
        { title: "国际", id: "008" },
        { title: "英超", id: "009" },
        { title: "西甲", id: "010" },
        { title: "意甲", id: "011" },
        { title: "德甲", id: "012" }
      ]
    };
  },
  methods: {
    changeNav(index) {
      this.$emit("change", index);
    }
  }
};
</script>

<style lang="stylus" scoped>
.subnav-bar-wrapper {
  height: 0.64rem;
  color: #333;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #e9e9e9;
  background: #fff;

  .subnav-bar {
    height: 100%;
    width: 100%;
    overflow: auto;
    display: block;
    white-space: nowrap;
    text-align: center;

    .subnav-bar-txt {
      margin: 0 0.2rem;
      font-size: 0.2rem;
      height: 0.6rem;
      line-height: 0.64rem;
      display: inline-block;
      text-align: center;
      position: relative;
      white-space: nowrap;
      border-bottom: 0.2rem solid transparent;

      &.active {
        color: #16b13a;
        border-bottom-color: #16b13a;
      }
    }
  }
}
</style>
