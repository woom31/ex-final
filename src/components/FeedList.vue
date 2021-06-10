<template>
    <div class="feedList">
        <Feed v-for="(item, idx) in items" :key="idx" :item="item" />
    </div>
</template>

<script>
import axios from 'axios'
import Feed from '@/components/Feed.vue'

export default {
    name: "FeedList",
    components: {
        Feed
    },
    props: {
        msg: String
    },
    data(){
        return {
            items: []
            // users: []
        }
    },
    mounted(){
        axios.get('https://dummyapi.io/data/api/post?limit=10', {
            'headers' : {
                "app-id" : '609d61a3cfa64e21a68b8e5c'
            }
        }).then(res => {
            this.items = res.data.data;

            console.log( this.items );
        })
        // axios.get('https://dummyapi.io/data/api/user?limit=10', {
        //     'headers' : {
        //         "app-id" : '609d61a3cfa64e21a68b8e5c'
        //     }
        // }).then(response => {
        //     this.users = response.data.data;

        //     console.log( this.users );
        // })
    }
}
</script>

<style scoped>
.feedList {
    display: block;
    width: 600px;
    margin: 40px 30px 80px 310px;
}
</style>