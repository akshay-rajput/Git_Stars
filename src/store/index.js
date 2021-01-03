import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetchedRepoList: [],
    showAsList: false,
    loadingRepos: false
  },
  mutations: {
    mut_fetchedRepos(state, repolist){
      console.log("mutating");
      state.fetchedRepoList = repolist;
    },
    mut_loadingRepos(state, isRepoListLoaded){
      console.log("loading repos");
      state.loadingRepos =  isRepoListLoaded;
    }
  },
  actions: {
    action_fetchRepos({commit}, fe_topic) {
      // const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
      // const querystring = 'q=topic:ruby+topic:rails'
      // const queryString = 'q=sort=forks&direction=desc'      
      // old query --> 'q='+fe_topic+'+topic:'+ fe_topic +'&sort=stars'
      // const queryString = 'q=javascript+is:featured&sort=stars'
      
      commit('mut_loadingRepos', true);

      const queryString = 'q='+fe_topic+'&sort=stars'
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
          commit('mut_fetchedRepos', repolist.items); 
        }).then(() => {
          commit('mut_loadingRepos', false);
        })
    },
  },
  getters: {
    getter_fetchedRepos: state=> {
      return state.fetchedRepoList;
    },
    getter_loadingRepos: state=> {
      return state.loadingRepos;
    }
  }
})
