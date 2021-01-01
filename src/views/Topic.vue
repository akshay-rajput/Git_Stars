<template>
  <div class="container mx-auto px-4 py-3 md:py-6 topic-repos">
    <!-- Repolist heading -->
    <div class="flex justify-between items-center">
      <h2 class="text-xl">Popular <span class="">{{ fetch_topic }}</span> Repositories</h2>
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
    <div class="">
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
    this.$store.dispatch('action_fetchRepos', this.fetch_topic);
    // this.fetchedRepoList;
  },
  computed: {
    fetchedRepoList(){
      return this.$store.getters.getter_fetchedRepos;
    }
  },
}
</script>

<style lang="scss" scoped>

</style>