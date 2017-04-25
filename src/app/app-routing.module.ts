import { CollectComponent } from './collect/collect.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: 'app/base/base.module#BaseModule',
        data: { preload: true }
    }, {
        path: 'article',
        loadChildren: 'app/article/article.module#ArticleModule',
        data: { preload: false }
    }, {
        path: 'lab',
        loadChildren: 'app/lab/lab.module#LabModule',
        data: { preload: false }
    }, {
        path: 'collect',
        component: CollectComponent
    },{
        path:'**',
        redirectTo: '/home',
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }