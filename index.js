const drivers= ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching  (driversArray, name) {
    const matches = driversArray.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return matches
};

function fuzzyMatch(driversArray, name) {
    return driversArray.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
}



function matchName (driversArray, name) {
    const matches = driversArray.filter(driver =>driver.name.toLowerCase()=== name.toLowerCase())
    return matches

}
 