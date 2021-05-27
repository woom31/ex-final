<template>
    <div>
        <div class="btn-back">
            <router-link to="/" tag="button">Back</router-link>
        </div>
        Feed Detail Page with {{id}}
    </div>
</template>

<script>

export default {
    name: 'FeedDetail',
    props: {
        id: String
    },
    data(){
        return {
            
        }
    },
    mounted(){
        
    }
}

</script>

<style scoped>

</style>