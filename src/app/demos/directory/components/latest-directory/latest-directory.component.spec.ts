import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LatestDirectoryComponent } from './latest-directory.component'

describe('LatestDirectoryComponent', () => {
  let component: LatestDirectoryComponent
  let fixture: ComponentFixture<LatestDirectoryComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestDirectoryComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(LatestDirectoryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
