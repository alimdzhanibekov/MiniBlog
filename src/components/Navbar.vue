<template>

<div class="navbar">

  <button class="welcome" @click="$router.push('/')"><h3 style="color: white">MiniBlog</h3></button>

<div>
  <button class="btn btn-primary" @click="$router.push('/blog')">Blog</button>
  <button class="btn btn-primary" @click="$router.push('/about')">About</button>

</div>

  </div>


</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

.navbar{
height: 50px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border: 0px solid blue;
  border-radius: 10px;
}
button{
  margin-left: auto;
  margin: 2px;
}

.welcome{
  padding: 0;
  border: none;
  background: none;
}
</style>