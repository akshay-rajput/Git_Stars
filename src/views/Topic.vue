<template>
  <div class="topic-repos">
    <h2 class="">Popular <span class="">{{ fetch_topic }}</span> Repos</h2>
    <div class="">

    </div>
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
      fetchedRepoList: [],
      showAsList: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>