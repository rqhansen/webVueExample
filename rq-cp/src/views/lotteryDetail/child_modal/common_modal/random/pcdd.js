function commonRandom(ballLen) {
  /* var balls = optballs.split("|");
		var index = Math.ceil(Math.random() * 9999) % balls.length;
		return balls[index] + ""; */
  return parseInt(Math.random() * ballLen, 10);
}

function randomBall(optballs) {
  var balls = optballs.split("|");
  var index = commonRandom(balls.length);
  return balls[index] + "";
}

function random601(optballs) {
  return randomBall(optballs);
}

function random602(optballs) {
  return randomBall(optballs);
}

function random603(optballs) {
  return randomBall(optballs);
}

function random604(optballs) {
  Array.prototype.remove = function(dx) {
    if (isNaN(dx) || dx > this.length) {
      return false;
    }
    this.splice(dx, 1);
  };
  var randomArr = [];
  var balls = optballs.split("|");
  var index = Math.ceil(Math.random() * (balls.length - 1));
  randomArr.push(balls[index]);
  balls.remove(index);
  index = Math.ceil(Math.random() * (balls.length - 1));
  randomArr.push(balls[index]);
  balls.remove(index);
  index = Math.ceil(Math.random() * (balls.length - 1));
  randomArr.push(balls[index]);
  balls.remove(index);
  return randomArr.join(",");
}

function random605(optballs) {
  return randomBall(optballs);
}
export default {
  "601": random601,
  "602": random602,
  "603": random603,
  "604": random604,
  "605": random605
};
