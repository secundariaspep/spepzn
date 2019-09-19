import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";
// Driven Form
import { FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";

// ng-crud-table
import { CrudTableModule } from '../lib/ng-crud-table';
import { DataTableModule } from '../lib/ng-data-table';
import { TreeTableModule } from '../lib/ng-tree-table';
import { DtToolbarModule } from '../lib/dt-toolbar';
import { ModalModule } from '../lib//modal';
import { ModalEditFormModule } from '../lib/modal-edit-form';
import { TreeViewModule } from '../lib/tree-view';
import { ContextMenuModule } from '../lib/context-menu';
import { NotifyModule } from '../lib/notify';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DropdownSelectModule } from '../lib/dropdown-select';
import { SelectListModule } from '../lib/select-list';

// App
import { ListSocioeducComponent } from './components/socioeduc/list-socioeduc/list-socioeduc.component';
import { ModalSocioeducComponent } from './components/socioeduc/modal-socioeduc/modal-socioeduc.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ModalUpdateSocioeducComponent } from './components/socioeduc/modal-update-socioeduc/modal-update-socioeduc.component';
import { ListaComponent } from './components/socioeduc/lista/lista.component';




@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ListSocioeducComponent,
    ModalSocioeducComponent,
    TopnavComponent,
    SidenavComponent,
    ModalUpdateSocioeducComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    CrudTableModule,
    DataTableModule,
    TreeTableModule,
    DtToolbarModule,
    ModalModule,
    ModalEditFormModule,
    TreeViewModule,
    ContextMenuModule,
    NotifyModule,
    DropdownSelectModule,
    SelectListModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }