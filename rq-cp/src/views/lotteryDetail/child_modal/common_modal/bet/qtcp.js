// function num1010101 (betballs) {
//     var results = [];//清空对象
//     var result = [];
//     //玩法规则
//     var groups = [];
//     var ballGroups = betballs.split("|");
//     if (ballGroups.some(item => !item)) return results;
//     for (var i = 0, len = ballGroups.length; i < len; i++) {
//         groups.push(ballGroups[i].split(","));
//     }
//     doExchange(groups, 0);
//     function doExchange (arr, depth) {
//         for (var i = 0; i < arr[depth].length; i++) {
//             result[depth] = arr[depth][i]
//             if (depth != arr.length - 1) {
//                 doExchange(arr, depth + 1)
//             } else {
//                 results.push(result.join(','))
//             }
//         }
//     }
//     return results;
// }
// function num1010102 (betballs) {
//     var results = [];
//     betballs = betballs.split(' ');
//     betballs.forEach(item => {
//         let sp = item.split('');
//         if (sp.length === 3 && /^[0-9]*$/.test(item) && !results.some(vvv => vvv === item)) {
//             results.push(item);
//         }
//     });
//     return results;
// }
// function num1010103 (betballs) {
//     var results = [];
//     var bettinggroups = betballs.split(",");
//     if (!bettinggroups[0]) return [];
//     var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     for (var k = 0, len3 = bettinggroups.length; k < len3; k++) {
//         var bettingValue = Number(bettinggroups[k]);
//         for (var i = 0, len1 = seed.length; i < len1; i++) {
//             for (var j = 0, len2 = seed.length; j < len2; j++) {
//                 var dvalue = bettingValue - seed[i] - seed[j];
//                 if (seed.indexOf(dvalue) > -1) {
//                     results.push([seed[i] + "", seed[j] + "", dvalue + ""])
//                 }
//             }
//         }
//     }
//     return results;
// }
// function num1010201 (betballs) {
//     //构建所有可能性号码组合
//     var results = [];
//     var balls = betballs.split(",");
//     for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
//         var cur = [];
//         for (var j = 0, len2 = balls.length; j < len2; j++) {
//             if (i >> j & 1) {
//                 cur.push(balls[j]);
//             }
//         }
//         if (cur.length == 2) {//二个号码
//             results.push(cur)
//         }
//     }
//     var farr = [];
//     //从0-9中任意选择2个或2个以上号码组成两注,且有1个号码重复
//     for (var i = 0, len1 = results.length; i < len1; i++) {
//         for (var j = 0, len2 = results[i].length; j < len2; j++) {
//             var temp = results[i].concat();
//             temp.push(results[i][j]);
//             farr.push(temp)
//         }
//     }
//     return farr;
// }
// function num1010202 (betballs) {
//     //构建所有可能性号码组合
//     var results = [];
//     var balls = betballs.split(",");
//     for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
//         var cur = [];
//         for (var j = 0, len2 = balls.length; j < len2; j++) {
//             if (i >> j & 1) {
//                 cur.push(balls[j]);
//             }
//         }
//         if (cur.length == 3) {//三个号码
//             results.push(cur)
//         }
//     }
//     return results;
// }
// function num1010203 (betballs) {
//     var results = [];
//     betballs = betballs.split(' ');
//     betballs.forEach(item => {
//         let sp = item.split('');
//         if (sp.length === 3 && /^[0-9]*$/.test(item) && !item.match(/^([0-9])\1\1$/) && !results.some(vvv => vvv === item)) {
//             results.push(item);
//         }
//     });
//     return results;
// }
// function num1020101 (betballs) {
//     var results = [];
//     var result = [];
//     var groups = [];
//     var ballGroups = betballs.split("|");
//     if (ballGroups.some(item => !item)) return results;
//     for (var i = 0, len = ballGroups.length; i < len; i++) {
//         groups.push(ballGroups[i].split(","));
//     }
//     doExchange(groups, 0);
//     function doExchange (arr, depth) {
//         for (var i = 0; i < arr[depth].length; i++) {
//             result[depth] = arr[depth][i]
//             if (depth != arr.length - 1) {
//                 doExchange(arr, depth + 1)
//             } else {
//                 results.push(result.join(','))
//             }
//         }
//     }
//     return results;
// }
// function num1020102 (betballs) {
//     var results = [];
//     betballs = betballs.split(' ');
//     betballs.forEach(item => {
//         let sp = item.split('');
//         if (sp.length === 2 && /^[0-9]*$/.test(item) && !results.some(vvv => vvv === item)) {
//             results.push(item);
//         }
//     });
//     return results;
// }
// function num1020103 (betballs) {
//     var results = [];
//     var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     var bettinggroups = betballs.split(",");
//     if (!bettinggroups[0]) return [];
//     for (var k = 0, len3 = bettinggroups.length; k < len3; k++) {
//         var bettingValue = Number(bettinggroups[k]);
//         for (var i = 0, len1 = seed.length; i < len1; i++) {
//             var dvalue = bettingValue - seed[i];
//             if (seed.indexOf(dvalue) > -1) {
//                 results.push([seed[i] + "", dvalue + ""])
//             }
//         }
//     }
//     return results;
// }
// function num1020201 (betballs) {
//     //构建所有可能性号码组合
//     var results = [];
//     var balls = betballs.split(",");
//     for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
//         var cur = [];
//         for (var j = 0, len2 = balls.length; j < len2; j++) {
//             if (i >> j & 1) {
//                 cur.push(balls[j]);
//             }
//         }
//         if (cur.length == 2) {//二个号码
//             results.push(cur)
//         }
//     }
//     return results;
// }
// function num1020202 (betballs) {
//     var results = [];
//     betballs = betballs.split(' ');
//     betballs.forEach(item => {
//         let sp = item.split('');
//         if (sp.length === 2 && /^[0-9]*$/.test(item) && !results.some(vvv => vvv === item)) {
//             results.push(item);
//         }
//     });
//     return results;
// }
// ///
// function num1020301 (betballs) {
//     var results = [];
//     var result = [];
//     var groups = [];
//     var ballGroups = betballs.split("|");
//     if (ballGroups.some(item => !item)) return results;
//     for (var i = 0, len = ballGroups.length; i < len; i++) {
//         groups.push(ballGroups[i].split(","));
//     }
//     doExchange(groups, 0);
//     function doExchange (arr, depth) {
//         for (var i = 0; i < arr[depth].length; i++) {
//             result[depth] = arr[depth][i]
//             if (depth != arr.length - 1) {
//                 doExchange(arr, depth + 1)
//             } else {
//                 results.push(result.join(','))
//             }
//         }
//     }
//     return results;
// }
// function num1020302 (betballs) {
//     var results = [];
//     betballs = betballs.split(' ');
//     betballs.forEach(item => {
//         let sp = item.split('');
//         if (sp.length === 2 && /^[0-9]*$/.test(item) && !results.some(vvv => vvv === item)) {
//             results.push(item);
//         }
//     });
//     return results;
// }
// function num1020303 (betballs) {
//     var results = [];
//     var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     var bettinggroups = betballs.split(",");
//     if (!bettinggroups[0]) return [];
//     for (var k = 0, len3 = bettinggroups.length; k < len3; k++) {
//         var bettingValue = Number(bettinggroups[k]);
//         for (var i = 0, len1 = seed.length; i < len1; i++) {
//             var dvalue = bettingValue - seed[i];
//             if (seed.indexOf(dvalue) > -1) {
//                 results.push([seed[i] + "", dvalue + ""])
//             }
//         }
//     }
//     return results;
// }
// function num1020401 (betballs) {
//     //构建所有可能性号码组合
//     var results = [];
//     var balls = betballs.split(",");
//     for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
//         var cur = [];
//         for (var j = 0, len2 = balls.length; j < len2; j++) {
//             if (i >> j & 1) {
//                 cur.push(balls[j]);
//             }
//         }
//         if (cur.length == 2) {//二个号码
//             results.push(cur)
//         }
//     }
//     return results;
// }
// function num1020402 (betballs) {
//     var results = [];
//     betballs = betballs.split(' ');
//     betballs.forEach(item => {
//         let sp = item.split('');
//         if (sp.length === 2 && /^[0-9]*$/.test(item) && !results.some(vvv => vvv === item)) {
//             results.push(item);
//         }
//     });
//     return results;
// }
// function num1030101 (betballs) {
//     var results = [];
//     var ballgroups = betballs.split("|");
//     for (var i = 0, len1 = ballgroups.length; i < len1; i++) {
//         var balls = ballgroups[i].split(",");
//         for (var j = 0, len2 = balls.length; j < len2; j++) {
//             if (balls[j] == '') continue;
//             results.push(balls[j]);
//         }
//     }
//     return results;
// }
// function num1040101 (betballs) {
//     var balls = betballs.split(",");
//     if (!balls[0]) return [];
//     return balls;
// }

