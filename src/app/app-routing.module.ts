
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeadbarComponent } from './headbar/headbar.component'
import { IndexComponent } from './index/index.component'
import { FootbarComponent } from './footbar/footbar.component'


const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/base/base.module#BaseModule',
        data: { preload: true }
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }