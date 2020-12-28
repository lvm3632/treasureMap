let getRandomNumber = (size) => {
  return Math.floor(Math.random() * size);
};

let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  console.log(Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)));
  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

let getDistanceHint = (distance) => {
  if (distance < 30) {
    return "Boling Hot!";
  } else if (distance < 40) {
    return "Really hot";
  } else if (distance < 60) {
    return "Hot";
  } else if (distance < 100) {
    return "Warm";
  } else if (distance < 180) {
    return "Cold";
  } else if (distance < 360) {
    return "Really Cold";
  } else {
    return "Freezing";
  }
};