// //腾讯分分彩
// function num9010101 (betballs) {
//     //构建所有可能性号码组合
//     function doExchange (arr, depth) {
//         for (var i = 0; i < arr[depth].length; i++) {
//             result[depth] = arr[depth][i]
//             if (depth != arr.length - 1) {
//                 doExchange(arr, depth + 1)
//             } else {
//                 results.push(result.join(','));
//             }
//         }
//     }
//     var results = [];
//     var result = [];
//     var groups = [];
//     var ballGroups = betballs.split("|");
//     if (ballGroups.length != 3) return [];//没有选够3组，返回0注
//     var flag = ballGroups.some(function (it) {
//         return !it;
//     })
//     if (flag) {
//         return [];//里面有空值
//     }
//     for (var i = 0, len = ballGroups.length; i < len; i++) {
//         groups.push(ballGroups[i].split(","));
//     }
//     doExchange(groups, 0);
//     return results
// };
// function num9010102 (betballs) {
//     var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     var results = [];
//     var bettinggroups = betballs.split(",");
//     for (var k = 0, len3 = bettinggroups.length; k < len3; k++) {
//         var bettingValue = Number(bettinggroups[k]);
//         for (var i = 0, len1 = seed.length; i < len1; i++) {
//             for (var j = 0, len2 = seed.length; j < len2; j++) {
//                 var dvalue = bettingValue - seed[i] - seed[j];
//                 if (seed.indexOf(dvalue) > -1) {
//                     results.push([seed[i] + "", seed[j] + "", dvalue + ""]);
//                 }
//             }
//         }
//     }
//     return results;
// };
// function num9010103 (betballs) {
//     var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     var results = [];
//     var bettinggroups = betballs.split(",");
//     for (var i = 0, len1 = seed.length; i < len1; i++) {
//         for (var j = 0, len2 = seed.length; j < len2; j++) {
//             for (var k = 0, len3 = seed.length; k < len3; k++) {
//                 //var max=(i < j ? (j < k ? k : j) : (i < k ? k : i));
//                 //var min=(i > j ? (j > k ? k : j) : (i > k ? k : i));
//                 var dvalue = seed[(i < j ? (j < k ? k : j) : (i < k ? k : i))]
//                     - seed[(i > j ? (j > k ? k : j) : (i > k ? k : i))];
//                 if (bettinggroups.indexOf(dvalue + "") > -1) {
//                     results.push([seed[i] + "", seed[j] + "", seed[k] + ""]);
//                 }
//             }
//         }
//     }
//     return results;
// }
// function num9020101 (betballs) {
//     //构建所有可能性号码组合
//     function doExchange (arr, depth) {
//         for (var i = 0; i < arr[depth].length; i++) {
//             result[depth] = arr[depth][i]
//             if (depth != arr.length - 1) {
//                 doExchange(arr, depth + 1)
//             } else {
//                 results.push(result.join(','));
//             }
//         }
//     }
//     var results = [];
//     var result = [];
//     var groups = [];
//     var ballGroups = betballs.split("|");
//     if (ballGroups.length != 2) return [];//没有选够2组，返回0注
//     var flag = ballGroups.some(function (it) {
//         return !it;
//     })
//     if (flag) {
//         return [];//里面有空值
//     }
//     for (var i = 0, len = ballGroups.length; i < len; i++) {
//         groups.push(ballGroups[i].split(","));
//     }
//     doExchange(groups, 0);
//     return results;
// };
// function num9020102 (betballs) {
//     var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     var results = [];
//     var bettinggroups = betballs.split(",");
//     for (var k = 0, len3 = bettinggroups.length; k < len3; k++) {
//         var bettingValue = Number(bettinggroups[k]);
//         for (var i = 0, len1 = seed.length; i < len1; i++) {
//             var dvalue = bettingValue - seed[i];
//             if (seed.indexOf(dvalue) > -1) {
//                 results.push([seed[i] + "", dvalue + ""]);
//             }
//         }
//     }
//     return results;
// };
// function num9020103 (betballs) {
//     var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     var results = [];
//     var bettinggroups = betballs.split(",");
//     for (var i = 0, len1 = seed.length; i < len1; i++) {
//         for (var j = 0, len2 = seed.length; j < len2; j++) {
//             var dvalue = Math.abs(seed[i] - seed[j]);
//             if (bettinggroups.indexOf(dvalue + "") > -1) {
//                 results.push([seed[i] + "", seed[j] + ""]);
//             }
//         }
//     }
//     return results;
// };
// function num9020201 (betballs) {
//     var results = [];
//     //构建所有可能性号码组合
//     var balls = betballs.split(",");
//     for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
//         var cur = [];
//         for (var j = 0, len2 = balls.length; j < len2; j++) {
//             if (i >> j & 1) {
//                 cur.push(balls[j]);
//             }
//         }
//         if (cur.length == 2) {//2个号码
//             results.push(cur);
//         }
//     }
//     return results;
// };
// function num9020202 (betballs) {
//     var seedJson = { "1": 1, "2": 1, "3": 2, "4": 2, "5": 3, "6": 3, "7": 4, "8": 4, "9": 5, "10": 4, "11": 4, "12": 3, "13": 3, "14": 2, "15": 2, "16": 1, "17": 1 };
//     var bettinggroups = betballs.split(",");
//     return bettinggroups;
// };
// function num9020203 (betballs) {
//     var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     var results = [];
//     var bettinggroups = betballs.split(",");
//     return bettinggroups;
// };
// function num9030101 (betballs) {
//     var balls = betballs.split(",");
//     return balls;
// };
// function num9030102 (betballs) {
//     var results = [];
//     var balls = betballs.split(",");
//     for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
//         var cur = [];
//         for (var j = 0, len2 = balls.length; j < len2; j++) {
//             if (i >> j & 1) {
//                 cur.push(balls[j]);
//             }
//         }
//         if (cur.length == 2) {//2个号码
//             results.push(cur);
//         }
//     }
//     return results;
// };
// function num9040101 (betballs) {
//     //构建所有可能性号码组合
//     function doExchange (arr, depth) {
//         for (var i = 0; i < arr[depth].length; i++) {
//             result[depth] = arr[depth][i]
//             if (depth != arr.length - 1) {
//                 doExchange(arr, depth + 1)
//             } else {
//                 results.push(result.join(','));
//             }
//         }
//     }
//     var results = [];
//     var result = [];
//     var groups = [];
//     var ballGroups = betballs.split("|");
//     if (ballGroups.length != 3) return [];//没有选够3组，返回0注
//     var flag = ballGroups.some(function (it) {
//         return !it;
//     })
//     if (flag) {
//         return [];//里面有空值
//     }
//     for (var i = 0, len = ballGroups.length; i < len; i++) {
//         groups.push(ballGroups[i].split(","));
//     }
//     doExchange(groups, 0);
//     return results;
// };
// function num9040102 (betballs) {
//     //构建所有可能性号码组合
//     function doExchange (arr, depth) {
//         for (var i = 0; i < arr[depth].length; i++) {
//             result[depth] = arr[depth][i]
//             if (depth != arr.length - 1) {
//                 doExchange(arr, depth + 1)
//             } else {
//                 results.push(result.join(','));
//             }
//         }
//     }
//     var results = [];
//     var result = [];
//     var groups = [];
//     var ballGroups = betballs.split("|");
//     if (ballGroups.length != 2) return [];//没有选够2组，返回0注
//     var flag = ballGroups.some(function (it) {
//         return !it;
//     })
//     if (flag) {
//         return [];//里面有空值
//     }
//     for (var i = 0, len = ballGroups.length; i < len; i++) {
//         groups.push(ballGroups[i].split(","));
//     }
//     doExchange(groups, 0);
//     return results;
// };
// module.exports = {
//     '1010101': num1010101,
//     '1010102': num1010102,
//     '1010103': num1010103,
//     '1010201': num1010201,
//     '1010202': num1010202,
//     '1010203': num1010203,
//     '1020101': num1020101,
//     '1020102': num1020102,
//     '1020103': num1020103,
//     '1020201': num1020201,
//     '1020202': num1020202,
//     '1020301': num1020301,
//     '1020302': num1020302,
//     '1020303': num1020303,
//     '1020401': num1020401,
//     '1020402': num1020402,
//     '1030101': num1030101,
//     '1040101': num1040101,
//     '9010101': num9010101,
//     '9010102': num9010102,
//     '9010103': num9010103,
//     '9020101': num9020101,
//     '9020102': num9020102,
//     '9020103': num9020103,
//     '9020201': num9020201,
//     '9020202': num9020202,
//     '9020203': num9020203,
//     '9030101': num9030101,
//     '9030102': num9030102,
//     '9040101': num9040101,
//     '9040102': num9040102
// }

