<template>
    <li>
        {{ item.firstName }}
        <router-link to="/user/">
            More View
        </router-link>
    </li>
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