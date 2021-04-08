import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BackendHeaderComponent } from './backend-header/backend-header.component';
import { BackendFooterComponent } from './backend-footer/backend-footer.component';
import { SideNaveComponent } from './side-nave/side-nave.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BackendHeaderComponent, 
    BackendFooterComponent, SideNaveComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    BackendHeaderComponent,
    BackendFooterComponent,SideNaveComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedRoutingModule
  ],
})
export class SharedModule { }