/**
 * 上方为之前pc计算公式，测试说不对，使用下方从移动端拿来的计算公式
 */
function num9010101(betballs) {
    //构建所有可能性号码组合
    function doExchange(arr, depth) {
        for (var i = 0; i < arr[depth].length; i++) {
            result[depth] = arr[depth][i]
            if (depth != arr.length - 1) {
                doExchange(arr, depth + 1)
            } else {
                results.push(result.join(','))
            }
        }
    }
    var results = []
    var result = []
    var groups = []
    var ballGroups = betballs.split('|')
    if (ballGroups.length != 3) return 0 //没有选够3组，返回0注
    var flag = ballGroups.some(function(it) {
        return !it
    })
    if (flag) {
        return [] //里面有空值
    }
    for (var i = 0, len = ballGroups.length; i < len; i++) {
        groups.push(ballGroups[i].split(','))
    }
    doExchange(groups, 0)
    return results
}

function num9010102(betballs) {
    var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var results = []
    var bettinggroups = betballs.split(',')
    for (var k = 0, len3 = bettinggroups.length; k < len3; k++) {
        var bettingValue = Number(bettinggroups[k])
        for (var i = 0, len1 = seed.length; i < len1; i++) {
            for (var j = 0, len2 = seed.length; j < len2; j++) {
                var dvalue = bettingValue - seed[i] - seed[j]
                if (seed.indexOf(dvalue) > -1) {
                    results.push([seed[i] + '', seed[j] + '', dvalue + ''])
                }
            }
        }
    }
    return results
}

