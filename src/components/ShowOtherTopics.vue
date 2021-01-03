<template>
  <div class="other-topics-tags">
      <h4 class="text-2xl text-gray-400 my-4">More topics</h4>
      <div class="grid sm:grid-cols-3 my-2">
        <div class="other-topic-list mb-2" v-for="(topiclist, category) in otherTopics" :key="category">
            <h5 class="mb-1 text-sm text-gray-400">{{category}}</h5>
            <div class="py-1 flex items-center flex-wrap">
                <router-link :to="{ name: 'Topic', params: { topicname: topic }}" class="text-sm topic-tag" v-for="topic in topiclist" :key="topic">
                    {{topic}}
                </router-link>
            </div>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return{
            otherTopics: {
                "Frontend": [
                    'Angular',
                    'UI-kit',
                    'API',
                    'SASS',
                    'Styleguide',
                    'Design-systems',
                    'Animations',
                ],
                "UI Components": [
                    'Tables', 
                    'Parallax', 
                    'Carousel',  
                    'Charts', 
                    'Map',
                    'Datepicker',
                    'Autocomplete',
                    'Select',
                    'Rich Text editing',
                ],
                "Meta": [
                    'Interview',
                    'Data Structures',
                    'Algorithms',
                    'Awesome Lists',
                    'Accessibility',
                    'Resources',
                    'Hacktoberfest'
                ],
                
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .topic-tag{
        font-size: 13px;
        letter-spacing: 0.05rem;
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 5px;
        margin-right: 8px;
        margin-bottom: 8px;
    }
    
    @media(min-width: 768px) {
        .other-topic-list:nth-child(2){
            padding-left: 15px;
            padding-right: 15px;
            margin-left: 15px;
            margin-right: 15px;
        }
    }

    @media(max-width: 767px) {
        .other-topic-list:nth-child(2){
            padding-top: 10px;
            padding-bottom: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            border-top: 1px dashed #aaa;
            border-bottom: 1px dashed #aaa;
        }
    }
</style>