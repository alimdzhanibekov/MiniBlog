import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import PostPage from "@/pages/PostPage";
import About from '@/pages/About'
import NotFound from "@/pages/NotFound";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/blog',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {   path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)

})

export default router;