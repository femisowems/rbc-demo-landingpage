import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ComingSoon5Component } from './coming-soon-5.component'

describe('ComingSoon5Component', () => {
  let component: ComingSoon5Component
  let fixture: ComponentFixture<ComingSoon5Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComingSoon5Component],
    }).compileComponents()

    fixture = TestBed.createComponent(ComingSoon5Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
