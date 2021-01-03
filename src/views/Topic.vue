<template>
  <div class="container mx-auto px-4 py-3 md:py-6 md:mb-8 topic-repos">
    <div class="mb-8 mt-4 text-sm">
      <router-link to="/" class="text-gray-400">
        <span class="mr-1 fa fa-angle-double-left"></span> Back
      </router-link>
    </div>
    <!-- Repolist heading -->
    <div class="repolist-heading mb-4 flex justify-between items-center">
      <div class="">
        <h2 class="text-xl"><span class="highlight-topic-name mb-4">{{ fetch_topic }}</span> Repositories</h2>
        <h5 class="text-xs text-gray-400 pt-2">Showing popular repositories (max: 30) based on star count.</h5>
      </div>
      <div class="">
        <!-- <button class="btn-app border border-gray-50 px-3 py-1" @click="fetchRepos">Get Repo</button> -->
        <button class="hidden sm:inline mx-3 md:mx-4 px-1 btn-display-cards" :class="showAsList ? '':'btn-toggled'" @click="showAsList=false">
          <span class="fa fa-border-all text-xl"></span>
        </button>
        <button class="hidden sm:inline px-1 btn-display-list" :class="showAsList ? 'btn-toggled':''" @click="showAsList=true">
          <span class="fa fa-list text-xl"></span>
        </button>
      </div>
    </div>

    <!-- render list of repositories -->
    <div class="relative overflow-hidden">
      <div :class="loadingRepos ? 'loadingRepos':''" class="loading-icon" v-if="loadingRepos">
        <span class="fa fa-spinner fa-spin"></span>
        <p class="text-sm text-blue-400 my-4">Please wait</p>
      </div>
      <show-repos :repoList=fetchedRepoList :repoListDisplay="showAsList" />
    </div>
  </div>
</template>

<script>
import ShowRepos from '@/components/ShowRepos.vue';

export default {
  components: {
    ShowRepos,
  },
  data(){
    return{
      fetch_topic: this.$route.params.topicname,
      // fetchedRepoList: [],
      showAsList: false
    }
  },
  mounted() {
    // scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // fetch repositories
    this.$store.dispatch('action_fetchRepos', this.fetch_topic);
    // this.fetchedRepoList;
  },
  computed: {
    fetchedRepoList(){
      return this.$store.getters.getter_fetchedRepos;
    },
    loadingRepos(){
      return this.$store.getters.getter_loadingRepos;
    }
  },
}
</script>

<style lang="scss" scoped>

</style>