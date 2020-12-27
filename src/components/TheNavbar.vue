<template>
    <nav class="">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="#" class="">js.TopRepos</a>
            <a href="javascript:void(0);" @click="darkmode=!darkmode" class="">Dark Mode</a>
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