function num9010103(betballs) {
    var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var results = []
    var bettinggroups = betballs.split(',')
    for (var i = 0, len1 = seed.length; i < len1; i++) {
        for (var j = 0, len2 = seed.length; j < len2; j++) {
            for (var k = 0, len3 = seed.length; k < len3; k++) {
                //var max=(i < j ? (j < k ? k : j) : (i < k ? k : i));
                //var min=(i > j ? (j > k ? k : j) : (i > k ? k : i));
                var dvalue =
                    seed[i < j ? (j < k ? k : j) : i < k ? k : i] -
                    seed[i > j ? (j > k ? k : j) : i > k ? k : i]
                if (bettinggroups.indexOf(dvalue + '') > -1) {
                    results.push([seed[i] + '', seed[j] + '', seed[k] + ''])
                }
            }
        }
    }
    return results
}

function num9020101(betballs) {
    //构建所有可能性号码组合
    function doExchange(arr, depth) {
        for (var i = 0; i < arr[depth].length; i++) {
            result[depth] = arr[depth][i]
            if (depth != arr.length - 1) {
                doExchange(arr, depth + 1)
            } else {
                results.push(result.join(','))
            }
        }
    }
    var results = []
    var result = []
    var groups = []
    var ballGroups = betballs.split('|')
    if (ballGroups.length != 2) return 0 //没有选够2组，返回0注
    var flag = ballGroups.some(function(it) {
        return !it
    })
    if (flag) {
        return [] //里面有空值
    }
    for (var i = 0, len = ballGroups.length; i < len; i++) {
        groups.push(ballGroups[i].split(','))
    }
    doExchange(groups, 0)
    return results
}

