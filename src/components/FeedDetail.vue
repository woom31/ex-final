<template>
    <div>
        <div class="btn-back">
            <router-link to="/" tag="button">Back</router-link>
        </div>
        <!-- Feed Detail Page with {{id}} -->
        <!-- FeedList에서 해당 유저를 클릭하면 이동할 수 있는 방법은 없을까 -->
    </div>
</template>

<script>


export default {
    name: 'FeedDetail',
    props: {
        // id: String
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