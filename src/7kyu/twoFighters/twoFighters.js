const twoFighters = (fighter1, fighter2) => {
    if (!guardianCheck(fighter1,fighter2)) {
        return false;
    }
    if (fighter1.damage != undefined && fighter1.damage>0 && fighter2.damage===undefined) {
        return fighter1.name;
    }
    if (fighter2.damage != undefined && fighter2.damage>0 && fighter1.damage===undefined) {
        return fighter2.name;
    }
};

const guardianCheck = (fighter1, fighter2) => {
    for (fighter of [fighter1, fighter2]) {
        if (fighter === undefined || 
            typeof fighter.name !== 'string' || 
            fighter.health <= 0) {
            return false;
        }
    }

    return true;
}

module.exports = {
    twoFighters
};