function num9020102(betballs) {
    if (!betballs) return []
    var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var results = []
    var bettinggroups = betballs.split(',')
    for (var k = 0, len3 = bettinggroups.length; k < len3; k++) {
        var bettingValue = Number(bettinggroups[k])
        for (var i = 0, len1 = seed.length; i < len1; i++) {
            var dvalue = bettingValue - seed[i]
            if (seed.indexOf(dvalue) > -1) {
                results.push([seed[i] + '', dvalue + ''])
            }
        }
    }
    return results
}

function num9020103(betballs) {
    if (!betballs) return []
    var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var results = []
    var bettinggroups = betballs.split(',')
    for (var i = 0, len1 = seed.length; i < len1; i++) {
        for (var j = 0, len2 = seed.length; j < len2; j++) {
            var dvalue = Math.abs(seed[i] - seed[j])
            if (bettinggroups.indexOf(dvalue + '') > -1) {
                results.push([seed[i] + '', seed[j] + ''])
            }
        }
    }
    return results
}

function num9020201(betballs) {
    if (!betballs) return []
    var results = []
    //构建所有可能性号码组合
    var balls = betballs.split(',')
    for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
        var cur = []
        for (var j = 0, len2 = balls.length; j < len2; j++) {
            if ((i >> j) & 1) {
                cur.push(balls[j])
            }
        }
        if (cur.length == 2) {
            //2个号码
            results.push(cur)
        }
    }
    return results
}

