import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { People } from '../people';
import { PeopleService } from '../people.service';
import { PersonSharedProvider } from '../shared/person-shared-provider';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.scss']
})
export class PeopleFormComponent implements OnInit, OnDestroy {
  @Output() addPerson = new EventEmitter<People>();
  @Input() editPerson: People;
  person: People;
  unSubscribe$: Subject<any> = new Subject<any>();
  constructor(private fb: FormBuilder, private servicePeople: PeopleService, private sharedPerson: PersonSharedProvider) { }

  formPeople = this.fb.group({
    nome: ['', [Validators.required]],
    cpf: ['', [Validators.required, Validators.maxLength(11)]],
    rg: ['', [Validators.required, Validators.minLength(9)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required]],
    data_nasc: ['', [Validators.required]]
  });

  onSubmit(e){
    e.preventDefault();
    this.person = this.formPeople.value;
    this.addPerson.emit(this.person);
    this.formPeople.reset();
  }

  ngOnInit(): void {
    this.sharedPerson.getSelectedPerson()
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((p) => {
        if (p) {
          this.formPeople.setValue(p);
        }
      });
  }
  ngOnDestroy(): void {
    this.unSubscribe$.next();
  }

}
