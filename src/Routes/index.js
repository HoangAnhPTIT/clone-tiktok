//Layouts
import { HeaderOnly } from '../components/Layout';

//Components
import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layOut: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
