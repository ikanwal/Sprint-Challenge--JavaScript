// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class  CuboidMaker1{
    constructor(attributes){
    this.length=attributes.length;
    this.width=attributes.width;
    this.height=attributes.height ; 
    }
    volume(){
    let vol=(this.length*this.width*this.height);
     return vol ;
  }
  SurfaceArea(){
    let Area=2*((this.length*this.width)+(this.width*this.height)+(this.height*this.length));
     return Area;
  }
    speak(){
      return `Hi,I am a parent construtor class`
    }
  
  }
  
  class CubeMaker extends CuboidMaker1{
    constructor(attributes){
      super(attributes); 
   }
    speak(){
      return `Hi Im a child construtor class`;
    }
  }
  const cuboid1= new CuboidMaker1 ({
    length:4,
    width:5,
    height:5
  });
  
  const cube= new CubeMaker({
    length:3,
    width:2,
    height:2
  })
  
   console.log(cuboid1.volume()); // 100
   console.log(cuboid1.SurfaceArea()); // 130
  console.log(cube.volume());
  console.log(cube.SurfaceArea());
  console.log(cube.speak()); 
  console.log(cuboid1.speak()); 