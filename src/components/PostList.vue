<template>

<div v-show ="posts.length > 0">
  <transition-group name="list">

<PostItem
    v-for = 'post in posts' :key='post.id'
    :post = "post"
    @remove = "$emit('remove', post)"
/>

  </transition-group>

</div>


  <h2 v-show="posts.length === 0" style ="color: red">Постов нет!</h2>
</template>


<script>
import PostItem from "@/components/PostItem"

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {

  }
}
</script>


<style scoped>
.post{
  width: 100%;
  padding: 15px;
  border: 3px solid teal;
  margin-top: 10px;
  border: 3px solid #1560bd;
  border-radius: 7px;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.list-move {
  transition: transform 0.4s ease;
}

</style>

<!--.slice().reverse() -->