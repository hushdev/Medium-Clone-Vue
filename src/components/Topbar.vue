<template>
  <div class="space">
    <nav class="navbar navbar-light">
      <div class="container">
        <router-link class="navbar-brand" :to="{name: 'globalFeed'}">
          MediumCloneVue
        </router-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'globalFeed'}"
              >Home</router-link
            >
          </li>
          <template v-if="isLoggedIn">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'createArticle'}">
                <i class="ion-compose" />
                &nbsp; New Article
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'settings'}">
                <i class="ion-gear-a" />
                &nbsp; Settings
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{
                  name: 'userProfile',
                  params: {slug: currentUser.username}
                }"
              >
                <img class="user-pic" :src="currentUser.image" />
                &nbsp;
                {{ currentUser.username }}
              </router-link>
            </li>
          </template>
          <template v-if="isAnonymus">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'login'}">
                Sign in
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'register'}">
                Sign up
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import {getterTypes} from '@/store/modules/auth'
import {mapGetters} from 'vuex'

export default {
  name: 'McvTopbar',
  computed: {
    ...mapGetters({
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymus: getterTypes.isAnonymus,
      currentUser: getterTypes.currentUser
    })
  }
}
</script>

<style lang="scss" scoped>
.space {
  height: 56px;
  width: 100%;
  nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background: #fff;
    box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.37);
  }
}
</style>
