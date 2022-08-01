import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
    imports: [
        MatIconModule,
        MatBadgeModule,
    ],
    declarations: [HeaderComponent, FooterComponent, SideBarComponent],
    exports: [HeaderComponent, FooterComponent, SideBarComponent],
})
export class SharedLayoutModule { }
