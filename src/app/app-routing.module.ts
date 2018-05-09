import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FirstComponent} from './app.firstcomponent';
import { secondcomp} from './app.secondcomponent';

const routes : Routes = [  
    {path: 'first', component: FirstComponent},
    {path: 'second', component: secondcomp}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingmodule {}