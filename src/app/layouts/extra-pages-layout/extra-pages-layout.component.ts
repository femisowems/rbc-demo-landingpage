import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Footer2Component } from '../../components/footer2/footer2.component'
import { ContactFormComponent } from '../../components/contact-form/contact-form.component'

@Component({
  selector: 'app-extra-pages-layout',
  standalone: true,
  imports: [RouterModule, Footer2Component, ContactFormComponent],
  templateUrl: './extra-pages-layout.component.html',
  styles: ``,
})
export class ExtraPagesLayoutComponent {}
