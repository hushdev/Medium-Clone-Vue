<template>
  <mcv-article-form
    :initial-state="initialState"
    :errors="errors"
    :is-submitting="isSubmitting"
    @onSubmit="submit"
  />
</template>

<script>
import McvArticleForm from '@/components/ArticleForm'
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/createArticle'

export default {
  name: 'McvCreateArticle',
  components: {
    McvArticleForm
  },
  data() {
    return {
      initialState: {
        title: '',
        description: '',
        body: '',
        tags: []
      }
    }
  },
  computed: {
    ...mapState({
      errors: state => state.createArticle.validationErrors,
      isSubmitting: state => state.createArticle.isSubmitting
    })
  },
  methods: {
    submit(articleInput) {
      console.log(this.errors)
      this.$store
        .dispatch(actionTypes.createArticle, {articleInput})
        .then(article => {
          this.$router.push({name: 'article', params: {slug: article.slug}})
        })
    }
  }
}
</script>
