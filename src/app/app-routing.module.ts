import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ImportAvvocatoComponent } from './page/import/import-avvocato.component';
import { AvvocatoGridComponent } from './page/avvocato-grid/avvocato-grid.component';
import { InviaPecComponent } from './page/invia-pec/invia-pec.component';
import { InviaMailComponent } from './page/invia-mail/invia-mail.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "import-avvocato", component: ImportAvvocatoComponent} ,
  {path: "avvocato-grid", component: AvvocatoGridComponent},
  {path: "invia-pec", component: InviaPecComponent},
  {path: "invia-mail", component: InviaMailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }