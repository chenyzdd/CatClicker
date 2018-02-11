let selectCat = '';

let catInfo = {
    "catOne": 0,
    "catTwo": 0,
    "catThree": 0,
    "catFour": 0,
    "catFive": 0
};

let clickCatOne = function (e) {
    selectCat = 'catOne';
    document.getElementById('catImage').src = 'image/猫咪1.jpg';
    document.getElementById('catName').innerText = 'Cat name: '+ e.innerText;
    document.getElementById('catInfo').style = '';
    document.getElementById('clickCounter').innerText = 'Click counter: '+ catInfo['catOne'];
};
let clickCatTwo = function (e) {
    selectCat = 'catTwo';
    document.getElementById('catImage').src = 'image/猫咪2.jpg';
    document.getElementById('catName').innerText = 'Cat name: '+ e.innerText;
    document.getElementById('catInfo').style = '';
    document.getElementById('clickCounter').innerText = 'Click counter: '+ catInfo['catTwo'];
};
let clickCatThree = function (e) {
    selectCat = 'catThree';
    document.getElementById('catImage').src = 'image/猫咪3.jpg';
    document.getElementById('catName').innerText = 'Cat name: '+ e.innerText;
    document.getElementById('catInfo').style = '';
    document.getElementById('clickCounter').innerText = 'Click counter: '+ catInfo['catThree'];
};
let clickCatFour = function (e) {
    selectCat = 'catFour';
    document.getElementById('catImage').src = 'image/猫咪4.jpg';
    document.getElementById('catName').innerText = 'Cat name: '+ e.innerText;
    document.getElementById('catInfo').style = '';
    document.getElementById('clickCounter').innerText = 'Click counter: '+ catInfo['catFour'];
};
let clickCatFive = function (e) {
    selectCat = 'catFive';
    document.getElementById('catImage').src = 'image/猫咪5.jpg';
    document.getElementById('catName').innerText = 'Cat name: '+ e.innerText;
    document.getElementById('catInfo').style = '';
    document.getElementById('clickCounter').innerText = 'Click counter: '+ catInfo['catFive'];
};

let clickImage = function () {
    catInfo[selectCat] += 1;
    document.getElementById('clickCounter').innerText = 'Click counter: '+ catInfo[selectCat];
};