<template>
  <div>

    <div class="app_btns">
      <button type="button" class="btn btn-success"
              @click = "showDialog"
      > Создать пост</button>


      <input
          class="form-control"
          v-model="searchQuery"
          placeholder="Поиск"
      />


      <MySelect
          v-model="selectedSort"
          :options="sortOption"
      />
    </div>


    <MyDialog
        v-model:show="dialogVisible"
    >

      <PostForm
          @create="createPost"

      />

    </MyDialog>


    <PostList
        :posts ="sortedAndSearchedPosts"
        @remove = "removePost"
        v-if = "!isPostLoading"
    />


    <div
        class="loading"
        v-else>
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Загрузка...</span>
        </div>
      </div>
    </div>


    <div
        v-intersection="loadMorePosts"
        class="observer">

    </div>

    <!--
     <div class="page_wrapper">
   <div
       v-for = "pageNum in totalPages" :key = "page"
       class="page"
       :class="{
         'current-page': page === pageNum
   }"
       @click="changePage(pageNum)"
   >
     {{ pageNum }}
   </div>
     </div>
     -->


  </div>

</template>

<script>

import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import MyDialog from "@/components/MyDialog"
import axios from 'axios'
import MySelect from '@/components/MySelect'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  components: {
    PostForm, PostList, MyDialog, MySelect
  },
  data() {
    return {
      posts: [],
      title: '',
      body: '',
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      page: 1,
      limit: 50,
      totalPages: 0,
      sortOption: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
        {value: '', name: 'Отмена'}
      ],
      searchQuery: '',

    }
  },
  methods: {
    ...mapMutations({
setPage: 'post/setPage'
    }),
    ...mapActions({
loadMorePosts: 'post/LoadMorePosts',
fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    //changePage(pageNumber) {
    //this.page = pageNumber;
    //},
    async fetchPosts() {
      this.isPostLoading = true;
      try {

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch (e) {
        alert("Oшибка");
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data];


      } catch (e) {
        alert("Oшибка");
      }
    }
  },
  mounted() {

    this.fetchPosts();

  },
  computed: {
    //sortedPosts: 'post/sortedPosts',
    //sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    sortedPosts() {
     return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery))
   }
  },
  watch: {

  }
}
</script>

<style>

*{
  margin: 5px;
  padding: 0;
  box-sizing: border-box;
}

.btn-success {
  margin-right: auto;
}

.your_posts{
  border: 4px solid #5252a7;
  border-radius: 10px;

}

.app_btns {
  margin: 10px;
  height: 150px;
}

.page_wrapper{
  display: flex;
  margin-top: 15px;
}

.page{
  border: 1px solid black;
  padding: 10px;
}

.current-page{
  border: 2px solid green;
}

.observer{
  height: 30px;
  background: white;
}

.form-control{
  width: 200px;
  margin-top: 10px;
}

</style>
