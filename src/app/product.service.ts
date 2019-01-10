import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Robot } from "./model/robot.model";
import { Observable } from "rxjs"; 


@Injectable({
	providedIn: 'root'
})
export class ProductService {
	
	constructor(private http: HttpClient) { }

	getProducts() : Observable<any> {
		alert('ProductService getProducts');
		return this.http.get('http://localhost:8080/robots');
	};

	getRobot(robotId: number) : Observable<any> {
		return this.http.get('http://localhost:8080/robot/' + robotId);
	}

	deleteRobot(robotId: number) : Observable<any> {
		return this.http.delete('http://localhost:8080/robot/' + robotId);
	}

	addRobot(robot: Robot) : Observable<any> {
		return this.http.post('http://localhost:8080/robot', robot);
	}

	updateRobot(robotId: number, robot: Robot) : Observable<any> {
		return this.http.put('http://localhost:8080/' + robotId, robot);
	}		
	
}



