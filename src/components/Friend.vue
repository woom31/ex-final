<template>
    <div class="friendWrapper">
        <img :src="item.picture" class="friendImg" alt="friend image">
        <div class="friendText">
            <div class="friendName">
                {{ item.firstName }}
                {{ item.lastName }}
            </div>
            <div class="friendMail">
                {{ item.email }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Friend',
    props: {
        item: Object
    },
    data() {
        return{
           
        }
    },
    methods : {
        
    }
}
</script>

<style scoped>
.friendWrapper {
    display: flex;
    width: 280px;
    height: 60px;
    margin: 12px 0;
}
.friendImg {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 40px;
}
.friendText {
    display: flex;
    width: 212px;
    flex-direction: column;
    margin-left: 8px;
}
.friendName {
    font-size: 18px;
    font-weight: 700;
    padding-top: 6px;
}
.friendMail {
    font-size: 12px;
    color: #aaa;
    padding-top: 2px;
}
</style>