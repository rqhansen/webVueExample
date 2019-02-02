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

function random5010101(optballs) {
  return randomBall(optballs);
}

function random5020101(optballs) {
  var randomArr = [];
  var balls = optballs.split("|");
  for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
    var cur = [];
    for (var j = 0, len2 = balls.length; j < len2; j++) {
      if ((i >> j) & 1) {
        cur.push(balls[j]);
      }
    }
    if (cur.length == 2) {
      //2个号码
      randomArr.push(cur);
    }
  }
  var index = commonRandom(randomArr.length);
  return randomArr[index].join("|");
}

function random5020102(optballs) {
  var randomArr = [];
  var balls = optballs.split("|");
  for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
    var cur = [];
    for (var j = 0, len2 = balls.length; j < len2; j++) {
      if ((i >> j) & 1) {
        cur.push(balls[j]);
      }
    }
    if (cur.length == 2) {
      //2个号码
      randomArr.push(cur);
    }
  }
  var index = commonRandom(randomArr.length);
  return randomArr[index].join(" "); //单式以空格分割
}

function random5030101(optballs) {
  var randomArr = [];
  var balls = optballs.split("|");
  for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
    var cur = [];
    for (var j = 0, len2 = balls.length; j < len2; j++) {
      if ((i >> j) & 1) {
        cur.push(balls[j]);
      }
    }
    if (cur.length == 3) {
      //三个号码
      randomArr.push(cur);
    }
  }
  var index = commonRandom(randomArr.length);
  return randomArr[index].join("|");
}

function random5030102(optballs) {
  var randomArr = [];
  var balls = optballs.split("|");
  for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
    var cur = [];
    for (var j = 0, len2 = balls.length; j < len2; j++) {
      if ((i >> j) & 1) {
        cur.push(balls[j]);
      }
    }
    if (cur.length == 3) {
      //三个号码
      randomArr.push(cur);
    }
  }
  var index = commonRandom(randomArr.length);
  return randomArr[index].join(" "); //单式以空格分割
}
// function random5040101(optballs){
// 	var rnd = ["","","","",""];
// 	var balls = optballs.split("|");
//     var index = Math.round(Math.random()*(balls.length - 1));
//     rnd[index%5] = balls[index]+""
//     return rnd.join("|");//返回随机的格式|04|||，表示在5个分组里04是落在第二位，随机一个04号码
// }
//随机大小单双  万位千位百位  客户端使用
function random5040101(optballs) {
  var rnd = ["", "", "", "", ""];
  var balls = optballs.split("|");
  var index = Math.ceil(Math.random() * (balls.length - 1));
  var dxdsIndex = Math.ceil(Math.random() * (balls.length - 1)) % 4; //0大 1小 2单 3双
  var values = [];
  for (var i = 0; i < balls.length; i++) {
    switch (dxdsIndex) {
      case 0:
        if (Number(balls[i]) > 5) {
          values.push(balls[i]);
        }
        break;
      case 1:
        if (Number(balls[i]) < 6) {
          values.push(balls[i]);
        }
        break;
      case 2:
        if (Number(balls[i]) % 2 != 0) {
          values.push(balls[i]);
        }
        break;
      case 3:
        if (Number(balls[i]) % 2 == 0) {
          values.push(balls[i]);
        }
        break;
      default:
        break;
    }
  }
  rnd[index % 3] = values.join(",");
  return {
    ball: rnd.join("|"),
    len: 5
  }; //返回随机的格式|04|||，表示在5个分组里04是落在第二位，随机一个04号码
}

function random5040102(optballs) {
  var rnd = ["", "", "", "", ""];
  var balls = optballs.split("|");
  var index = Math.round(Math.random() * (balls.length - 1));
  rnd[index % 5] = balls[index] + "";
  return rnd.join("|"); //返回随机的格式|04|||，表示在5个分组里04是落在第二位，随机一个04号码
}

function random5050101(optballs) {
  return randomBall(optballs);
}

function random5050102(optballs) {
  return randomBall(optballs);
}

function random5050103(optballs) {
  return randomBall(optballs);
}

function random5060101(optballs) {
  return randomBall(optballs);
}

function random5060102(optballs) {
  return randomBall(optballs);
}

function random5060103(optballs) {
  return randomBall(optballs);
}

function random5070101(optballs) {
  return randomBall(optballs);
}

function random5080101(optballs) {
  var randomArr = [];
  var balls = optballs.split("|");
  for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
    var cur = [];
    for (var j = 0, len2 = balls.length; j < len2; j++) {
      if ((i >> j) & 1) {
        cur.push(balls[j]);
      }
    }
    if (cur.length == 2) {
      //2个号码
      randomArr.push(cur);
    }
  }
  var index = commonRandom(randomArr.length);
  return randomArr[index].join("|");
}

function random5090101(optballs) {
  var randomArr = [];
  var balls = optballs.split("|");
  for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
    var cur = [];
    for (var j = 0, len2 = balls.length; j < len2; j++) {
      if ((i >> j) & 1) {
        cur.push(balls[j]);
      }
    }
    if (cur.length == 3) {
      //三个号码
      randomArr.push(cur);
    }
  }
  var index = commonRandom(randomArr.length);
  return randomArr[index].join("|");
}

function random5100101(optballs) {
  return randomBall(optballs);
}

function random5100102(optballs) {
  return randomBall(optballs);
}

function random5100103(optballs) {
  return randomBall(optballs);
}

function random5100104(optballs) {
  return randomBall(optballs);
}

function random5100105(optballs) {
  return randomBall(optballs);
}

function random5100106(optballs) {
  return randomBall(optballs);
}

function random5100107(optballs) {
  return randomBall(optballs);
}

function random5100108(optballs) {
  return randomBall(optballs);
}

function random5100109(optballs) {
  return randomBall(optballs);
}

function random5100110(optballs) {
  return randomBall(optballs);
}

function random5110101(optballs) {
  return randomBall(optballs);
}

function random5120101(optballs) {
  return randomBall(optballs);
}
export default {
  "5010101": random5010101,
  "5020101": random5020101,
  "5020102": random5020102,
  "5030101": random5030101,
  "5030102": random5030102,
  "5040101": random5040101,
  "5040102": random5040102,
  "5050101": random5050101,
  "5050102": random5050102,
  "5050103": random5050103,
  "5060101": random5060101,
  "5060102": random5060102,
  "5060103": random5060103,
  "5070101": random5070101,
  "5080101": random5080101,
  "5090101": random5090101,
  "5100101": random5100101,
  "5100102": random5100102,
  "5100103": random5100103,
  "5100104": random5100104,
  "5100105": random5100105,
  "5100106": random5100106,
  "5100107": random5100107,
  "5100108": random5100108,
  "5100109": random5100109,
  "5100110": random5100110,
  "5110101": random5110101,
  "5120101": random5120101
};
