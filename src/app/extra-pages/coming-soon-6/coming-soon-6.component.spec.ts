import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ComingSoon6Component } from './coming-soon-6.component'

describe('ComingSoon6Component', () => {
  let component: ComingSoon6Component
  let fixture: ComponentFixture<ComingSoon6Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComingSoon6Component],
    }).compileComponents()

    fixture = TestBed.createComponent(ComingSoon6Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
