import Vue from 'vue'
import Router from 'vue-router'

import FeedList from '@/components/FeedList'
import FeedDetail from '@/components/FeedDetail'

Vue.use(Router)

export default new Router({
    mode : 'history',
    routes : [
        {
            path: "/",
            name: "FeedList",
            component: FeedList
        },
        {
            path: "/post/${item.id}",
            name: "FeedDetail",
            component: FeedDetail,
            props: true
        }
    ]
})