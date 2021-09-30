import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { AuthInterceptor } from "./interceptor"
export const INTERCEPTORS=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
    }
]