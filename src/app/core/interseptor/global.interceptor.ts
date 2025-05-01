import { HttpInterceptorFn } from '@angular/common/http';

export const globalInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token'); 
 const baseUrl='https://upskilling-egypt.com:3007/'
   const UpdatetUrl=baseUrl+req.url
  const Reguset=req.clone({
    url:UpdatetUrl,
    setHeaders: {
             Authorization: `Bearer ${token}`
           }
})

   
  return next(Reguset);
  };