function num9020202(betballs) {
    if (!betballs) return []
    var seedJson = {
        '1': 1,
        '2': 1,
        '3': 2,
        '4': 2,
        '5': 3,
        '6': 3,
        '7': 4,
        '8': 4,
        '9': 5,
        '10': 4,
        '11': 4,
        '12': 3,
        '13': 3,
        '14': 2,
        '15': 2,
        '16': 1,
        '17': 1
    }
    var bettinggroups = betballs.split(',')
    var total = 0
    for (var k = 0, len3 = bettinggroups.length; k < len3; k++) {
        total += seedJson[bettinggroups[k]]
    }
    return {
        len: total
    }
}

function num9020203(betballs) {
    if (!betballs) return []
    var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var results = []
    var bettinggroups = betballs.split(',')

    return {
        len: bettinggroups.length * 9
    }
}

function num9030101(betballs) {
    if (!betballs) return []
    var balls = betballs.split(',')
    return balls
}

function num9030102(betballs) {
    if (!betballs) return []
    var results = []
    var balls = betballs.split(',')
    for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
        var cur = []
        for (var j = 0, len2 = balls.length; j < len2; j++) {
            if ((i >> j) & 1) {
                cur.push(balls[j])
            }
        }
        if (cur.length == 2) {
            //2个号码
            results.push(cur)
        }
    }
    return results
}

function num9040101(betballs) {
    //构建所有可能性号码组合
    if (!betballs) return []

    function doExchange(arr, depth) {
        for (var i = 0; i < arr[depth].length; i++) {
            result[depth] = arr[depth][i]
            if (depth != arr.length - 1) {
                doExchange(arr, depth + 1)
            } else {
                results.push(result.join(','))
            }
        }
    }
    var results = []
    var result = []
    var groups = []
    var ballGroups = betballs.split('|')
    if (ballGroups.length != 3) return 0 //没有选够3组，返回0注
    var flag = ballGroups.some(function(it) {
        return !it
    })
    if (flag) {
        return [] //里面有空值
    }
    for (var i = 0, len = ballGroups.length; i < len; i++) {
        groups.push(ballGroups[i].split(','))
    }
    doExchange(groups, 0)
    return results
}

function num9040102(betballs) {
    if (!betballs) return []
    //构建所有可能性号码组合
    function doExchange(arr, depth) {
        for (var i = 0; i < arr[depth].length; i++) {
            result[depth] = arr[depth][i]
            if (depth != arr.length - 1) {
                doExchange(arr, depth + 1)
            } else {
                results.push(result.join(','))
            }
        }
    }
    var results = []
    var result = []
    var groups = []
    var ballGroups = betballs.split('|')
    if (ballGroups.length != 2) return 0 //没有选够2组，返回0注
    var flag = ballGroups.some(function(it) {
        return !it
    })
    if (flag) {
        return [] //里面有空值
    }
    for (var i = 0, len = ballGroups.length; i < len; i++) {
        groups.push(ballGroups[i].split(','))
    }
    doExchange(groups, 0)
    return results
}

function num1010101(betballs) {
    if (!betballs) return []
    var results = [] //清空对象
    var result = []
    //玩法规则
    var groups = []
    var ballGroups = betballs.split('|')
    if (ballGroups.some(item => !item)) return results
    for (var i = 0, len = ballGroups.length; i < len; i++) {
        groups.push(ballGroups[i].split(','))
    }
    doExchange(groups, 0)

    function doExchange(arr, depth) {
        for (var i = 0; i < arr[depth].length; i++) {
            result[depth] = arr[depth][i]
            if (depth != arr.length - 1) {
                doExchange(arr, depth + 1)
            } else {
                results.push(result.join(','))
            }
        }
    }
    return results
}

