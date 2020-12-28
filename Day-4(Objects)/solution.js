myPenguin = {
    characterName : 'Misha',
    origin : 'Death and the Penguin',
    author : 'Andrey Kurkov'
}

console.log(`Hello , My character name is ${myPenguin.characterName}`)

myPenguin.myFly = false
console.log(myPenguin)

myPenguin.chirp = function () {
    console.log('chirp chirp , is this how penguins sound?');
}

myPenguin.chirp();

myPenguin.sayHello = function () {
    console.log(`Hello , My character name is ${this.characterName}`)
}

myPenguin.sayHello()

myPenguin.characterName = 'Penguin McPenguinFace';
myPenguin.sayHello()

myPenguin.fly = function () {
    if(this.myFly === true){
        console.log(`${this.characterName} can fly`);
    } else{
        console.log(`${this.characterName} can't fly`);
    }
}

myPenguin.fly();

myPenguin.myFly = true;
myPenguin.fly();

for (const keys in myPenguin) {
    console.log(`${keys}`);
  }

  for (const keys in myPenguin) {
    console.log(`${myPenguin[keys]}`);
  }