import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofmessagesComponent } from './listofmessages.component';

describe('ListofmessagesComponent', () => {
  let component: ListofmessagesComponent;
  let fixture: ComponentFixture<ListofmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofmessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
