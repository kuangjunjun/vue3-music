import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Root.vue'),
        redirect: '/discover',
        children: [
            {
                path: 'discover',
                component: () => import('@/views/discover/Discover.vue')
            },
            {
                path: 'music',
                component: () => import('@/views/music/Music.vue')
            },
            {
                path: 'video',
                component: () => import('@/views/video/Video.vue')
            },
            {
                path: 'dj',
                component: () => import('@/views/dj/Dj.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router