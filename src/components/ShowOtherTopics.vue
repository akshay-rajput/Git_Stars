<template>
  <div class="other-topics-tags border border-gray-500">
      <h4 class="text-xl">Other topics</h4>
      <div class="other-topic-list mb-2" v-for="(topiclist, category) in otherTopics" :key="category">
          <h5 class="mb-1 text-lg">{{category}}</h5>
          <div class="py-1 flex items-center flex-wrap">
              <a class="text-sm topic-tag" v-for="topic in topiclist" :key="topic">
                  {{topic}}
              </a>
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
                    'Hacktoberfest', 
                    'API',  
                    'SASS', 
                    'Build tools',
                    'Animations',
                ],
                "UI Components": [
                    'Tables', 
                    'Parallax', 
                    'Carousel',  
                    'Charts', 
                    'Map',
                    'Date picker',
                    'Autocomplete',
                    'Select dropdown',
                    'Rich Text editing',
                ],
                "Meta": [
                    'Frontend Interview',
                    'DS & Algorithms',
                    'UI design',
                    'Awesome Lists',
                    'Accessibility'
                ],
                
            }
        }
    }
}
</script>

<style>
    .topic-tag{
        cursor: pointer;
        padding: 4px 8px;
        background: orange;
        color: white;
        border-radius: 20px;
        margin-right: 8px;
        margin-bottom: 8px;
    }
</style>