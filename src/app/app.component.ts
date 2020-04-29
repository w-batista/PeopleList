import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { People } from './people';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PeopleList';
  people: People[] = [];

  constructor(private servicePeople: PeopleService, private snackBar: MatSnackBar) {
    this.people = servicePeople.getPeople();
  }
  onAddPerson(person: People) {
    // this.people.push(person);
    let exist = false;
    for (let i = 0; i < this.people.length; i++) {
      let p = this.people[i];
      if (p.cpf === person.cpf) {
        this.snackBar.open("Deseja alterar esse cadastro?", "Alterar", {duration: 3500}).onAction()
          .subscribe(() => {
            this.people.splice(i, 1, person);
            console.log(this.people);

          });
          exist = true;
        }
    }
    if(!exist) {
      this.people.push(person);
    }
  }


}
