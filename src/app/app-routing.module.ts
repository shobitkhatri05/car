import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsandreviewsComponent } from './newsandreviews/newsandreviews.component';
import { BmwComponent } from './bmw/bmw.component';
import { DatsunComponent } from './datsun/datsun.component';
import { TataComponent } from './tata/tata.component';
import { SkodaComponent } from './skoda/skoda.component';
import { FAQSComponent } from './faqs/faqs.component';
import { TeslaComponent } from './tesla/tesla.component';
import { KiaComponent } from './kia/kia.component';
import { AlftozComponent } from './alftoz/alftoz.component';
import { RioComponent } from './rio/rio.component';
import { AltoComponent } from './alto/alto.component';
import { SwiftComponent } from './swift/swift.component';
import { WagonComponent } from './wagon/wagon.component';
import { BalenoComponent } from './baleno/baleno.component';
import { Form1Component } from './form1/form1.component';

const routes: Routes =[
  {path: '', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'newsandreviews',component:NewsandreviewsComponent},
  {path:'bmw',component:BmwComponent},
  {path:'datsun',component:DatsunComponent},
  {path:'tata',component:TataComponent},
  {path:'skoda',component:SkodaComponent},
  {path:'FAQS',component:FAQSComponent},
  {path:'tesla',component:TeslaComponent},
  {path:'kia',component:KiaComponent},
  {path:'alftoz',component:AlftozComponent},
  {path:'rio',component:RioComponent},
  {path:'alto',component:AltoComponent},
  {path:'swift',component:SwiftComponent},
  {path:'wagon',component:WagonComponent},
  {path:'baleno',component:BalenoComponent},
  {path:'form1',component:Form1Component},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
