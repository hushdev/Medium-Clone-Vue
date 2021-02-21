<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  name: 'McvError',
  props: {
    message: {
      required: false,
      type: String,
      default: 'Oppps, something went wrong.'
    }
  }
}
</script>
