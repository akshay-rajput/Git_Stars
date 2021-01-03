<template>
  <div class="container repoList-container flex items-baseline flex-wrap mx-auto py-4" :class="repoListDisplay ? 'showRepo-list': ' showRepo-cards'">
    <!-- Passed Prop items: {{repoLength}} -->
    <div class="repo-card py-2 px-3 mb-6 " v-for="repository in repoList" :key="repository.id">
      <div class="repo-toprow mb-1">
        <div class="repo-name overflow-hidden">
          <a :href="repository.html_url" target="_blank" rel="noopener" class="text-blue-500">
            <h4 class="text-lg font-semibold mb-1 truncate">
              <span class="mr-1">
                <octicon :icon="octicons.repo" :scale="1.2" className="" ></octicon>
              </span>
              {{repository.name}}
            </h4>
          </a>
        </div>
        <div class="repo-stats flex justify-between">
          
          <div class="repo-language flex text-sm" title="Language">
            <span class="mr-1">
              <octicon :icon="octicons.code" className="github-icon mt2" ></octicon>
            </span>
            <span v-if="repository.language" class="">{{repository.language}}</span>
            <span v-if="!repository.language" class="">N/A</span>
          </div>

          <div class="repo-numbers flex ml-3">
            <div class="repo-forks mr-3 flex text-sm cursor-default" title="Forks">
              <span class="mr-1">
                <octicon :icon="octicons.repoForked" className="github-icon mt2" ></octicon>
              </span>
              {{repository.forks_count}}
            </div>
            
            <div class="repo-stars flex text-sm cursor-default" title="Stargazers">
              <span class="mr-1">
                <octicon :icon="octicons.star" className="github-icon github-icon-hollow mt2" ></octicon>
              </span>
              {{repository.stargazers_count}}
            </div>
          </div>
        </div>
      </div>
      <div class="repo-description text-sm my-3" title="Description">
        {{repository.description}}
      </div>

      <!-- owner and update date -->
      <div class="my-2 repo-info flex flex-wrap justify-between">
        <a :href="repository.owner.html_url" class="repo-owner text-sm" title="Owner">
          <span class="mr-1">
            <octicon :icon="octicons.person" className="github-icon github-icon-hollow" ></octicon>
          </span>
          {{repository.owner.login}}
        </a>
        <div class="repo-updated text-sm cursor-default" title="Last Update on">
          <span class="mr-1">
            <octicon :icon="octicons.calendar" className="github-icon" ></octicon>
          </span>
          {{repository.updated_at.substring(0,10)}}
        </div>
      </div>

      <div class="repo-projectlink pt-2 border-t border-dashed border-gray-400 text-xs overflow-hidden">
        <a  v-if="repository.homepage" :href="repository.homepage" target="_blank" rel="noopener" title="Project Homepage">
          <span class="truncate">
            <span class="mr-1">
              <octicon :icon="octicons.link" className="github-icon mt-0" ></octicon>
            </span>
            {{repository.homepage}}
          </span>
        </a>
        
        <p v-if="!repository.homepage" class="">
          <span class="mr-1">
            <octicon :icon="octicons.link" className="github-icon mt-0" ></octicon>
          </span>
          <span >
            Website not available
          </span>
        </p>
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

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .github-icon{
    height: 14px;
    width: 14px;

    &.mt2{
      margin-top: 1px;
    }
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

    @media(min-width: 768px) and (max-width: 991px){
      width: 49%;
      &:nth-child(2n){
        margin-left: 1%;
      }
    }
    @media(min-width: 992px){
      width: 32%;
      
      &:nth-child(3n+2){
        margin-left: 2%;
        margin-right: 2%;
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


