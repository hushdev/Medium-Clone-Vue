<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-13 col-xs-12 m-auto">
          <h1 class="text-xs-center">Sign Up</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'login'}">Already have an account?</router-link>
          </p>
          <mcv-validation-errors
            v-if="validationErrors"
            :validation-errors="validationErrors"
          />
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg mt-1"
                placeholder="Username"
                v-model="username"
              />
              <input
                type="text"
                class="form-control form-control-lg mt-1"
                placeholder="Email"
                v-model="email"
              />
              <input
                type="password"
                class="form-control form-control-lg mt-1"
                placeholder="Password"
                v-model="password"
              />
              <button
                class="btn btn-lg btn-primary pull-xs-right mt-1"
                :disabled="isSubmitting"
              >
                Sign Up
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvValidationErrors from '@/components/ValidationErrors'
import {actionTypes} from '@/store/modules/auth'
import {mapState} from 'vuex'

export default {
  name: 'McvRegister',
  components: {
    McvValidationErrors
  },
  computed: {
   ...mapState({
      isSubmitting: state => state.auth.isSubmitting,
      validationErrors: state => state.auth.validationErrors
    })
  },
  data() {
    return {
      email: '',
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(actionTypes.register, {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({name: 'globalFeed'})
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: center;
}
.mt-1 {
  margin-top: 1rem;
}
</style>
