<template>
  <div class="header-navLink">
    <router-link to="/" class="header-link" exact>
      <span class="link-text">首页</span>
    </router-link>
    <router-link to="/game" class="header-link">
      <span class="link-text">比赛</span>
    </router-link>
    <router-link to="/data" class="header-link">
      <span class="link-text">数据</span>
    </router-link>
  </div>
</template>


<script>
export default {
  name: "Link"
};
</script>

<style lang="stylus" scoped>
.header-navLink {
  height: 100%;
  width: 70%;
  display: table;
  float: right;

  .header-link {
    color: #9af3af;
    font-size: 0.3rem;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
    position: relative;

    &.router-link-active {
      color: #fff;

      .link-text:after {
        position: absolute;
        content: '';
        left: 50%;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid #fff;
        margin-left: -5px;
      }
    }
  }
}
</style>

