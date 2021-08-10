// problem-1 seerToMon

function seerToMon(seer){
    let result = seer / 40;
    return result;
}
    //call the function name

var output = seerToMon(120);
console.log(output);

// problem-2 totalSales

function totalSales(shirt, pant, shoes){
    var num1 = shirt * 100;
    var num2 = pant * 200;
    var num3 = shoes * 500;

    var totalPrice = num1 + num2 + num3;
    return totalPrice;
}
    //call the function name

var sales = totalSales(8, 5, 3);
console.log(sales);

// problem-3 deliverycost

function deliveryCost(pieces){
    var totalCost = 0;

    // 100 pis with deliveryCost = 100

    if(pieces <= 100){
        totalCost = pieces * 100;
    }

    // 100 upto order with deliverycost = 80

    else if(pieces <= 200){
        var firstCost = 100 * 100;
        var secondPiecesCount = pieces - 100;
        var secondCost = secondPiecesCount * 80;
        totalCost = firstCost + secondCost; 
    }

    // upto 200 order with deliveryCost = 50

    else{
        var firstCost = 100 * 100;
        var secondCost = 100 * 80;
        var thirdPiecesCount = pieces - 200;
        var thirdCost = thirdPiecesCount * 50;
        totalCost = firstCost + secondCost + thirdCost;
    }
    return totalCost;
    
}
    //call the function name

var pieces = deliveryCost(210);
console.log(pieces);

// problem-4 perfectFriend

function perfectFriend(names){
    for (const element of names){
        if(element.length == 5){
            return element;
        }
    }
}

    //declear array of string

const friendsName = ['mimu', 'mahi', 'shakil', 'fahim', 'sijan', 'twinkel', 'purno', 'kabbo', 'rifat'];

    //call the function name

const greatFriend = perfectFriend(friendsName);          
console.log(greatFriend);