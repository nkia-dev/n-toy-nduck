import React, {lazy } from 'react';
const Login = lazy(() => import('../components/login/Login'));
const Dashboard = lazy(() => import('../components/dashboard/Dashboard'));
const routes = [
    {
        path: '/Login',
        component: Login,
        isMenu: true,
        icon: 'MenuUnfoldOutlined',
        title: 'Login',
    },
    {
        path: '/Dashboard',
        component: Dashboard,
        isMenu: true,
        icon: 'DesktopOutlined',
        title: 'Dashboard',
    },
];

export default routes;
