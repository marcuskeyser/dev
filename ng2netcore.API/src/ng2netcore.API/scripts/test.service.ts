import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {IDataItem} from './IDataItem';

@Injectable()

export class TestService {
    private _testURL: string ='http://localhost:15000/api/values';   
    constructor(private _http: Http) { }

    getDataItems(): Observable<IDataItem[]> {
        return this._http.get(this._testURL)
            .map((response: Response) => <IDataItem[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);

    }    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
    
}