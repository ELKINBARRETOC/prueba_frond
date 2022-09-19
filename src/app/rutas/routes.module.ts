import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../componentes/paginas/about/about.component";
import { BlogComponent } from "../componentes/paginas/blog/blog.component";
import { FranchiseComponent } from "../componentes/paginas/franchise/franchise.component";
import { HomeComponent } from "../componentes/paginas/home/home.component";
import { LocationComponent } from "../componentes/paginas/location/location.component";

import { LoginComponent } from "../componentes/paginas/login/login.component";
import { NofoundComponent } from "../componentes/paginas/nofound/nofound.component";
import { ServicesComponent } from "../componentes/paginas/services/services.component";

const APP_ROUTES: Routes = [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
      children:[
        {
          path:'',
          component: ServicesComponent
        },
        {
          path:'location',
          component: LocationComponent
        },
        {
          path:'blog',
          component: BlogComponent
        },
        {
          path:'services',
          component: ServicesComponent
        },
        {
          path:'about',
          component: AboutComponent
        },
        {
          path:'franchise',
          component: FranchiseComponent
        },
        {
          path:'nofound',
          component: NofoundComponent
        },
        { path: '**', pathMatch: 'full', redirectTo: 'nofound' }
      ]
    },
    
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
  ];
  
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);