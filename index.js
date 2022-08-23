// Code your solution here
const findMatching = function(drivers, rider){
    const result = drivers.filter((driver) => driver.toLowerCase() === rider.toLowerCase())
    return result;
};

const fuzzyMatch = function(driverNames, rider){
    const newMatch = driverNames.filter(function(driverName){
        if(driverName.startsWith(rider)){
            return true;
        }else{
            return false;
        }
    })
    return newMatch;
}
const matchName = function(drivers, rider){
    const myMatch = drivers.filter(function(driver){
        return driver.name === rider;
    });
    return myMatch;
}