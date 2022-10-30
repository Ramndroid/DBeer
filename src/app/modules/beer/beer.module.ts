import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';
import { BeerRoutingModule } from './beer-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { LayoutModule } from '../../layout/layout.module';
import { BeerCardComponent } from './components/beer-card/beer-card.component';
import { ImagePipe } from './pipes/image.pipe';
import { BeerDialogComponent } from './components/beer-dialog/beer-dialog.component';
import { DetailsComponent } from './components/beer-dialog/details/details.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    BeerCardComponent,
    ImagePipe,
    BeerDialogComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    BeerRoutingModule,
    LayoutModule
  ]
})
export class BeerModule { }
