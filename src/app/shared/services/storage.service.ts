import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  remove(key: string) {
    globalThis.localStorage.removeItem(key);
  }

  public save(value: any, key: string) {
    this.remove(key);
    globalThis.localStorage.setItem(key, JSON.stringify(value));
  }

  public get<T>(key: string): T | null {
    const raw = globalThis.localStorage.getItem(key);

    if (raw) {
      return JSON.parse(raw);
    }

    return null;
  }

  public isUserLogged() {
    const raw = globalThis.localStorage.getItem(environment.userKey);
    if (raw) {
      return true;
    }
    return false;
  }

}
