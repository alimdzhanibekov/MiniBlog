<template>
  <Navbar></Navbar>
<div class="app">
<router-view>

</router-view>
</div>

</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  }
}
</script>

<style>

*{
  margin: 5px;
  padding: 0;
  box-sizing: border-box;
}
.app{
  padding: 20px;
}
</style>
