import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
// import { UserService } from './service/user.service';
import { UserRestService } from './service/user-rest.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(UserRestService)
  const r = inject(Router)//inject is used to do dependency injection.
  if(service.isUserLoggedIn){
    return true;
  }
  else{
    r.navigate(['login'])
    return false;
  }
};
