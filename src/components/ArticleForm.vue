<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <mcv-validation-errors v-if="errors" :validation-errors="errors" />
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Article title"
                  v-model="title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Description"
                  v-model="description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="What your article (in markdown)"
                  v-model="body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags by coma ,"
                  v-model="tagList"
                />
              </fieldset>
              <fieldset class="form-group">
                <button
                  class="btn btn-light pull-xs-right btn-primary"
                  @click.prevent="submit"
                  :disabled="isSubmitting"
                >
                  Publish article
                </button>
              </fieldset>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvValidationErrors from '@/components/ValidationErrors'

export default {
  name: 'McvArticleForm',
  components: {
    McvValidationErrors
  },
  data() {
    return {
      title: '',
      description: '',
      body: '',
      tagList: ''
    }
  },
  props: {
    initialState: {
      type: Object,
      required: true
    },
    isSubmitting: {
      type: Boolean,
      required: true
    },
    errors: {
      type: Object,
      required: false
    }
  },
  methods: {
    submit() {
      const form = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList.split(',')
      }
      this.$emit('onSubmit', form)
    }
  }
}
</script>

<style></style>
