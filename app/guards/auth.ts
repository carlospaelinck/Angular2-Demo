import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Guard, Router, TraversalCandidate } from '@ngrx/router'

const AUTH_URL = 'http://www.mocky.io/v2/575f4d12110000df23299379'

@Injectable()
export class AuthenticationGuard {
  constructor(
    private http: Http,
    private router: Router
  ) {}

  protectRoute(candidate: TraversalCandidate) {
    /* Protect route must return a observable. The map function
     * returns an observable of the returned value whereas catch
     * does not requiring an observable be created. */
    return this.http
      .get(AUTH_URL)
      .map(() => true)
      .catch(() => {
        alert('You must be authenticated to build a pizza!')
        this.router.go('/')
        return Observable.of(false)
      })
  }
}
