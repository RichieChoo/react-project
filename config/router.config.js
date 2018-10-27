export default [
    // user
    {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
            {path: '/user', redirect: '/user/login'},
            {path: '/user/login', component: './User/Login'},
            {path: '/user/register', component: './User/Register'},
            {path: '/user/register-result', component: './User/RegisterResult'},
        ],
    },
    // app
    {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        authority: ['admin', 'user'],
        routes: [
            // dashboard
            {path: '/', redirect: '/home'},
            {
                path: '/home',
                name: 'Home',
                icon: 'home',
                component: './Home/Home',
            },
            {
                component: '404',
            },
        ],
    },
];
