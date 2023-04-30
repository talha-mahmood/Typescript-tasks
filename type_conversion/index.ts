let myname: string | null;
myname = null;
console.log(myname);

myname="zia";
console.log(myname);

let myAge: string | number;

myAge=16;
console.log(myAge);

myAge="don't Know";
console.log(myAge);
console.log(myAge.toString());
console.log(myAge.toLowerCase());

let newAge = Math.random()>0.6?"khan":60;

if(newAge == "khan"){
    newAge.toUpperCase();
}
