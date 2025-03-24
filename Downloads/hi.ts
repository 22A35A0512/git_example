import {Observable} from 'rxjs';

const observable =new Observable(subscriber=>{
    subscriber.next(1);
    subscriber.next(2);
    //subscriber.error();
    subscriber.complete();
})

observable.subscribe({
    next:value=>console.log(value),
    //error:none=>console.log(),
    complete:()=>console.log("you can leave")
})
