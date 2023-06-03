<template>
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shipinhuiyi"></use>
    </svg> -->
    

  
    <div class="home">
      <div class="content">
        <router-view/>
      </div>
    </div>
    <footer-page/>
</template>

<script>
import FooterPage from './components/FooterPage.vue';


export default {
    name: "App",
    components: { FooterPage }
}
</script>

<style lang="less" scoped>
 .home{
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
 }
</style>
