<template>
  <div class="home container mx-auto px-4 py-6 md:py-12">
    <div class="flex justify-between items-center">
      <h3 class="text-xl">Popular JS Repositories</h3>
      <div class="">
        <button class="btn-app border border-gray-50 px-3 py-1" @click="fetchRepos">Get Repo</button>
        <button class="mx-3 md:mx-4 px-1 btn-display-cards" :class="showAsList ? '':'btn-toggled'" @click="showAsList=false">
          <span class="fa fa-border-all text-xl"></span>
        </button>
        <button class="px-1 btn-display-list" :class="showAsList ? 'btn-toggled':''" @click="showAsList=true">
          <span class="fa fa-list text-xl"></span>
        </button>
      </div>
    </div>
    <ShowRepos :repoList=fetchedRepoList :repoListDisplay="showAsList" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import ShowRepos from '@/components/ShowRepos.vue'

export default {
  name: 'Home',
  components: {
    ShowRepos,
  },
  data(){
    return{
      showAsList: false,
      // showAsCard: true,
      fetchedRepoList: []
    }
  },
  methods: {
    fetchRepos() {
      // https://api.github.com/search/repositories?q=
      // const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
      // const queryString = 'q=stars:>=50000'
      // const querystring = 'q=topic:ruby+topic:rails'
      // const queryString = 'q=sort=forks&direction=desc'
      const queryString = 'q=topic:freecodecamp&sort=stars'
      // const queryString = 'q=javascript+is:featured&sort=stars'
      axios
        .get("https://api.github.com/search/repositories?"+queryString,{ 
              headers: {
                  'Accept' : 'application/vnd.github.v3+json'
              }})
        .then((response) => {
          console.log("Status: ", response.status);

          // check rate limit
          axios.get("https://api.github.com/rate_limit").then((response) => {
            console.log("ratelimit: ", response.data.resources.search);
          });

          return response.data;
        })
        .then((repolist) => {
          console.log("repoList length: ", repolist.items);
          this.fetchedRepoList = repolist.items;
          
          // console.log("type of repolist: ", repolist);
        });
    },
  }
}
</script>

<style lang="scss" scoped>
  .btn-toggled{
    border-radius: 4px;
    background: rgba($color: #000000, $alpha: .35);
    color: #aaa;
    &:focus{
      outline-color: teal;
    }
  }

</style>