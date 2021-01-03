<template>
    <nav class="fixed z-10 w-full">
        <div class="container mx-auto px-4 py-3 text-sm sm:text-lg flex justify-between items-center">
            <router-link to="/" class="">fe_TopRepos</router-link>
            <div class="">
                <a href="https://github.com/Root-0/Git_Stars" target="_blank" rel="noopener" class="mr-3 md:mr-4" title="Github Repository">
                    <span class="fa fa-code-branch"></span> Fork
                </a>
                <a href="javascript:void(0);" @click="darkmode=!darkmode" title="toggle theme">
                    <span :class="!darkmode ? 'fa fa-moon': 'fa fa-sun'"></span>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            darkmode: false
        }
    },
    watch: {
        darkmode: function() {
        // Emit this information to the parents component
        this.$emit("toggle_theme", this.darkmode);
        console.log("emitting- ", this.darkmode);
        }
    }
}
</script>

<style lang="scss" scoped>
    nav{
        text-align: left;
    }
</style>