<template>
  <div class="article-page">
    <div class="banner" v-if="article">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <router-link
            :to="{name: 'userProfile', params: {slug: article.author.username}}"
          >
            <img :src="article.author.image" />
          </router-link>
          <div class="info">
            <router-link
              :to="{
                name: 'userProfile',
                params: {slug: article.author.username}
              }"
            >
              {{ article.author.username }}
            </router-link>
            <span class="date">
              {{ article.createdAt }}
            </span>
          </div>
          <span v-if="isAuthor">
            <router-link
              class="btn btn-outline-secondary btn-small"
              :to="{name: 'editArticle', params: {slug: article.slug}}"
            >
              <i class="ion-edit"></i>
              Edit
            </router-link>
            <button
              class="btn btn-outline-danger btn-small ml-1"
              @click="deleteArticle"
            >
              <i class="ion-trash-a"></i>
              Delete
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="container page">
      <mcv-loading v-if="isLoading" />
      <mcv-error v-if="errors" />
      <div class="row article-content" v-if="article">
        <div class="col-xs-12">
          <p>{{ article.body }}</p>
          <mcv-tag-list :tag-list="article.tagList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import {actionTypes as articleActionTypes} from '@/store/modules/article'
import {getterTypes as authGetterTypes} from '@/store/modules/auth'

import McvLoading from '@/components/Loading'
import McvError from '@/components/ErrorMessage'
import McvTagList from '@/components/TagList'

export default {
  name: 'McvArticle',
  computed: {
    ...mapState({
      isLoading: state => state.article.isLoading,
      errors: state => state.article.errors,
      article: state => state.article.data
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser
    }),
    isAuthor() {
      if (!this.currentUser.username === this.article.author.username) {
        return false
      }
      return this.currentUser.username === this.article.author.username
    }
  },
  components: {
    McvLoading,
    McvError,
    McvTagList
  },
  mounted() {
    this.$store.dispatch(articleActionTypes.getArticle, {
      slug: this.$route.params.slug
    })
  },
  methods: {
    deleteArticle() {
      this.$store
        .dispatch(articleActionTypes.deleteArticle, {
          slug: this.$route.params.slug
        })
        .then(() => {
          this.$router.push({name: 'globalFeed'})
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.ml-1 {
  margin-left: 10px;
}
</style>
