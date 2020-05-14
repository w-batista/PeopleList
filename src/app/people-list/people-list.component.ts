import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { PeopleService } from '../people.service';
import { People } from '../people';
import { PersonSharedProvider } from '../shared/person-shared-provider';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  artur: string = 'Soroca';

  cards: any[] = [{card: 'card1', numero: 1, progress: "97%"},{},{}]
  @Input() people: People[] = [];

  constructor(
    private servicePeople: PeopleService,
    private sharedPerson: PersonSharedProvider,
    private snackBar: MatSnackBar
    ) {

  }

  ngOnInit() {
    console.log(this.people);

  }
  onEdit(p: People) {
    this.sharedPerson.personEmitter(p);
  }
  onDelete(person: People) {
    for (let i = 0; i < this.people.length; i++) {
      let p = this.people[i];
      if (p.cpf === person.cpf) {
        this.snackBar.open("Deseja realmente excluir esse cadastro?", "Excluir", { duration: 3500 }).onAction()
        .subscribe(() => {
          this.people.splice(i, 1);
          console.log(this.people);
        });

      }
    }
  }

}
