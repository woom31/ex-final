<template>
    <div id="tapMenu">
        <h1 id="menuLogo">LIKESNS</h1>
        <div class="menuList">
            <ul>
                <li>
                    <div class="menuBtn select">Feed</div>
                </li>
                <li>
                    <div class="menuBtn">Notifications</div>
                </li>
                <li>
                    <div class="menuBtn">Social</div>
                </li>
                <li>
                    <div class="menuBtn">Profile</div>
                </li>
            </ul>
        </div>
        <div class="credit">
            Kaywon University of Art &#38; Design<br/>
            Digital Media Project<br/>
            Jeong Woomin
        </div>
    </div>    
</template>

<script>
export default {
    name: "TapMenu",
    props: {
        
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>

#tapMenu {
    display: block;
    width: 240px;
    height: 480px;
    padding: 40px 20px;
    border-radius: 30px;
    box-shadow: 0 0 10px #bbb;
    position: fixed;
    top: 40px;
}
#menuLogo {
    display: block;
    width: 100%;
    font-size: 48px;
    font-weight: 900;
    margin: 0 0 36px 0;
    text-align: center;
}
.menuList {
    display: block;
    width:  100%;
}
.menuList ul {
    display: block;
    padding: 0;
}
.menuList ul li {
    display: block;
    margin-bottom: 20px;
}
.menuBtn {
    display: block;
    height: 36px;
    line-height: 36px;
    font-size: 24px;
    font-weight: 700;
    border-radius: 36px;
    padding: 8px 32px; 
    cursor: pointer;
}
.menuBtn.select {
    color: #fff; 
    background-color: #000;
}
.credit {
    display: block;
    font-size: 12px;
    position: absolute;
    bottom: 24px;
    color: #ccc;
    padding: 0 16px;
}
</style>