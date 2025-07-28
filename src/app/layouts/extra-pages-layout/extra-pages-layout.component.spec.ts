import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ExtraPagesLayoutComponent } from './extra-pages-layout.component'

describe('ExtraPagesLayoutComponent', () => {
  let component: ExtraPagesLayoutComponent
  let fixture: ComponentFixture<ExtraPagesLayoutComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraPagesLayoutComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ExtraPagesLayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
