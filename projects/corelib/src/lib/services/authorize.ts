import { Service } from "./service,";


export function Autorize(){
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor){
        const fn = descriptor.value;
        descriptor.value = function(...args:[]){
            console.log(Service.data)
            return fn.apply(this,args)
        };
    }
}