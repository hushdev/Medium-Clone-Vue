<template>
  <ul class="tag-list" v-if="tags">
    <li
      v-for="(tag, index) in tags"
      :key="index"
      class="tag-default tag-pill tag-outline"
    >
      {{ tag }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'McvTagList',
  props: {
    tagList: {
      type: Array,
      required: false
    }
  },
  computed: {
    tags() {
      return this.tagList
    }
  }
}
</script>
