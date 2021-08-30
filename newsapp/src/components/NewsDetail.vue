<template>
  
</template>

<script>
export default {
    data(){
        return{
            news: {
                title: '',
                content: ''
            }
        }
    },
    moumted(){
        this.fetchNews(this.$route.params.id);
    },
    watch: {
        "$router.params.id": {
            handler(){
                this.fetchNews(this.$route.params.id);
            },
            imediate:true
        }
    },
}
</script>

<style>

</style>