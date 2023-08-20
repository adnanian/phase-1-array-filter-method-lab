// Code your solution here

function equalsCaseInsensitive(stringA, stringB) {
    return stringA.toLowerCase() === stringB.toLowerCase();
}

// Tests 1 - 3
function findMatching(drivers, name) {
   /*  let matchingDriverNames = [];
    for (const driver of drivers) {
        if (equalsCaseInsensitive(driver, name)) {
            matchingDriverNames.push(driver);
        }
    }
    return matchingDriverNames; */
    return drivers.filter((driver) => equalsCaseInsensitive(driver, name));
}

// Tests 4 - 5
function fuzzyMatch(drivers, name) {
    /* let fuzzyMatchingDriverNames = [];
    for (const driver of drivers) {
        if (driver.slice(0, name.length) === name) {
            fuzzyMatchingDriverNames.push(driver);
        }
    }
    return fuzzyMatchingDriverNames; */
    return drivers.filter((driver) => driver.slice(0, name.length) === name);
}

function matchName(drivers, driverName) {
    /* let matchingDrivers = [];
    for (const driver of drivers) {
        if (driver.name === driverName) {
            matchingDrivers.push(driver);
        }
    }
    return matchingDrivers; */
    return drivers.filter((driver) => driver.name === driverName);
}