import { Component } from '@angular/core'
import { currentYear } from '@common/constants'

@Component({
  selector: 'app-footer2',
  standalone: true,
  imports: [],
  templateUrl: './footer2.component.html',
  styles: ``,
})
export class Footer2Component {
  currentYear = currentYear
}
