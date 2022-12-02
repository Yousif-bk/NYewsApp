import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from 'src/app/shared/services/App/app.service';

import { ArticleSearchComponent } from './article-search.component';

describe('ArticleSearchComponent', () => {
  let component: ArticleSearchComponent;
  let fixture: ComponentFixture<ArticleSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleSearchComponent],
      imports: [ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [AppService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ArticleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
