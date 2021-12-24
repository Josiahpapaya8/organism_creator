// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      let randmutate = Math.floor(Math.random() * this.dna.length);
      let mutatedDna = this.dna.slice(randmutate, (randmutate + 1));
      do {
        this.dna.splice(randmutate, 1, returnRandBase());
      } while (this.dna[randmutate] === mutatedDna[0]);
      return this.dna;
    },
    compareDna(object) {
      let inCommon = 0;
      this.dna.forEach((i, index) => {
        let j = object.dna[index];
        if (i === j){
          return inCommon += 1;
        }
      })
      let avgInCommon = (inCommon/this.dna.length) * 100;
      avgInCommon = avgInCommon.toFixed(2);
      console.log(`Specimen #${this.specimenNum} and Specimen #${object.specimenNum} have ${avgInCommon}% DNA in common.`);
    },
    willLikelySurvive(){
      let goodGenes = 0;
      this.dna.forEach(i => {
        console.log(this.dna[i]);
        if (i === 'C' || i === 'G'){
          return goodGenes += 1;
        }
      })
      console.log(goodGenes);
    }
  }
}

const mutation = pAequorFactory(1, mockUpStrand());
const secondMutation = pAequorFactory(2, mockUpStrand());

mutation.willLikelySurvive();





 