import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EventConferenceComponent } from './event-conference.component'

describe('EventConferenceComponent', () => {
  let component: EventConferenceComponent
  let fixture: ComponentFixture<EventConferenceComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventConferenceComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(EventConferenceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
