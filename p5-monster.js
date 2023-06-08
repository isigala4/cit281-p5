module.exports = class Monster {
  constructor({ monsterName = "Unknown", minimumLife = 0, currentLife = 100 }) {
    this.monsterName = monsterName;
    this.minimumLife = minimumLife;
    this.currentLife = currentLife;
    this.isAlive = currentLife >= minimumLife;
  };
  updateLife = (lifeChangeAmount) => {
      this.currentLife += lifeChangeAmount;
      this.currentLife = this.currentLife < 0 ? 0: this.currentLife;
      this.isAlive = this.currentLife >= this.minimumLife;
      
  }
  randomLifeDrain(minimumLifeDrain, maximumLifeDrain){
    const randominterger = (min, max) => Math.floor(Math.random() * (max-min+1)+min);
    const generatedinterger =randominterger(minimumLifeDrain, maximumLifeDrain + 1);
    this.updateLife(-generatedinterger);  
    return generatedinterger;
  }
};
