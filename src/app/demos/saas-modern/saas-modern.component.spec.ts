import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SaasModernComponent } from './saas-modern.component'

describe('SaasModernComponent', () => {
  let component: SaasModernComponent
  let fixture: ComponentFixture<SaasModernComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasModernComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SaasModernComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
