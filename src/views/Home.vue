<template>
  <div class="home container mx-auto px-4 py-6 md:py-12">
    <div class="flex justify-between items-center">
      <h3 class="text-xl">Popular JS Repositories</h3>
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
    
    <div class="repo-list-parent">
      <div class="repo-list-limited overflow-hidden" :style="{ maxHeight: repoListHeight }">
        <ShowRepos :repoList=fetchedRepoList :repoListDisplay="showAsList" />
      </div>
      <div class="text-center repoList-displayOptions">
        <button class="btn-showmore" v-if="showLess" @click="showMoreRepos" >Show more</button>
        <button class="btn-showmore" v-if="showMore" @click="showLessRepos" >Show less</button>
      </div>
    </div>
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
      fetchedRepoList: [],
      repoListHeight: '750px',
      showLess: true,
      showMore: false
    }
  },
  mounted() {
    this.fetchRepos();
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
          console.log("repoList: ", repolist.items);
          this.fetchedRepoList = repolist.items;
          
          // console.log("type of repolist: ", repolist);
        });
    },
    showMoreRepos(){
      console.log("showing more");
      this.showMore = true;
      this.showLess = false;
      this.repoListHeight = '5000px';
    },
    showLessRepos(){
      console.log("showing less");
      this.showLess = true;
      this.showMore = false;
      this.repoListHeight = '750px';
    }
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
  .btn-showmore{
    padding: 6px 12px;
    border: 1px solid #ccc;
  }

  .repo-list-parent{
    position: relative;
  }
  .repo-list-limited{
    // height: auto;
    // max-height: 750px;
    transition: max-height ease-in 1s;
    margin-bottom: 10px;
  }

  #app.lighttheme .repoList-displayOptions::before{
    animation-name: fadeOutTextDelay;
    animation-duration: 2s;
    background: linear-gradient(0deg, rgba(255,255,255,1) 35%, rgba(255,255,255,0.25) 100%);    
  }
  #app.darktheme .repoList-displayOptions::before{
      background: linear-gradient(0deg, rgba(68,68,68,1) 35%, rgba(68,68,68,0.25) 100%);
      animation-name: fadeInTextDelay;
      animation-duration: 3s;
  }
  .repoList-displayOptions::before{
    content: '';
    width: 100%;
    left: 0;
    height: 2rem;
    position: absolute;
    bottom: 40px;
    // transition: background ease 0.75s;
  }
</style>