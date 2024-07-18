
let myNumber: number;

const squared = (num: number): number => {
    return num * num;
}


// string - used for string types, textual data
let studentName:string;
studentName = 'Dae Lee'

// number - used for number types including integers and decimals
let studentAge: number;
studentAge = 10;

// boolean - used for true/false types
let studentEnriched: boolean;
studentEnriched = true;

//Union Types - used when more than one type can be used

let studentPhone: (number | string);
studentPhone = '(555) 555 - 5555';
studentPhone = 5555555555;

// null - used when an object or variable is intentionally null, 
// typically only functionally found in union types

const getCapitals = (str:string):string[] | null => {
    const capitals = str.match(/[A-Z]/);
    return capitals;
  }
  
  console.log(getCapitals('something'));
  // returns null
  console.log(getCapitals('Something'));
  // returns ['S']

  // undefined - used when a variable has yet to be defined
  const myFunc = (student: string | undefined) => {
    if ( student === undefined ){
      // do something
    } 
  };

  // void - used as a return type when the function returns nothing
  const myFunc1 = (student: string): void => {
    console.log(student);
  };

  // never - used as a return type when the function will 
  // never return anything, such as with functions that throw errors or infinite loops
  const myError = (err: string): never => {
    throw new Error(err); 
  }

  // any** **- should be avoided. Used when the type of the item being typed can be anything
  const myFunc2 = (student: any): any => {
    // do something
  };

  // unknown** **- used when the type of the thing being 
  // typed is unknown. Used heavily for type assertion
  const myFunc3 = (student: unknown): string => {
    return "Hello"
  }

  /*
    Type Assertions
    Type Assertions are used to tell TypeScript that even though TypeScript 
    thinks it should be one type, it is actually a different type. Common to 
    see when a type is unknown
  */

const myFunc4 = (student: unknown): string => {
    newStudent  = student as string;
    return newStudent;
  }


/*
typeof
If you run into a situation where you have an ambiguous function, 
and you don't know exactly what it's doing, or you're working with 
a third-party library, and type definitions are missing, and you quickly want to access the type, one way of doing so is using typeof. This won't work for every type, such as null returning an object, but it will work for most.

*/
console.log(typeof myFunc(param));


// Object Like

let arr: string[]; // only accepts strings
let arr2: (string | number)[]; // accepts strings or numbers
let arr1: [string, number, string]; // ['cat', 7, 'dog']

/*
enum - enums are not native to JavaScript but are similar to 
enumeration used in other languages like C++ and Java. You use an 
enum when you have a constant set of values that will not be changed.
 By default, the values in an enum are also given a numeric value starting 
 at 0. However, the numeric value can manually be set to any number explicitly
or by calculation. Uses PascalCase to name the type.
*/
enum Weekend {
    Friday,
    Saturday,
    Sunday
  }

  /*
Objects and Interfaces
Objects are easily created in JavaScript due to JavaScript's weak typing. 
With TypeScript, they take a bit more work. It is possible to create an object 
in TypeScript, but TypeScript offers better tools for doing so.

Object - creating an object requires defining the object before setting values. 
Once you have defined the object, additional properties cannot be added to the 
type definition, making it unhelpful when you need to add more properties after creation.
*/

let student:{ name: string, age: number, enrolled: boolean} = {name: 'Maria', age: 10, enrolled: true};

interface Student { 
    name: string, 
    age: number, 
    enrolled: boolean
  };
  let newStudent:Student = {name: 'Maria', age: 10, enrolled: true};

  // Duck Typing
  /*
  Duck Typing
Duck Typing is a programming concept that tests if an object meets the duck test:
"If it walks like a duck and it quacks like a duck, then it must be a duck."

TypeScript uses duck typing for interfaces, meaning that even though you may 
say a function takes in an argument of interface A, if interface B has the same
properties of A, it will also accept B. Interface A is the duck, and Interface 
B walks and quacks like a duck, so we'll accept it as a duck too.

Optional and Readonly Properties
Typescript gives the ability to create both optional and read-only properties
when working with object-like data.

Optional - use when an object may or may not have a specific property by adding a ? 
at the end of the property name.
*/

interface Student { 
    name: string, 
    age: number, 
    enrolled: boolean,
    phone?: number // phone becomes optional
  };

/*
`readonly` - use when a property should not be able to be modified 
after the object has been created. Keep in mind that this will only produce
 TypeScript errors and that the actual properties can still technically 
 be changed as read-only does not exist in JavaScript. The closest thing in 
 JavaScript is `Object.freeze` which will make all properties of the object 
 unable to be modified.
 */

 interface Student { 
    name: string, 
    age: number, 
    enrolled: boolean,
    readonly id: number // id is readonly
  };

  /*
Type Aliases
Type aliases do not create a new type; they rename a type. Therefore, you can 
use it to type an object and give it a descriptive name. But like the object type,
once a type alias is created, it can not be added to; it can only be extended. 
Meaning, if you wanted to create an object from a type alias and then a second 
with additional properties, you would need to extend the type alias and make 
your second object with the extended alias. This makes interfaces the preferred 
method for creating objects.

Type aliases become very useful when you would like a shorthand for something 
like a specific union type or a tuple with a specific meaning. For example, 
if I needed to create multiple arrays of coordinates, I could create a tuple 
that accepts 2 numbers, call it Coordinate and create multiple arrays of type 
Coordinate.
*/
type Students = { 
    name: string; 
    age: number;
    enrolled: boolean;
  };
  
  let newStudent:Student = {name: 'Maria', age: 10, enrolled: true};


  // -------- Classes -----------
  /*
  Classes
TypeScript classes look and behave very much like the classes
introduced in ES6. A class in programming is made up of member 
variables and member functions/methods. The same goes for TypeScript, 
with the big difference being our variables (properties) are typed, 
as are the parameters and return types for our constructor and methods.
*/

