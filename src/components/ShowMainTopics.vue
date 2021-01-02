<template>
  <div class="frontend-topics py-2 mb-3">
    <swiper :options="swiperOptions"
                @swiper="onSwiper" :scrollbar="{ draggable: true }"
                >
      <swiper-slide class="topic-card my-4" v-for="topic in jsTopics" :key="topic.name">
        <svg @click="select_topic(topic)" class="cursor-pointer" role="img" viewBox="0 0 24 24" fill-rule="evenodd" xmlns="http://www.w3.org/2000/svg">
          <path :fill=topic.color :d=topic.icon />
        </svg>
        <!-- <span :class="topic.icon"></span> -->
        <h5 class="cursor-pointer" @click="select_topic(topic)">{{topic.name}}</h5>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar} from 'swiper';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar]);

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

export default {
  props: {
    jsTopics: Array
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    // swiper carousel
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  data() {
    return {
      selected_topic: "Javascript",
      swiperOptions: {
        // Enable lazy loading
        lazy: true,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        breakpoints: {
          1024: {
            slidesPerView: 8,
            spaceBetween: 40,
            
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 30,
            grabCursor: true,
          },
          360: {
            slidesPerView: 4,
            spaceBetween: 10,
            grabCursor: true,
          },
          300: {
            slidesPerView: 3,
            spaceBetween: 10,
            grabCursor: true,
          }
        },
        mousewheel: true,
        
        // Some Swiper option/callback...
      },
    }
  },
  methods: {
    // swiper methods
    onSwiper(swiper) {
      console.log("swiper load: ",swiper)
    },
    select_topic(topic){
      this.selected_topic = topic.name;
      console.log("Select: ", this.selected_topic);
    }
  },
  watch: {
    selected_topic : function(){
      this.$emit('change_topic', this.selected_topic);
    }
  },
  directives: {
    swiper: directive
  }
}
</script>

<style lang="scss" scoped>
  .topic-card{
    overflow: hidden;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    transition: all ease .35s;

    svg{
      height: 48px;
      width: 48px;
      margin: 10px auto;
    }

    &:hover{
      box-shadow: 1px 3px 6px #ddd;
    }

    @media (max-width: 440px) {
      font-size: 12px;
      padding: 5px;

      svg{
      height: 32px;
      width: 32px;
      margin: 10px auto;
    }
    }
  }

  // scroll bar below slides
  .swiper-container-horizontal > .swiper-pagination-progressbar, 
  .swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{
    bottom: 0;
    top: auto;

    @media (min-width: 1024px) {
      display: none;
    }
  }
</style>