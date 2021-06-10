<template>
  <div id="app">
      <!-- <Header/> -->
      <TapMenu/>
      <FeedList/>
      <FriendList/>
  </div>
</template>

<script>
// import Header from './components/Header.vue'
import TapMenu from './components/TapMenu.vue'
import FeedList from './components/FeedList.vue'
import FriendList from './components/FriendList.vue'

export default {
  name: 'App',
  components: {
    // Header,
    TapMenu,
    FeedList,
    FriendList
  }
}
</script>

<style>
@import "reset.css";

#app {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
</style>
