import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
        {
            path: "",
            name: "home",
            component: () => import("../layout/MainLayout.vue"),
            children: [
                {
                    path: "",
                    component: () => import("../components/ExampleComponent.vue"),
                },
            ],
        },
        {
           path: '/:catchAll(.*)*',
           name: 'NotFound',
           component: () => import("../page/NotFound.vue"),
        },
    ]