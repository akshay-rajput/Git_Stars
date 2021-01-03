<template>
    <footer>
        <div class="container mx-auto px-4 pt-4 text-center">
            <div class="dev-links my-4 text-center">
                <small class="text-xs text-gray-500">Reach out</small>
                <ul class="flex items-baseline justify-center">
                    <li class="">
                        <a href="https://github.com/root-0" class="footer-link" target="_blank" rel="noopener" title="My Github Profile">
                            <span class="fab fa-github"></span>
                        </a>
                    </li>
                    <li class="mx-6">
                        <a href="https://www.linkedin.com/in/akshay-rajput/" target="_blank" rel="noopener" class="footer-link" title="My LinkedIn Profile">
                            <span class="fab fa-linkedin"></span>
                        </a>
                    </li>
                    <li class="mr-6">
                        <a href="https://www.instagram.com/the.frontend.guy/" target="_blank" rel="noopener" class="footer-link" title="My Instagram">
                            <span class="fab fa-instagram"></span>
                        </a>
                    </li>
                    <li class="">
                        <a href="https://akshayr.netlify.app" target="_blank" rel="noopener" class="footer-link" title="My Website">
                            <span class="fa fa-user-ninja"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="w-full text-center py-1">
                <small class="text-xs text-gray-500">If you like what you see, it would help if you marked it star or fork it on github.</small>
            </div>

        </div>
        
    </footer>
</template>

<script>
// import Octicon, { Octicons } from 'octicons-vue'
// <a class="btn-app btn-github-star" href="https://github.com/root-0/Git_Stars" target="_blank" rel="noopener" aria-label="Star root-0/Git_Stars on GitHub">
//     <octicon :icon="octicons.repoForked" :scale="1" className="" ></octicon> 
//     <small class="pl-1">Github</small>
// </a>
// components: {
//     Octicon
//   },
//   data(){
//       return{
//           octicons: Octicons
//       }
//   }
export default {
  
  
}
</script>

<style lang="scss" scoped>
    .footer-link{
        font-size: 1.5rem;
    }
</style>