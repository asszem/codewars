const twoFighters = (fighter1, fighter2, firstAttacker) => {
  if (!guardianCheck(fighter1, fighter2)) {
    return false;
  }
  if (
    fighter1.damagePerAttack != undefined &&
    fighter1.damagePerAttack > 0 &&
    fighter2.damagePerAttack === undefined
  ) {
    return fighter1.name;
  }
  if (
    fighter2.damagePerAttack != undefined &&
    fighter2.damagePerAttack > 0 &&
    fighter1.damagePerAttack === undefined
  ) {
    return fighter2.name;
  }
  let attacker =
    firstAttacker === fighter1.name ? fighter1: fighter2;
 let defender =   
	firstAttacker === fighter1.name ? fighter2: fighter1;
	console.log(attacker.name)
  while (true) {
	defender.health = defender.health-attacker.damagePerAttack;
	if (defender.health<=0) return attacker.name;
	attacker.health = attacker.health-defender.damagePerAttack;
	if (attacker.health<=0) return defender.name;
	console.log('attacker health: ', attacker.health)
	console.log('defender health:', defender.health)
  }
};

const guardianCheck = (fighter1, fighter2) => {
  for (fighter of [fighter1, fighter2]) {
    if (
      fighter === undefined ||
      typeof fighter.name !== 'string' ||
      fighter.health <= 0
    ) {
      return false;
    }
  }

  return true;
};

module.exports = {
  twoFighters,
};