class Student {
    studentGrade: number;
    studentId: number;
    constructor(grade: number, id: number) {
      this.studentGrade = grade;
      this.studentId = id;
    }
  }

/*
Access Modifiers
The biggest addition to TypeScript classes is the addition of access modifiers. 
Access modifiers are used in most object-oriented programming languages to declare 
how accessible a variable should be.

public - by default, all properties of a TypeScript class are public, and it's 
commonplace to leave off the modifier to denote that it's public. Public properties 
can be accessed outside of the class.

private** **- private properties can only be accessed and modified from the class 
itself. TypeScript uses the keyword private, but you can also use the # symbol now 
available for privatizing fields in EcmaScript. Remember that private properties 
are only private in TypeScript; there are no true private properties in JavaScript 
classes, so a private property can still be changed if you ignore the error.

protected** **- protected properties can be accessed by the class itself and child classes.
*/

class Student {
    protected studentGrade: number;
    private studentId: number;
    public constructor(grade: number, id: number) {
      this.studentGrade = grade;
      this.studentId = id;
    }
    id(){
      return this.studentId;
    }
  }
  
  class Graduate extends Student {
    studentMajor: string; // public by default
    public constructor(grade: number, id: number, major: string ){
        super(grade, id);
        this.studentId = id; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
        this.studentGrade = grade; // Accessable because parent is protected
        this.studentMajor = major;
    }
  }
  
  const myStudent = new Graduate(3, 1234, 'computer science');
  
  console.log(myStudent.id()); //  prints 1234
  myStudent.studentId = 1235; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
  console.log(myStudent.id()); // prints 1235

  // ------------- Factory Functions -------
/*
  Factory Functions

If Factory Functions remain your preferred way of creating JavaScript 
objects, they are still useable within TypeScript. To create a factory 
function with explicit typing, create an interface with the object's 
properties and methods and use the interface as the return type for 
the function.
*/

interface Student {
    name: string;
    age: number
    greet(): void;
  }
  
  const studentFactory = (name: string, age: number): Student =>{ 
    const greet = ():void => console.log('hello'); 
    return { name, age, greet };
  }
  
  const myStudent = studentFactory('Hana', 16);

/*
New Terms
Term
Access Modifier		
Used in classes to declare how a property or method can be accessed from the application

Duck typing	
A programming paradigm where if two or more structures (functions, interfaces, objects) 
have the same properties, they can be used interchangeably regardless of any type declarations

Enumerated type	
A set of constants that are automatically indexed and can be called by their name or index

Interface	
Used as a blueprint to declare the shape of something reuseable such as functions, objects, and classes

Tuple
A data type of an array with a set number of values where all value types are known
*/

// // ------- JavaScript--------
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum = ('15' as unknown) as number % 2;
const five = parseInt('5');

// results of function calls
console.log(arrays.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum)); 
console.log(strings.capitalize('the quick brown fox'));
console.log(numbers.multiply(five, 8));
console.log(arrays.lgNum(mixArr));

//------ TypeScript-------

// Concatenate two arrays

const concatArr = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] => {
    return [...arr1, ...arr2];
};

// // Add numbers in an array

const addArr = (arr: number[]): number => {
    let total = 0;
    arr.forEach((x) => {
        total += x;
    });
    return total;
};

// Find the largest number in an array
const lgNum = (arr: (string | number)[]): number => {
    let largest = 0 as number;
    arr.forEach((x) => {
        if (x > largest) {
            largest = x as number;
        }
    });
    return largest;
};

// Remove the 3rd item from an array
const cut3 = (arr: (string | number)[]): (string | number)[] => {
    arr.splice(2, 1);
    return arr;
};

export default {
    concatArr,
    addArr,
    lgNum,
    cut3,
};

const multiply = (num1: number, num2: number ): number  => {
    return num1 * num2;
};

// add
const sum = (num1: number , num2: number ): number  => {
    return num1 + num2;
};

// divide
const divide = (num1: number , num2: number ): number  => {
    return num1 / num2;
};

// subtract
const subtract = (num1: number , num2: number ): number  => {
    return num1 - num2;
};

// square
const square = (num: number ): number  => {
    return num * num;
};

export default {
    multiply,
    subtract,
    divide,
    sum,
    square
};

const capitalize = (str: string): string => {
    const newStr = str.split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
    return newStr;
};

const upperCase = (str: string): string => {
    return str.toUpperCase();
};

const lowerCase = (str: string): string => {
    return str.toLowerCase();
};

export default {
    concat,
    capitalize,
    upperCase,
    lowerCase
};


//----------- Generics --------------------
/*
To fully understand how promises are typed in TypeScript, you need to understand Generics. 
A generic is a way to write a function that is reusable across different types. 
You may wonder, why not just use any? Well, any allows for any type to go in, 
and any type to come out. Using a generic means a number goes in and a number comes out 
or a string goes in and a string comes out.

Generics introduce the Type Variable. Rather than being a variable that accepts values, 
it's a variable that accepts types and is denoted with angle brackets myFunc<T>. 
It's common to see a capital T being used at the type in the generic to denote the use of a type.
*/

// Typed Function
const getItem = (arr: number[]):number => {
    return arr[1];
  }
  
  // Generic Function
  const getItem = <T>(arr: T[]):T => {
    return arr[1];
  };

// Implicit typing javascript 
getItem([1, 2, 3]); // Implicitly typed as number
//Explicit typing
getItem<number>([1,2,3]); // Explicitly typed as a number

const myFunc = async ():Promise<void> => {  };


