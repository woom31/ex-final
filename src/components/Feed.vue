<template>
    <div class="feedWrapper">
        <div class="profileBox">
            <img :src="item.owner.picture" class="profileImg" alt="Profile image">
            <div class="profileText">
                <!-- 프로필 이름을 누르면 해당 유저의 프로필로 이동하는 방법은?-->
                <router-link :to="`/post/${item.owner.id}`" class="profileName">
                    <span class="firstName">{{ item.owner.firstName }} </span>
                    <span class="lastName">{{ item.owner.lastName }}</span>
                </router-link>
                <div class="postTime">{{ item.publishDate }}</div>
            </div>
        </div>
        <div class="postBox">
            <div class="postText">{{ item.text }}</div>
            <img :src="item.image" class="postImg" alt="Feed image">
        </div>
        <div class="likeBox">
            <button class="likeBtn" v-on:click="like">
                <img class="likeBtnImg" src="../assets/favorite_red.png" alt="like button">
            </button>
            <span class="likeNum">{{ item.likes }}</span>
        </div>
        <div class="tagBox">
            <span class="tagTitle">Tag</span>
            <span class="tag">{{ item.tags[0] }}</span>
            <span class="tag">{{ item.tags[1] }}</span>
            <span class="tag">{{ item.tags[2] }}</span>
            <!-- 태그가 전부 3개만 있어서 이렇게 출력하지만 데이터의 Array 요소에 접근하는 방법은? -->
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
            likeVal: false,
        }
    },
    methods : {
        like() {
            if(!this.likeVal) {
                this.likeVal = true;
                alert("like this feed");
                this.item.likes += 1;
            } else {
                this.likeVal = false;
                alert("dislike this feed");
                this.item.likes -= 1;
            }

        }
    }
}
</script>

<style scoped>
.feedWrapper {
    display: block;
    width: 560px;
    background-color: #ffffff;
    /* border: 1px solid #000000; */
    padding: 20px 20px 70px 20px;
    margin: 0 0 24px 0;
    border-radius: 30px;
    box-shadow: 0 0 10px #bbb;
}
.profileBox {
    display: flex;
    width: 560px;
    height: 60px;
    flex-wrap: wrap;
    margin-bottom: 8px;
}
.profileImg {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 30px;
}
.profileText {
    display: flex;
    width: 480px;
    height: 60px;
    margin-left: 20px;
    flex-direction: column;
}
.profileName {
    display: block;
    width: 480px;
    height: 36px;
    font-size: 20px;
    line-height: 36px;
    text-decoration: none;
    color: #000000;
}
.postTime {
    display: block;
    width: 480px;
    height: 24px;
    font-size: 14px;
    line-height: 12px;
    color: #aaa;
}
.postBox {
    display: block;
    width: 560px;
}
.postText {
    display: block;
    width: 100%;
    font-size: 20px;
    padding: 12px 0;
    color: #000000;
}
.postImg {
    display: block;
    width: 100%;
    border-radius: 20px;
}
.likeBox {
    display: block;
    height: 36px;
    padding: 16px 0 0 8px;
    float: left;
}
.likeBtn {
    display: block;
    width: 36px;
    height: 36px;
    border: none;
    background-color: transparent;
    float: left;
}
.likeBtnImg {
    display: block;
    width: 36px;
    height: 36px;
}
.likeNum {
    display: block;
    height: 36px;
    line-height: 36px;
    font-size: 24px;
    margin-left: 12px;
    float: left;
    font-weight: 600;
}

.tagBox {
    display: block;
    padding: 22px 8px 0 0;
    font-size: 16px; 
    height: 24px;
    line-height: 24px;
    color: #000000;
    text-align: right;
    float: right;
}
.tagTitle {
    margin-right: 8px;
}
.tag {
    display: inline-block;
    height: 24px;
    padding: 0 8px;
    border: 1px solid #000;
    margin-right: 6px;
    font-size: 12px;
}

</style>