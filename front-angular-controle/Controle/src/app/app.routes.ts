import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SorveteListComponent } from './sorvete-list/sorvete-list.component';
import { CreateSorveteComponent } from './sorvete-create/sorvete-create.component';
import { UpdateSorveteComponent } from './sorvete-update/sorvete-update.component';
import { SorveteDetailsComponent } from './sorvete-details/sorvete-details.component';

import { FornecedoresListComponent } from './fornecedor-list/fornecedor-list.component';
import { CreateFornecedorComponent } from './fornecedor-create/fornecedor-create.component';
import { UpdateFornecedorComponent } from './fornecedor-update/fornecedor-update.component';
import { FornecedorDetailsComponent } from './fornecedor-details/fornecedor-details.component';
export const routes: Routes = [
    {path: 'sorvetes', component: SorveteListComponent},
    {path: 'create-sorvete', component: CreateSorveteComponent},
    {path: '', redirectTo: 'sorvetes', pathMatch: 'full'},
    {path: 'sorvete-update/:id', component: UpdateSorveteComponent},
    {path: 'sorvete-details/:id', component: SorveteDetailsComponent},
    
    {path: 'fornecedores', component: FornecedoresListComponent},
    {path: 'create-fornecedor', component: CreateFornecedorComponent},
    {path: '', redirectTo: 'fornecedores', pathMatch: 'full'},
    {path: 'update-fornecedor/:id', component: UpdateFornecedorComponent},
    {path: 'fornecedor-details/:id', component: FornecedorDetailsComponent} 
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  