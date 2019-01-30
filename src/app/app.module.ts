import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

//common components
import { CardsComponent } from './common/cards/cards.component';
import { TenantHeaderComponent } from './common/TenantHeader/tenant-header.component';
import { FormfieldsComponent } from './common/FormFields/formfields.component';
import { PropertywarefooterComponent } from './common/PropertywareFooter/propertywarefooter.component';
import { DynamictableComponent } from './common/DynamicTable/dynamictable.component';
import { TabsComponent } from './common/Tabs/tabs.component';

//components
import { HeaderComponent } from './components/ApplicationHeader/header.component';
import { FooterComponent } from './components/Footer/footer.component';
import { TenantappComponent } from './components/TenantApplication/tenantapp.component';
import { PersonalInfoComponent } from './components/PersonalInformation/personal-info.component';
import { AddapplicantComponent } from './components/AddApplicant/addapplicant.component';
import { AddemployerComponent } from './components/Employee/addemployer.component';
import { AddanimalComponent } from './components/Animal/addanimal.component';
import { AddvehiclesComponent } from './components/Vehicles/addvehicles.component';
import { BackgroundInfoComponent } from "./components/Backgroundinformation/background-info.component";
import { TermsandconditionsComponent } from "./components/TermsAndConditions/termsandconditions.component";
import { PaymentComponent } from './components/Payment/payment.component';
import { PaymentsucessfulComponent } from './components/PaymentSucessful/paymentsucessful.component';
import { DocusignComponent } from './components/DocumentSign/docusign.component';
import { SubmittedappsComponent } from './components/SubmittedApplications/submittedapps.component';
import { LoginComponent } from './components/Login/login.component';
import { RegistrationFormComponent } from './components/RegistrationForm/registration-form.component';

// modules
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TenantappComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    PersonalInfoComponent,
    TenantHeaderComponent,
    FormfieldsComponent,
    PropertywarefooterComponent,
    AddapplicantComponent,
    AddemployerComponent,
    DynamictableComponent,
    AddanimalComponent,
    AddvehiclesComponent,
    BackgroundInfoComponent,
    TermsandconditionsComponent,
    PaymentComponent,
    PaymentsucessfulComponent,
    TabsComponent,
    DocusignComponent,
    SubmittedappsComponent,
    LoginComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
