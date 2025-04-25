import { HttpInterceptorFn } from '@angular/common/http';

export const globalInterceptor: HttpInterceptorFn = (req, next) => {
   const baseUrl='https://upskilling-egypt.com:3007/'
   const UpdatetUrl=baseUrl+req.url
   const Reguset=req.clone({
    url:UpdatetUrl
   })
  return next(Reguset);
};