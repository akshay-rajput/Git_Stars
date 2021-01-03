<template>
  <button @click="backToTop" class="btn-backToTop hidden">
      <span class="hint--left" aria-label="Scroll to top">
        <span class="fa fa-angle-double-up"></span>
      </span>
  </button>
</template>

<script>
export default {
    methods: {
        backToTop(){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        checkScroll(){
            // When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = function() {scrollFunction()};
            var btnToTop = document.querySelector('.btn-backToTop');
            function scrollFunction() {
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
                    btnToTop.style.display = "block";
                } else {
                    btnToTop.style.display = "none";
                }
            }
        }
    },
    mounted() {
        this.checkScroll();
    },
}
</script>

<style>

</style>