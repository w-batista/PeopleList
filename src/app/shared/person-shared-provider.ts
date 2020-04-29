import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PersonSharedProvider {
    private selectedPerson:BehaviorSubject<any> = new BehaviorSubject<any>(null);

    public getSelectedPerson() {
        return this.selectedPerson.asObservable();
    }

    public personEmitter(value) {
      this.selectedPerson.next(value);
    }

}
