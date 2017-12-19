export class Input{

  constructor(name){
    this.name = name;
  }

  Save(){
    var boock = {
      name: this.name
    }
    return boock
  }

}
