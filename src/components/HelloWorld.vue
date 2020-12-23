<template>
  <div class="hello">
    <h3>{{ msg }}</h3> <br>
    <button class="" @click="fetchRepos">Get Repo</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    getRepos(){
      console.log("Getting Repos:");
      const repos = this.fetchRepo();
      return repos;
    }
  },
  methods: {
    fetchRepos(){
      axios.get('https://api.github.com/repositories')
      .then(response => {
        // return response.JSON();
        console.log('Convert to json', response.status);
        return response.data;
      })
      .then(data => {
        console.log(data);
        const repo_name = data['name'];
        const repo_owner = data['owner'].login;
        // const repo_info = axios.get('')
        
        console.log("Repo: ", repo_name + ", -> ", repo_owner);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
