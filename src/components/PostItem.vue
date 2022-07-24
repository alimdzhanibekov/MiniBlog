<template>

  <div class = "post">

    <div><strong> Название: </strong> {{ post.title }}</div>
    <div><strong> Описание: </strong> {{ post.body }}</div>

    <div class="func_btns">
      <button
          type="button"
          class="btn btn-danger"
          @click = "$emit('remove', post)"
      >
        Удалить
      </button>

    </div>
    
  </div>

</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post{
  width: 100%;
  padding: 15px;
  margin-top: 10px;
  border: 3px solid #5252a7;
  border-radius: 7px;
  dispaly: flex;
  align-items: center;
  justify-content: space-between;
}
strong{
  color: #00308F;
}
.btn-success{
  margin-right: 5px;
}
</style>
