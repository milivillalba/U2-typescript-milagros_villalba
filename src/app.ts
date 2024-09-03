//1:tipo basico
let age: number=21
let nombre: string = "milagros"

//2:union types
let estado
type estado = string | number
estado=5
console.log(estado)

//3:interfas basica 
// interface Person{
//     firstName: string
//     lastName: string
// }
// let person: Person={
//    firstName: "Teresita",
//    lastName: "Villalba"

// }

//4: interfas opcional
interface Person{
    firstName: string;
    lastName?: string;//le estoy diciendo que es opcional colocar o no lastName.
}
//objeto que incluya firname nomas
const person:Person={
    firstName:"Soledad"
}
//ejemplo uso
console.log(person)

//5:fUNCO CON TIPADO
function add(num1:number,num2:number): number{
    return num1+num2
}
//ejemplo de uso
let resutado= add(5,5);
console.log(resutado)

//6: Tipado en funciones:
function greet(name:string):string{
     return `Bienvenida de nuevo ${name}!`;
}
//ejemplo uso
let saludar = greet("Mili");
console.log(saludar)

//7:Clase Basica
class car {
    make!: string;//use ! para idicar que sera inicializada mas tarde,
                  // ya que typeScrip nesesita que todas las popiedades de una clase sea inicializad sio si .

    //metodo
    drive(): void{
        console.log(`Driving a ${this.make}`)
    }
}
//ejemplo de uso
let miCar = new car();
miCar.make="Jeep";
miCar.drive();


//8:Clase con contrucoor
class Car{
    make: string;

    constructor(make:string){
        this.make= make;
    }
    //metodo
    drive():void{
        console.log(`Driving a ${this.make}`)
    }
}
//instancia de la clase
let myCar= new Car("Renault")
//LLAMAR METODO
myCar.drive();

//9: CLASES CON PROPIEDADES PRIVADAS:
class CarPivate {
  //propiedad privada
  private make: string;

  constructor(make: string){
    this.make = make;
  }
  //metodo para optener el valor de make:
  getMake():string{
    return this.make;
  }
  //metodo
  drive():void{
    console.log(`Driving a ${this.make}`)
  }
}
//instancia de la clase:
let miAuto= new CarPivate("Toyota");
//acceder al valor de make a travez del metodo getMake
console.log(miAuto.getMake());
//llamar metodo drive
miAuto.drive();

//10: Herencia de clase:
class ElectricCar extends CarPivate{
    //propiedad adicional de la clase ElectricCAR
    batteryLife:number;

    constructor(make:string, batteryLife:number){
        super(make); //llama al construtor de la clase base"carPivate
        this.batteryLife= batteryLife;
    }
   //metodo especifico de la clase ElectricCAR:
   charge():void{
    console.log(`EL ${this.getMake()} esta cargando`)
   }
}
//instancia de la clase ElectricCAR:
let miAutoElectrico= new ElectricCar("Audi", 100);
//llamar los metodos
miAutoElectrico.drive();
miAutoElectrico.charge();
//acceder a la propiedad batteryLife
console.log(`Duracion de la bateria: ${miAutoElectrico.batteryLife}%`)

//11:Interface y clases:
//interfas shape
interface Shape{
    //metodo area    
    area():number;
}
//clase circle
class Circle implements Shape{
    private radius: number;//almacena el radio del circulo

    constructor(radius: number) {
        this.radius = radius;
    }

    // Implementar el método area() de la interfaz Shape
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}
// Crear una instancia de Circle
const myCircle = new Circle(5);

// Calcular y mostrar el área del círculo
console.log(`El area del circulo es: ${myCircle.area()}`);

//12:Tipos literales
//tipos literales
type Direction = "up" | "down" | "left" | "right";
// Crear una variable que solo puede tener uno de los valores definidos en Direction
let direction: Direction;

// Asignar un valor válido
direction = "up"; 

//mostra la ireccion
console.log(`La direccion es: ${direction}`);

//13:Enum:
// Declara el enum Color
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}
// Función que toma un argumento de tipo Color y devuelve un mensaje
function ColorMessage(color: Color): string {
    return `El color es ${color}.`;
}
// Ejemplo de uso
console.log(ColorMessage(Color.Red));   
console.log(ColorMessage(Color.Green)); 
console.log(ColorMessage(Color.Blue));  

//14:type assertions:
let dni: any= 45049576;
//usar una asercionde tipo para tratar ala variable como una string
let dniString: string= dni as string;
//usar la propiedad .length en la variable
console.log(dniString.length);

//15:Genericos(baicos)
function identity<T>(arg: T): T {
    return arg;
}
//ejem uso:
let numberIdentity = identity(21);     // Tipo T es number
let stringIdentity = identity("holiss"); // Tipo T es string
let booleanIdentity = identity(true); // Tipo T es boolean
console.log(numberIdentity); 
console.log(stringIdentity); 
console.log(booleanIdentity); 