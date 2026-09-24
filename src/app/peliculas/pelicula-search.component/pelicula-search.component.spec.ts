import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeliculaSearchComponent } from './pelicula-search.component';

describe('PeliculaSearchComponent', () => {
  let component: PeliculaSearchComponent;
  let fixture: ComponentFixture<PeliculaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculaSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PeliculaSearchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
