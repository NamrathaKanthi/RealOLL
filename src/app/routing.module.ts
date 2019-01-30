import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { PersonalInfoComponent } from "./components/PersonalInformation/personal-info.component";
import { AddemployerComponent } from "./components/Employee/addemployer.component";
import { TenantappComponent } from "./components/TenantApplication/tenantapp.component";
import { AddanimalComponent } from "./components/Animal/addanimal.component";
import { AddvehiclesComponent } from "./components/Vehicles/addvehicles.component";
import { BackgroundInfoComponent } from "./components/Backgroundinformation/background-info.component";
import { TermsandconditionsComponent } from "./components/TermsAndConditions/termsandconditions.component";
import { PaymentComponent } from './components/Payment/payment.component';
import { PaymentsucessfulComponent } from "./components/PaymentSucessful/paymentsucessful.component";
import { DocusignComponent } from './components/DocumentSign/docusign.component';
import { SubmittedappsComponent } from './components/SubmittedApplications/submittedapps.component';
import { LoginComponent } from './components/Login/login.component';
import { RegistrationFormComponent } from "./components/RegistrationForm/registration-form.component";

const routes: Routes = [
  { path: '', redirectTo: 'tenant', pathMatch: 'full' },
  { path: 'tenant', component: TenantappComponent },
  {
    path: 'personal', component: PersonalInfoComponent,
    children: [
      { path: 'employer', component: AddemployerComponent },
      { path: 'animal', component: AddanimalComponent },
      { path: 'vehicle', component: AddvehiclesComponent },
      { path: 'background-info', component: BackgroundInfoComponent },
    ]
  },
  { path: 'termsandconditions', component: TermsandconditionsComponent },
  { path: 'docusign', component: DocusignComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'paymentSuccess', component: PaymentsucessfulComponent },
  { path: 'submittedApps', component: SubmittedappsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrationform', component: RegistrationFormComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
