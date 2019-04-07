<template>
  <div>
    <header-home></header-home>
    <nav-home :actived-index="activedNavIndex" @change="changeActivedNavIndex"></nav-home>
    <list-home :menu-index="activedNavIndex" :list="list"></list-home>
  </div>
</template>


<script>
import headerHome from "../../common/header/Header";
import navHome from "./components/Nav";
import listHome from "./components/List";
import { getList } from "@/api/list";
export default {
  name: "Home",
  data() {
    return {
      activedNavIndex: 0,
      list: []
    };
  },
  components: {
    headerHome,
    navHome,
    listHome
  },
  methods: {
    changeActivedNavIndex(index) {
      this.activedNavIndex = index;
    }
  },
  mounted() {
    getList().then(res => {
      if (res.code == 1) {
        this.list = res.data;
      }
    });
  }
};
</script>

<style lang="stylus" scoped></style>
