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
                name: 'discover',
                component: () => import('@/views/discover/Discover.vue'),
                meta: {
                    menu: 'discover'
                }
            },
            {
                path: 'music',
                name: 'music',
                component: () => import('@/views/music/Music.vue'),
                redirect: '/music/picked',
                meta: {
                    menu: 'music'
                },
                children: [
                    {
                        path: 'picked',
                        component: () => import('@/views/music/picked/picked.vue')
                    },
                    {
                        path: 'dt',
                        component: () => import('@/views/music/dt.vue')
                    },
                    {
                        path: 'toplist',
                        component: () => import('@/views/music/toplist.vue')
                    },
                    {
                        path: 'artist',
                        component: () => import('@/views/music/artist.vue')
                    },
                    {
                        path: 'category',
                        component: () => import('@/views/music/category.vue')
                    },
                    {
                        path: 'zj',
                        component: () => import('@/views/music/zj.vue')
                    }
                ]
            },
            {
                path: 'video',
                name: 'video',
                meta: {
                    menu: 'video'
                },
                component: () => import('@/views/video/Video.vue')
            },
            {
                path: 'dj',
                name: 'dj',
                meta: {
                    menu: 'dj'
                },
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