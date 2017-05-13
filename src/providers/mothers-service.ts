import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class MothersService {

	private mothers: Array<any>

	constructor() {
		this.mothers = [
			{ id: 1, name: 'Helena Laura Marina Barros', next_visit: 4, start_at: new Date(), level: 1, unit: 'UBS Sta. Marcelina' },
			{ id: 2, name: 'Natália Mariana Betina Souza', next_visit: 8, start_at: new Date(), level: 1, unit: 'UBS Consolação' },
			{ id: 3, name: 'Joana Débora Sarah Lima', next_visit: 1, start_at: new Date(), level: 2, unit: 'UBS Indianópolis' },
			{ id: 4, name: 'Emanuelly Nicole dos Santos', next_visit: 0, start_at: new Date(), level: 1, unit: 'UBS Santo Amaro' },
			{ id: 5, name: 'Melissa Sophia Bárbara Cardoso', next_visit: 10, start_at: new Date(), level: 2, unit: 'UBS Parque Esmeralda' },
		];
	}

	public getMothers() {
		return Observable.create(observer => {
			observer.next(this.mothers);
			observer.complete();
		});
	}

	public getMotherById(id) {
		return Observable.create(observer => {
			for (var i = 0; i < this.mothers.length; i++) {
				if (this.mothers[i].id == id) {
					observer.next(this.mothers[i]);
					observer.complete();
					break;
				}
			}
		});
	}

	/*post(mother: any) {
		this.http.post('https://jmcserver.herokuapp.com/api/v1/mothers', mother)
			.subscribe(m => {
				console.log(m);
				return true;
			}, error => {
				console.log(error);
				return false;
			});

	}*/
}

