class Animal{
    name : string = ''
    isMammal : string = ''
};
class Frog extends Animal {
    jump(){
        console.log('hop hop');
        
    }
}
class Ape extends Animal {
    yell(){
        console.log('Auoooo');
        
    }
};
 const frog = new Frog();
 console.log(frog);
 frog.jump();

 const ape = new Ape();
 console.log(ape);
 ape.yell();
 
 