function num1010102(betballs) {
    var results = []
    betballs = betballs.split(' ')
    betballs.forEach(item => {
        let sp = item.split('')
        if (
            sp.length === 3 &&
            /^[0-9]*$/.test(item) &&
            !results.some(vvv => vvv === item)
        ) {
            results.push(item)
        }
    })
    return results
}

function num1010103(betballs) {
    var results = []
    var bettinggroups = betballs.split(',')
    if (!bettinggroups[0]) return []
    var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (var k = 0, len3 = bettinggroups.length; k < len3; k++) {
        var bettingValue = Number(bettinggroups[k])
        for (var i = 0, len1 = seed.length; i < len1; i++) {
            for (var j = 0, len2 = seed.length; j < len2; j++) {
                var dvalue = bettingValue - seed[i] - seed[j]
                if (seed.indexOf(dvalue) > -1) {
                    results.push([seed[i] + '', seed[j] + '', dvalue + ''])
                }
            }
        }
    }
    return results
}

function num1010201(betballs) {
    //构建所有可能性号码组合
    var results = []
    var balls = betballs.split(',')
    for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
        var cur = []
        for (var j = 0, len2 = balls.length; j < len2; j++) {
            if ((i >> j) & 1) {
                cur.push(balls[j])
            }
        }
        if (cur.length == 2) {
            //二个号码
            results.push(cur)
        }
    }
    var farr = []
    //从0-9中任意选择2个或2个以上号码组成两注,且有1个号码重复
    for (var i = 0, len1 = results.length; i < len1; i++) {
        for (var j = 0, len2 = results[i].length; j < len2; j++) {
            var temp = results[i].concat()
            temp.push(results[i][j])
            farr.push(temp)
        }
    }
    return farr
}

function num1010202(betballs) {
    //构建所有可能性号码组合
    var results = []
    var balls = betballs.split(',')
    for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
        var cur = []
        for (var j = 0, len2 = balls.length; j < len2; j++) {
            if ((i >> j) & 1) {
                cur.push(balls[j])
            }
        }
        if (cur.length == 3) {
            //三个号码
            results.push(cur)
        }
    }
    return results
}

function num1010203(betballs) {
    var results = []
    betballs = betballs.split(' ')
    betballs.forEach(item => {
        let sp = item.split('')
        if (
            sp.length === 3 &&
            /^[0-9]*$/.test(item) &&
            !item.match(/^([0-9])\1\1$/) &&
            !results.some(vvv => vvv === item)
        ) {
            results.push(item)
        }
    })
    return results
}

function num1020101(betballs) {
    var results = []
    var result = []
    var groups = []
    var ballGroups = betballs.split('|')
    if (ballGroups.some(item => !item)) return results
    for (var i = 0, len = ballGroups.length; i < len; i++) {
        groups.push(ballGroups[i].split(','))
    }
    doExchange(groups, 0)

    function doExchange(arr, depth) {
        for (var i = 0; i < arr[depth].length; i++) {
            result[depth] = arr[depth][i]
            if (depth != arr.length - 1) {
                doExchange(arr, depth + 1)
            } else {
                results.push(result.join(','))
            }
        }
    }
    return results
}

function num1020102(betballs) {
    var results = []
    betballs = betballs.split(' ')
    betballs.forEach(item => {
        let sp = item.split('')
        if (
            sp.length === 2 &&
            /^[0-9]*$/.test(item) &&
            !results.some(vvv => vvv === item)
        ) {
            results.push(item)
        }
    })
    return results
}

function num1020103(betballs) {
    var results = []
    var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var bettinggroups = betballs.split(',')
    if (!bettinggroups[0]) return []
    for (var k = 0, len3 = bettinggroups.length; k < len3; k++) {
        var bettingValue = Number(bettinggroups[k])
        for (var i = 0, len1 = seed.length; i < len1; i++) {
            var dvalue = bettingValue - seed[i]
            if (seed.indexOf(dvalue) > -1) {
                results.push([seed[i] + '', dvalue + ''])
            }
        }
    }
    return results
}

