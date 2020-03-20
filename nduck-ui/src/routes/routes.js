import React, { lazy } from 'react'
// const Login = lazy(() => import('../components/login/Login'));
const Dashboard = lazy(() => import('../components/dashboard/Dashboard'))
const BlindBoard = lazy(() => import('../components/blindBoard/BlindBoard'))
const Explain = lazy(() => import('../components/explain/Explain'))
const NduckRule = lazy(() => import('../components/rule/NduckRule'))
const routes = [
    {
        path: '/Dashboard',
        component: Dashboard,
        isMenu: true,
        icon: 'DesktopOutlined',
        title: 'title.main.dashboard',
    },
    {
        path: '/Explain',
        component: Explain,
        isMenu: true,
        icon: 'MenuUnfoldOutlined',
        title: 'title.main.explain',
    },
    {
        path: '/NduckRule',
        component: NduckRule,
        isMenu: true,
        icon: 'DesktopOutlined',
        title: 'title.main.nrule',
    },
    {
        path: '/BlindBoard',
        component: BlindBoard,
        isMenu: true,
        icon: 'MenuUnfoldOutlined',
        title: 'BlindBoard',
    },
    // {
    //     path: '/Login',
    //     component: Login,
    //     isMenu: true,
    //     icon: 'MenuUnfoldOutlined',
    //     title: 'Login',
    // },
]

export default routes
