import {Injectable} from 'angular2/core'
import {IDataItem} from './IDataItem';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class TestService {
    private _testURL: string ='http://localhost:15000/api/values';

    
    constructor(private _http: Http) { }

    //getDataItems(): IDataItem[] {
    //    return [{ "item1": "di-1", "item2": "di-2", "item3": "di-3" }, { "item1": "di-A", "item2": "di-B", "item3": "di-C" }];
    //}
    getDataItems(): Observable<IDataItem[]> {
        return this._http.get(this._testURL);
    }    
    
}