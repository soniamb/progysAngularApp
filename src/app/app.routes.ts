import {HomeComponent} from "./pages/home/home.component";
import {AjoutActionModule} from './pages/ajout-action/ajout-action.module';

export const appRoutes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'others',
        loadChildren:'./pages/others/others.module#OthersModule',
    },
    {
        path: 'ajout-action',
        loadChildren:'./pages/ajout-action/ajout-action.module#AjoutActionModule',
    },
];
