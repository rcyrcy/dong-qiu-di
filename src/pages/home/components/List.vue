<template>
  <ul class="news-list">
    <li v-for="item of list" :key="item.id">
      <a class="news-list-item" href="javascript:;">
        <div class="news-list-img-side">
          <img :src="item.imgUrl">
        </div>
        <div class="news-list-info">
          <h3>{{item.info}}</h3>
          <div class="news-list-tag">
            <span class="news-list-comment">{{item.comment}}评论</span>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "listHome",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.news-list-item {
  padding: 0.18rem;
  border-bottom: 1px solid #e9e9e9;
  background: #f7f7f7;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  overflow: hidden;
  min-height: 2rem;

  .news-list-img-side {
    width: 1.8rem;
    float: left;
    margin-right: 0.2rem;
    position: relative;
    line-height: 0;
    margin-bottom: 0.05rem;
    height: 1.34rem;

    img {
      width: 100%;
    }
  }

  .news-list-info {
    overflow: hidden;

    h3 {
      font-size: 0.3rem;
      line-height: 0.4rem;
      color: #333;
      margin-bottom: 0.08rem;
    }

    .news-list-tag {
      position: absolute;
      right: 0.2rem;
      bottom: 0.25rem;
      font-size: 0.06rem;
      line-height: 0.09rem;

      .news-list-comment {
        color: #8c9399;
      }
    }
  }
}
</style>
