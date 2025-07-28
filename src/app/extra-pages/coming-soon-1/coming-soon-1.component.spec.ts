import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ComingSoon1Component } from './coming-soon-1.component'

describe('ComingSoon1Component', () => {
  let component: ComingSoon1Component
  let fixture: ComponentFixture<ComingSoon1Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComingSoon1Component],
    }).compileComponents()

    fixture = TestBed.createComponent(ComingSoon1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
