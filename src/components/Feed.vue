<template>
    <div class="feedWrapper">
        <router-link :to="`/post/${item.owner.id}`" class="feed-wrapper">
            <div class="profile">
                <p>{{ item.owner.id }}</p>
                <img :src="item.owner.picture">
                <div class="name">
                    <span class="firstName">{{ item.owner.firstName }} </span>
                    <span class="lastName">{{ item.owner.lastName }}</span>
                </div>
                <div class="postTime">{{ item.publishDate }}</div>
            </div>
        </router-link>
        <div class="post">
            <img :src="item.image">
            <div class="postText">{{ item.text }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Feed',
    props: {
        item: Object
    },
    data() {
        return{

        }
    }
}
</script>

<style scoped>

</style>