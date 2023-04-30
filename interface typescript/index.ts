interface sun{//behavoiur without implementation hiding unnecessary details from user
    dead():void;
    
}
class isb implements sun{//implementation
    dead(): void {
        console.log("hello\n");
    }
}
class karachi implements isb{
    dead(): void {
        console.log("hi\n");
    }
}

class vadairaClass implements sun{
    dead(): void {
        console.log("Looking like dead is parado");
    }
}
let obj:sun =new isb();
obj=new vadairaClass();

function doSomething(person:sun){
    person.dead();
}
doSomething(obj);

class americanKid implements sun{
    dead(): void {
        console.log(" Dead kids after doing drugs");

    }
}

let obj1=new americanKid();
doSomething(obj1);



