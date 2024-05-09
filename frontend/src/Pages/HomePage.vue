<template>
  <div class="homePage">
    <side-bar/>
    <router-view/>
  </div>
</template>

<script>
import sideBar from "../components/sideBar.vue";
export default {
  name: "HomePage",
  components: {
    sideBar,
  },
};
</script>

<style scoped>
.homePage{
  display: flex;
  align-items: center;
}

</style>