import articleApi from '@/api/article'

const state = {
  isSubmitting: false,
  validationErrors: null
}

export const mutatationTypes = {
  createArticleStart: '[createArticle] Create article start',
  createArticleSuccess: '[createArticle] Create article success',
  createArticleFailure: '[createArticle] Create article failure'
}

export const actionTypes = {
  createArticle: '[createArticle] Create article'
}

const mutations = {
  [mutatationTypes.createArticleStart](state) {
    state.isSubmitting = true
  },
  [mutatationTypes.createArticleSuccess](state) {
    state.isSubmitting = false
  },
  [mutatationTypes.createArticleFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  }
}

const actions = {
  [actionTypes.createArticle](context, {articleInput}) {
    return new Promise(resolve => {
      context.commit(mutatationTypes.createArticleStart)
      articleApi
        .createArticle(articleInput)
        .then(article => {
          context.commit(mutatationTypes.createArticleSuccess, article)
          resolve(article)
        })
        .catch(result => {
          context.commit(
            mutatationTypes.createArticleFailure,
            result.response.data.errors
          )
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
