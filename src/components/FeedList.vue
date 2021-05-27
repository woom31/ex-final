<template>
    <div>
        <h1>USER LIST</h1>
        <ul>
            <li v-for="(item, idx) in items" :key="idx" :item="item">
                <router-link to="/user/">
                    <!-- <Feed /> -->
                    USER {{ idx + 1 }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
// import Feed from '@/components/Feed.vue'

export default {
    name: "FeedList",
    // components: {
    //     Feed
    // },
    props: {
        msg: String
    },
    data(){
        return {
            items: []
        }
    },
    mounted(){
        axios.get('https://dummyapi.io/data/api/user?limit=10', {
            'headers' : {
                "app-id" : '609d61a3cfa64e21a68b8e5c'
            }
        }).then((res) => {
            this.items = res.data.data;
            console.log( this.items );
        })
    }
}
</script>

<style scoped>

</style>