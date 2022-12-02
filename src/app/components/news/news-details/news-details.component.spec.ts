import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AppService } from 'src/app/shared/services/App/app.service';

import { NewsDetailsComponent } from './news-details.component';

describe('NewsDetailsComponent', () => {
  let component: NewsDetailsComponent;
  let fixture: ComponentFixture<NewsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDetailsComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot({}),
      ],
      providers: [
        AppService,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
