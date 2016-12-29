import {Injectable} from "@angular/core";
import {SkiJumper} from "./ski-jumper";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class SkiJumpersService {
  private usersUrl = "http://localhost:8080/skiJumpers/";

  constructor(private http: Http) {
  }

  public getSkiJumpers(): Promise<SkiJumper[]> {
    return this.http.get(this.usersUrl)
      .map(response => response.json())
      .toPromise()
      .catch(this.handleError);
  }

  private extractSkiJumpers(res: Response) {
    return res.json() as SkiJumper[];
  }

  private handleError(error: any) {
    let errorMsg = error.message ? error.message : error.status ?
      `$(error.status) - $(error.statusText)` : "Server error";
    console.log(errorMsg);

    return Observable.throw(errorMsg)
  }
}
