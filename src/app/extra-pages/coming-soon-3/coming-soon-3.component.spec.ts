import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ComingSoon3Component } from './coming-soon-3.component'

describe('ComingSoon3Component', () => {
  let component: ComingSoon3Component
  let fixture: ComponentFixture<ComingSoon3Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComingSoon3Component],
    }).compileComponents()

    fixture = TestBed.createComponent(ComingSoon3Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
