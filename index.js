// Code your solution here
function findMatching(drivers, name) {
    const matchingDrivers = drivers.filter(function(driver) {
      return driver.toLowerCase() === name.toLowerCase();
    });
  
    return matchingDrivers;
  }

function fuzzyMatch(drivers, letters) {
    const matchingDrivers = drivers.filter(function(driver) {
    return driver.slice(0, letters.lenght) === letters;
});
return matchingDrivers;

}

function matchName(drivers, name) {
    const matchingDrivers = drivers.filter(function(driver) {
      return driver.name === name;
    });
  
return matchingDrivers;
  }


