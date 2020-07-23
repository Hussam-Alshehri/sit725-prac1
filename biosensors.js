
  class Biosensor
  {
     constructor(name)
     {
         // initialise with onwer and track heart rate
            this.owner=name;
            this.heartRate=0;
            this.live()
        
     }

     generatRandomBetween(min ,max)
     {
        return parseInt(Math.random() * (max -min ) + min );
        
     }


    generateHearBeat()
    {
      let heartBeat=this.generatRandomBetween(70,80);
      this.heartRate=heartBeat;
      console.log('[owner]:'+ this.owner + '---- [HR] '+ this.heartRate)
    }

    live()
    {
        setInterval(()=>{this.generateHearBeat()},1000 );

    }
  }

  let james= new Biosensor("james")
  let sara= new Biosensor("sara")
  
 
  