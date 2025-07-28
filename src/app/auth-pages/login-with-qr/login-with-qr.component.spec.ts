import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginWithQrComponent } from './login-with-qr.component'

describe('LoginWithQrComponent', () => {
  let component: LoginWithQrComponent
  let fixture: ComponentFixture<LoginWithQrComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWithQrComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(LoginWithQrComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
