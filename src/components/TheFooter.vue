<template>
    <footer class="container mx-auto px-4 pt-4 flex flex-wrap justify-between items-end">
        <div class="footer-github-link my-2">
            <!-- Place this tag where you want the button to render. -->
            <a class="btn-github-star" href="https://github.com/root-0/Git_Stars" target="_blank" rel="noopener" aria-label="Star root-0/Git_Stars on GitHub">
                <octicon :icon="octicons.star" :scale="1" className="github-icon-hollow" ></octicon> 
                <small class="pl-1">Github</small>
            </a>
        </div>
        <div class="dev-links my-1">
            <small class="text-xs text-gray-400">Developer</small>
            <ul class="flex items-baseline place-items-end">
                <li class="">
                    <a href="https://github.com/root-0" class="footer-link" title="My Github Profile">
                        <span class="fab fa-github"></span>
                    </a>
                </li>
                <li class="mx-3">
                    <a href="https://www.linkedin.com/in/akshay-rajput/" class="footer-link" title="My LinkedIn Profile">
                        <span class="fab fa-linkedin"></span>
                    </a>
                </li>
                <li class="">
                    <a href="https://www.instagram.com/the.frontend.guy/" class="footer-link" title="My Instagram">
                        <span class="fab fa-instagram"></span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="w-full text-center py-1">
            <small class="text-xs text-gray-500">If you like what you see, it would help if you marked it star on github.</small>
        </div>
    </footer>
</template>

<script>
import Octicon, { Octicons } from 'octicons-vue'

export default {
  components: {
    Octicon
  },
  data(){
      return{
          octicons: Octicons
      }
  }
}
</script>

<style lang="scss" scoped>
    .btn-github-star{
        padding: 4px 8px;
    }
    .footer-link{
        font-size: 1.5rem;
    }
</style>