function num1020201(betballs) {
    //构建所有可能性号码组合
    var results = []
    var balls = betballs.split(',')
    for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
        var cur = []
        for (var j = 0, len2 = balls.length; j < len2; j++) {
            if ((i >> j) & 1) {
                cur.push(balls[j])
            }
        }
        if (cur.length == 2) {
            //二个号码
            results.push(cur)
        }
    }
    return results
}

function num1020202(betballs) {
    var results = []
    betballs = betballs.split(' ')
    betballs.forEach(item => {
        let sp = item.split('')
        if (
            sp.length === 2 &&
            /^[0-9]*$/.test(item) &&
            !results.some(vvv => vvv === item)
        ) {
            results.push(item)
        }
    })
    return results
}
///
function num1020301(betballs) {
    var results = []
    var result = []
    var groups = []
    var ballGroups = betballs.split('|')
    if (ballGroups.some(item => !item)) return results
    for (var i = 0, len = ballGroups.length; i < len; i++) {
        groups.push(ballGroups[i].split(','))
    }
    doExchange(groups, 0)

    function doExchange(arr, depth) {
        for (var i = 0; i < arr[depth].length; i++) {
            result[depth] = arr[depth][i]
            if (depth != arr.length - 1) {
                doExchange(arr, depth + 1)
            } else {
                results.push(result.join(','))
            }
        }
    }
    return results
}

function num1020302(betballs) {
    var results = []
    betballs = betballs.split(' ')
    betballs.forEach(item => {
        let sp = item.split('')
        if (
            sp.length === 2 &&
            /^[0-9]*$/.test(item) &&
            !results.some(vvv => vvv === item)
        ) {
            results.push(item)
        }
    })
    return results
}

function num1020303(betballs) {
    var results = []
    var seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var bettinggroups = betballs.split(',')
    if (!bettinggroups[0]) return []
    for (var k = 0, len3 = bettinggroups.length; k < len3; k++) {
        var bettingValue = Number(bettinggroups[k])
        for (var i = 0, len1 = seed.length; i < len1; i++) {
            var dvalue = bettingValue - seed[i]
            if (seed.indexOf(dvalue) > -1) {
                results.push([seed[i] + '', dvalue + ''])
            }
        }
    }
    return results
}

function num1020401(betballs) {
    //构建所有可能性号码组合
    var results = []
    var balls = betballs.split(',')
    for (var i = 0, len1 = Math.pow(2, balls.length); i < len1; i++) {
        var cur = []
        for (var j = 0, len2 = balls.length; j < len2; j++) {
            if ((i >> j) & 1) {
                cur.push(balls[j])
            }
        }
        if (cur.length == 2) {
            //二个号码
            results.push(cur)
        }
    }
    return results
}

function num1020402(betballs) {
    var results = []
    betballs = betballs.split(' ')
    betballs.forEach(item => {
        let sp = item.split('')
        if (
            sp.length === 2 &&
            /^[0-9]*$/.test(item) &&
            !results.some(vvv => vvv === item)
        ) {
            results.push(item)
        }
    })
    return results
}

function num1030101(betballs) {
    var results = []
    var ballgroups = betballs.split('|')
    for (var i = 0, len1 = ballgroups.length; i < len1; i++) {
        var balls = ballgroups[i].split(',')
        for (var j = 0, len2 = balls.length; j < len2; j++) {
            if (balls[j] == '') continue
            results.push(balls[j])
        }
    }
    return results
}

function num1040101(betballs) {
    var balls = betballs.split(',')
    if (!balls[0]) return []
    return balls
}
export default {
    '1010101': num1010101,
    '1010102': num1010102,
    '1010103': num1010103,
    '1010201': num1010201,
    '1010202': num1010202,
    '1010203': num1010203,
    '1020101': num1020101,
    '1020102': num1020102,
    '1020103': num1020103,
    '1020201': num1020201,
    '1020202': num1020202,
    '1020301': num1020301,
    '1020302': num1020302,
    '1020303': num1020303,
    '1020401': num1020401,
    '1020402': num1020402,
    '1030101': num1030101,
    '1040101': num1040101,
    '9010101': num9010101,
    '9010102': num9010102,
    '9010103': num9010103,
    '9020101': num9020101,
    '9020102': num9020102,
    '9020103': num9020103,
    '9020201': num9020201,
    '9020202': num9020202,
    '9020203': num9020203,
    '9030101': num9030101,
    '9030102': num9030102,
    '9040101': num9040101,
    '9040102': num9040102
}
