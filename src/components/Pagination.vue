<template>
  <ul class="pagination">
    <li
      v-for="page in pages"
      :key="page"
      class="page-item"
      :class="{active: currentPage === page}"
    >
      <router-link :to="{path: url, query: {page}}" class="page-link">
        {{ page }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'McvPagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    limit: {
      required: true,
      type: Number
    },
    currentPage: {
      required: true,
      type: Number
    },
    url: {
      required: true,
      type: String
    }
  },
  computed: {
    pages() {
      const totalPages = Math.ceil(this.total / this.limit)
      return [...Array(totalPages).keys()].map(el => el + 1)
    }
  }
}
</script>
