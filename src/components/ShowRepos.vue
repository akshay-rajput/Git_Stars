<template>
  <div class="container repoList-container flex items-center flex-wrap mx-auto py-4" :class="repoListDisplay ? 'showRepo-list': ' showRepo-cards'">
    <!-- Passed Prop items: {{repoLength}} -->
    <div class="repo-card p-2 mb-4 border">
      <div class="repo-toprow mb-1">
        <div class="repo-name overflow-hidden">
          <a href="" class="text-blue-500">
            <h4 class="text-lg font-semibold mb-1 truncate">My Repository Name goes here thes sdlkfjlsdflkjdf</h4>
          </a>
        </div>
        <div class="repo-stats flex justify-between">
          <div class="repo-forks flex text-sm">
            <span class="mr-1">
              <octicon :icon="octicons.repoForked" className="github-icon" ></octicon>
            </span>
            {425351}
          </div>
          
          <div class="repo-watchers mx-2 md:mx-3 flex text-sm">
            <span class="mr-1">
              <octicon :icon="octicons.eye" className="github-icon" ></octicon>
            </span>
            {450012}
          </div>
          
          <div class="repo-stars flex text-sm">
            <span class="mr-1">
              <octicon :icon="octicons.star" className="github-icon github-icon-hollow" ></octicon>
            </span>
            {412252}
          </div>
        </div>
      </div>
      <div class="repo-description text-sm my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maiores ut sint ducimus itaque, abwed facilis veniam quidem dolores quos sunt deleniti eveniet ea, nobis quas libero. Est, maxime deleniti!
      </div>
      <div class="my-2 repo-info flex justify-between">
        <div class="repo-owner text-sm">
          <span class="">
            <octicon :icon="octicons.person" className="github-icon github-icon-hollow" ></octicon>
          </span>
          Owner of Repository
        </div>
        <div class="repo-updated text-sm">
          <span class="">
            <octicon :icon="octicons.calendar" className="github-icon" ></octicon>
          </span>
          {17 May 2020}
        </div>
      </div>

      <div class="repo-projectlink pt-2 border-t border-dashed border-gray-400 text-xs">
        <span class="">
            <octicon :icon="octicons.link" className="github-icon" ></octicon>
          </span>
          {https://somelongprojectlinkhere.netlify.app}
      </div>
      
    </div>

    <div class="repo-card p-2 mb-4 border">
      <div class="repo-toprow mb-1">
        <div class="repo-name overflow-hidden">
          <a href="" class="text-blue-500">
            <h4 class="text-lg font-semibold mb-1 truncate">My Repository Name</h4>
          </a>
        </div>
        <div class="border-t border-dashed border-gray-400 pt-2 repo-stats flex justify-between">
          <div class="repo-forks text-sm">
            <span class="">
              <octicon :icon="octicons.repoForked" className="github-icon" ></octicon>
            </span>
            {425351}
          </div>
          
          <div class="repo-watchers text-sm">
            <span class="">
              <octicon :icon="octicons.eye" className="github-icon" ></octicon>
            </span>
            {450012}
          </div>
          
          <div class="repo-stars text-sm">
            <span class="">
              <octicon :icon="octicons.star" className="github-icon github-icon-hollow" ></octicon>
            </span>
            {412252}
          </div>
        </div>
      </div>
      <div class="repo-description text-sm my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maiores u!
      </div>
      <div class="my-2 repo-info flex justify-between">
        <div class="repo-owner text-sm">
          <span class="">
            <octicon :icon="octicons.person" className="github-icon github-icon-hollow" ></octicon>
          </span>
          Owner of Repository
        </div>
        <div class="repo-updated text-sm">
          <span class="">
            <octicon :icon="octicons.calendar" className="github-icon" ></octicon>
          </span>
          {17 May 2020}
        </div>
      </div>

      <div class="repo-projectlink pt-2 border-t border-dashed border-gray-400 text-xs">
        <span class="">
            <octicon :icon="octicons.link" className="github-icon" ></octicon>
          </span>
          {https://somelongprojectlinkhere.netlify.app}
      </div>
      
    </div>

    <div class="repo-card p-2 mb-4 border">
      <div class="repo-toprow mb-1">
        <div class="repo-name overflow-hidden">
          <a href="" class="text-blue-500">
            <h4 class="text-lg font-semibold mb-1 truncate">My Repository Name</h4>
          </a>
        </div>
        <div class="border-t border-dashed border-gray-400 pt-2 repo-stats flex justify-between">
          <div class="repo-forks text-sm">
            <span class="">
              <octicon :icon="octicons.repoForked" className="github-icon" ></octicon>
            </span>
            {425351}
          </div>
          
          <div class="repo-watchers text-sm">
            <span class="">
              <octicon :icon="octicons.eye" className="github-icon" ></octicon>
            </span>
            {450012}
          </div>
          
          <div class="repo-stars text-sm">
            <span class="">
              <octicon :icon="octicons.star" className="github-icon github-icon-hollow" ></octicon>
            </span>
            {412252}
          </div>
        </div>
      </div>
      <div class="repo-description text-sm my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maiores u!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias amet sint unde! Veritatis quos minus cumque dolores, dolore provident, vel soluta dolorum in at esse laudantium culpa? Pariatur, aspernatur similique.
      </div>
      <div class="my-2 repo-info flex justify-between">
        <div class="repo-owner text-sm">
          <span class="">
            <octicon :icon="octicons.person" className="github-icon github-icon-hollow" ></octicon>
          </span>
          Owner of Repository
        </div>
        <div class="repo-updated text-sm">
          <span class="">
            <octicon :icon="octicons.calendar" className="github-icon" ></octicon>
          </span>
          {17 May 2020}
        </div>
      </div>

      <div class="repo-projectlink pt-2 border-t border-dashed border-gray-400 text-xs">
        <span class="">
            <octicon :icon="octicons.link" className="github-icon" ></octicon>
          </span>
          {https://somelongprojectlinkhere.netlify.app}
      </div>
      
    </div>
  </div>
</template>

<script>
// import github icons
import Octicon, { Octicons } from 'octicons-vue'

export default {
  name: "ShowRepos",
  props: {
    repoList: Array,
    repoListDisplay: Boolean
  },
  components: {
    Octicon
  },
  data(){
    return{
      repoLength: 0,
      octicons: Octicons
    }
  },
  computed: {
    getRepos() {
      console.log("Getting Repos:");
      const repos = this.fetchRepo();
      return repos;
    },
  },
  methods: {
    
  },
  watch: {
    repoList: function(){
      if(this.repoList.length > 0){
        this.repoLength = this.repoList.length;
      }
    },
    repoListDisplay: function(){
      if(this.repoListDisplay === true){
        // this.repoLength = this.repoList.length;
        console.log("Yes display as list");
      }
      else{
        console.log("No, display as cards");
      }
    }
  }
};

// repolist.items.forEach((repo) => {
            
//   const repo_name = repo["name"];
//   const repo_owner = repo["owner"]["login"];
//   const repo_stars = repo['stargazers_count'];

//   if (repo_name == "thefuck") {
//     console.log("Name: " + repo_name);
//     console.log("Owner: " + repo_owner);
//     console.log("Stars: " + repo_stars);
    
//     // console.log("\n FULL REPO: \n" + JSON.stringify(repo));
//   }
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .github-icon{
    // border-color: green;
    height: 14px;
    width: 14px;
    margin-top: 2px;
  }
  .github-icon-hollow{
    fill: none;
    stroke: currentColor;
    // stroke-width: initial;
    // stroke: #333;
  }

  .repo-card{
    // flex-grow: 1;
    transition: all linear 1s;
  }
  // show as cards
  .showRepo-cards .repo-card{
    width: 100%;
    .repo-stats{
      padding-top: 8px;
      border-top: 1px dashed rgb(156, 163, 175);
    }

    @media(min-width: 768px){
      width: 49%;

      &:nth-child(2n){
        margin-left: 1%;
      }
    }
    @media(min-width: 992px){
      width: 31%;
      &:nth-child(2n){
        margin-left: 1%;
        margin-right: 1%;
      }
    }
  }

  // show as list
  .showRepo-list .repo-card{
    width: 100%;
    // flex-grow: 1;
    // transition: all linear 1s;
    .repo-description{
      margin-top: 0px;
      padding-top: 8px;
      border-top: 1px dashed rgb(156, 163, 175);
    }
  }

  .showRepo-list .repo-toprow{
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;

    .repo-stats{
      margin-left: 10px;
      margin-top: -4px;
    }
  }

</style>


