import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TemperaturePipe } from './temperature.pipe';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { EmployeeDeatilsComponent } from './employee-component/employee-deatils/employee-deatils.component';
import { ContentTemplateConatinerComponent } from './employee-component/content-template-conatiner/content-template-conatiner.component';
import { AuthorizeComponentComponent } from './authorize-component/authorize-component.component';
import { TemperatureConversionComponent } from './temperature-conversion/temperature-conversion.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { CheckServicesComponent } from './check-services/check-services.component';
import { MathematicalOperationService } from './mathematical-operation.service';
import { ServiceInjectorHierarchyComponent } from './check-services/service-injector-hierarchy/service-injector-hierarchy.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeeComponentComponent,
    EmployeeDeatilsComponent,
    ContentTemplateConatinerComponent,
    AuthorizeComponentComponent,
    TemperatureConversionComponent,
    TemperaturePipe,
    SearchFilterPipe,
    CheckServicesComponent,
    ServiceInjectorHierarchyComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
