<template>
    <div class="friendList">
        <h2>Friend Recommends</h2>
        <Friend v-for="(item, idx) in items" :key="idx" :item="item" />
        <router-link to="" class="moreFriends">more friends...</router-link>
    </div>
</template>

<script>
import axios from 'axios'
import Friend from '@/components/Friend.vue'

export default {
    name: "FriendList",
    components: {
        Friend
    },
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
        }).then(response => {
            this.items = response.data.data;

            console.log( this.items );
        })
    }
}
</script>

<style scoped>
.friendList {
    display: block;
    width: 280px;
    height: 820px;
    margin: 40px 0px 0px 0px;
    padding: 16px 30px;
    box-shadow: 0 0 10px #bbb;
    border-radius: 30px;
    overflow: hidden;
    position: relative;
}
h2 {
    margin-top: 12px;
}
.moreFriends {
    color: #000;
    text-decoration: none;
    position: absolute;
    bottom: 20px;
}
</style>