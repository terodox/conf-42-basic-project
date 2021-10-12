import { Router } from '@vaadin/router';
import './simpler-route-one.mjs';
import './simpler-route-two.mjs';
import './not-found-route.mjs';

const outlet = document.getElementById('outlet');
console.log(outlet);
console.log(Router);
const router = new Router(outlet);
router.setRoutes([
    { path: '/', component: 'simple-route-one' },
    { path: '/one', component: 'simple-route-one' },
    { path: '/two', component: 'simple-route-two' },
    { path: '(.*)', component: 'not-found-route' },
]);