<template>
  <div>
    <mcv-loading v-if="isLoading" />
    <mcv-error v-if="errors"/>
    <div class="sidebar" v-if="tags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link
          v-for="(tag, index) in tags"
          :key="index"
          class="tag-default tag-pill"
          :to="{
            name: 'tag',
            params: {
              slug: tag
            }
          }"
        >
          {{ tag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/popularTags'
import McvLoading from '@/components/Loading'
import McvError from '@/components/ErrorMessage'

export default {
  name: 'McvPopularTags',
  components: {McvLoading, McvError},
  computed: {
    ...mapState({
      isLoading: state => state.popularTags.isLoading,
      tags: state => state.popularTags.data,
      errors: state => state.popularTags.errors
    })
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags)
  }
}
</script>
