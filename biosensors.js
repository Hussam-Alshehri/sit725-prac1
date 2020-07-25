
  class Biosensor {
     constructor(name) {
         // initialise with onwer and track heart rate
            this.owner=name;
            this.heartRate=0;
            this.live();
     }

     generatRandomBetween(min ,max){
        return parseInt(Math.random() * (max -min ) + min );
     }

    generateHearBeat() {
      let heartBeat=this.generatRandomBetween(60,70);
      this.heartRate=heartBeat;
      console.log( this.owner + ' heartbeat ='+ this.heartRate);
    }

    live(){
        setInterval(()=>{this.generateHearBeat()},1000 );
    }

  }

  let james= new Biosensor("Andrea");
  let sara= new Biosensor("James ");

 
  