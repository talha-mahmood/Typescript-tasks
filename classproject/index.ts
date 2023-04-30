class virtualPoint {
    x: number;
    y: number;
   
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
   
  const newvPoint =  new virtualPoint(13, 56);
  console.log(newvPoint); // logs "13, 56"

  class abc{
    age:number;
    name:string;


    constructor(name){
        this.name=name;
    }
  }
  const obj=new abc("ali");
  console.log(obj.name);



  class abc2 extends abc{
    constructor(name2){
        super(name2);
        console.log(this.name);
    }
  }
  let deriv=new abc2("ali2");
  console.log(deriv.name);
  
  class C{
    private a=0;
    get length(){
        return this.a;
    }
    set length(value){
        this.a=value;
    }
  }
  const obj1=new C();
  console.log(obj1.length);