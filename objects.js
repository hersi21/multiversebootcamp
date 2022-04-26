class Bag {
    weight;
    constructor(weight) {
        this.weight = weight
        const bag = new Bag(16)
    }
    isOverlimit(){
        if (weight <=30){
            return true;
        }else return false;}
}

class passenger{
    passengerName;
    passportNumber;
    seatNumber;

    bag={}
   constructor(name,passportNumber,seatNumber ){
   this.name = passengerName
   this.passportNumber = passportNumber
   this.seatNumber = seatNumber
   }
   addBag(bag){
    this.bag.push(bag);
    }
    
}



class crewMember{
    name;
    position;
    StaffNo;
    constructor(crewName,position, numberOfStaff){
    this.crewMember = crewMember
    this.position = position
    this.numberOfStaff = numberOfStaff
    }
}

class airport{
    name;
    location;
    constructor(name, location){
    this.name = name
    this.location = location
    }
}



