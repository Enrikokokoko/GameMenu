import { from } from 'rxjs'


const arr$ = from('hello')

arr$.subscribe(val => console.log(val))