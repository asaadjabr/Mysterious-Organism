// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) =>  {

  return {

    specimenNum,

    dna,

    mutuate () {

      let randIndex = Math.floor(Math.random() * this.dna.length);

      let char = returnRandBase();
      
        if (char !== this.dna[randIndex]) {
          this.dna[randIndex] = char 
        } else if (char === this.dna[randIndex]) {
          this.dna[randIndex] = (['A', 'T', 'C', 'G'].filter(letter => letter !== char))[Math.floor(Math.random() * 3)]
          
        }
        
      
     return this.dna;
    },
    // console.log(pAequorFactory(1, mockUpStrand()));
    // console.log(mutuate(pAequorFactory(1, mockUpStrand())));
    
    compareDNA () {
      
      let object2 = pAequorFactory(2, mockUpStrand());
      let totalHit = 0;
      let percentage = 0;
      
      for (let i=0; i < object1.dna.length; i++) {
        if (this.dna[i] === object2.dna[i]) {
          totalHit += 1;
        };
      }
      percentage = (totalHit / this.dna.length) * 100;
      console.log(`Specimen #${this.specimenNum} and specimen #${object2.specimenNum} have ${percentage}% DNA in common.`);
    },
    

    
    willLikelySurvive () {
    let numC = 0;
    let numG = 0;
    let percentageC = 0;
    let percentageG = 0;
    
    this.dna.forEach(element => {
      if (element === 'C') { 
        numC += 1;
      } else if (element === 'G'){
        numG += 1;
      }
    });
    
      percentageC = (numC / this.dna.length) * 100;
      percentageG = (numG / this.dna.length) * 100;
     
      if (percentageC >= 60 || percentageG >= 60) {
        return true;
      } else {
        return false;
      };
    }
  };
  
}




 //console.log(pAequorFactory(1,mockUpStrand()).willLikelySurvive());

let arr = [];
let i = 1;
  while (arr.length < 30) {
let object = pAequorFactory(i,mockUpStrand());   
let boolean = object.willLikelySurvive();

    if ( boolean === true){
    arr.push(object);
  }
  i++;
}
console.log(arr);
