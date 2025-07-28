import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AuthSwiperComponent } from './auth-swiper.component'

describe('AuthSwiperComponent', () => {
  let component: AuthSwiperComponent
  let fixture: ComponentFixture<AuthSwiperComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSwiperComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AuthSwiperComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
