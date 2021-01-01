import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetchedRepoList: [],
    showAsList: false
  },
  mutations: {
    mut_fetchedRepos(state, repolist){
      console.log("mutating");
      state.fetchedRepoList = repolist;
    }
  },
  actions: {
    action_fetchRepos({commit}, fe_topic) {
      // const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
      // const querystring = 'q=topic:ruby+topic:rails'
      // const queryString = 'q=sort=forks&direction=desc'
      console.log("Action Topic: ", fe_topic);
      const queryString = 'q='+fe_topic+'&sort=stars'
      // old query --> 'q='+fe_topic+'+topic:'+ fe_topic +'&sort=stars'
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
          commit('mut_fetchedRepos', repolist.items); 
          console.log("commiting");
        });
    },
  },
  getters: {
    getter_fetchedRepos: state=> {
      return state.fetchedRepoList;
    }
  }
})
