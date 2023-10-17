// 

function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(hqLocation - pickupLocation);
//The Math.abs() static method returns the absolute value of a number.

 /* A callback function is a function passed into another function as an argument,
 which is then invoked inside the outer function to complete some kind of routine or action */
  }
function distanceFromHqInFeet( ) {
    const feetPerBlock = 264;
    let distanceInFeet = distanceFromHqInBlocks () * feetPerBlock;
    return distanceInFeet;

  }
  
  function distanceTravelledInFeet(pickupLocation, destinationBlock) {
   return Math.abs(destinationBlock - pickupLocation) * feet_per_block;
  }

  function calculatesFarePrice() {
    let fare;
    if (distanceTravelledInFeet () <= 400) {
      fare = 0;
    } else if (distanceTravelledInFeet () > 400 && distanceTravelledInFeet () <= 2000) {
      fare = (distanceTravelledInFeet () - 400) * 0.02;
    } else if (distanceTravelledInFeet () > 2000 && distanceTravelledInFeet () <= 2500) {
      fare = 40;
    } else {
      fare = 'cannot travel that far';
    }
    return fare;
  }
  
