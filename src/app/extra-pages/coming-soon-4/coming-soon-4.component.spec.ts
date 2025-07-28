import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ComingSoon4Component } from './coming-soon-4.component'

describe('ComingSoon4Component', () => {
  let component: ComingSoon4Component
  let fixture: ComponentFixture<ComingSoon4Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComingSoon4Component],
    }).compileComponents()

    fixture = TestBed.createComponent(ComingSoon4Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
