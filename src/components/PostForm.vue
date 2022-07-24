<template>
  <form>
    <h4>Создание поста</h4>

    <input
       v-model = "post.title"
        class = "input"
        type = "text"
        placeholder = "Название поста"
    >
    <input
        v-model = "post.body"
        class = "input"
        type = "text"
        placeholder = "Описание поста"
    >

    <button
        type="button"
        class="btn"
        @click = "createPost"
    >

      <strong>
        Создать
      </strong>

    </button>

  </form>
</template>

<script>

export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost(event) {
      event.preventDefault();
      if (this.post.title === '' || this.post.body === ''){
        alert('Введите название/описание');
      }
      else if(this.post.title.length > 50 || this.post.body.length > 100 ){
        alert('Меньше 100');
      }
      else{
        this.post.id = Date.now();
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }

    }
  }
}
</script>

<style scoped>
.input{
  width: 100%;
  border: 3px solid teal;
  border-radius: 7px;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn{
  margin-top: 10px;
  align-self: flex-end;
  padding: 10px;
  background: teal;
  color: white;
  border: 2px solid teal;
  border-radius: 7px;
}
form{
  displaly: flex;
  flex-diraction: column;
}
</style>