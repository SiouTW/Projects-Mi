var imgNext = document.getElementById('imgNext');
var imgPrev = document.getElementById('imgPrev');
var allpointera = document.getElementById('pointer').children;

var imgofindex = 0;
var allbannerImg = document.getElementsByClassName('bannerImg');
allbannerImg[0].style.zIndex = 1;

imgNext.onclick = function () {
  allpointera[imgofindex].className = ''
  imgofindex++;
  if (imgofindex == allbannerImg.length)
    imgofindex = 0
  for (var i = 0; i < allbannerImg.length; i++) {
    allbannerImg[i].style.zIndex = -1;
    console.log(imgofindex);
  }
  allpointera[imgofindex].className = 'active'
  allbannerImg[imgofindex].style.zIndex = 1;
  console.log(imgofindex);
}

imgPrev.onclick = function () {
  allpointera[imgofindex].className = ''
  imgofindex--;
  if (imgofindex < 0)
    imgofindex = allbannerImg.length - 1
  for (var i = 0; i < allbannerImg.length; i++) {
    allbannerImg[i].style.zIndex = -1;
    console.log(imgofindex);
  }
  allpointera[imgofindex].className = 'active'
  allbannerImg[imgofindex].style.zIndex = 1;
  console.log(imgofindex);
}

// 輪播圖

var carouselUl = document.getElementById('carouselUl')
var carouselLi = document.getElementsByClassName('carouselLi')
console.log(carouselLi.length);
// 在輪播圖的第幾頁
var carouselLiIndex = 0;

// 如果在第一頁或最後一頁，需要讓左右按鈕其一失去功能，並改變顏色
function whatIsCarouselIndex(index) {
  ChangeDisabled('mi-shop-left', 1);
  ChangeDisabled('mi-shop-right', 1);
  if (carouselLiIndex == 0) {
    // console.log(carouselLiIndex);
    ChangeDisabled('mi-shop-left', 0);
    miShopLeft.style.color = '#b0b0b0';
  } else if (carouselLiIndex == carouselLi.length / 5 - 1) {
    // console.log(carouselLiIndex) ;
    ChangeDisabled('mi-shop-right', 0);
    miShopRight.style.color = '#b0b0b0';
  }
  // console.log(carouselLiIndex);
}

var miShopLeft = document.getElementById('mi-shop-left');
var miShopRight = document.getElementById('mi-shop-right');

whatIsCarouselIndex(carouselLiIndex);
// 初始化箭頭顏色


miShopLeft.onclick = function () {
  if (carouselLiIndex > 0)
    carouselLiIndex--;
  whatIsCarouselIndex(carouselLiIndex);
  move(carouselUl, 'left', -1240 * carouselLiIndex, 40)

}

miShopRight.onclick = function () {
  if (carouselLiIndex < carouselLi.length / 5 - 1)
    carouselLiIndex++;
  whatIsCarouselIndex(carouselLiIndex);
  move(carouselUl, 'left', -1240 * carouselLiIndex, 40)
}



// 把箭頭顏色都變成黑色
function ChangeDisabled(id, value) {
  miShopLeft.style.color = 'black';
  miShopRight.style.color = 'black';
  if (value == '1') {
    // 變更欄位為可用
    document.getElementById(id).disabled = false;
  } else {
    // 變更欄位為禁用
    document.getElementById(id).disabled = true;
  }
}

miShopLeft.onmouseover = function () {
  //將颜色設定為橘色
  if (carouselLiIndex != 0)
    this.style.color = '#ff6700';
};

miShopLeft.onmouseout = function () {
  //將颜色設定為橘色
  this.style.color = "";
  if (carouselLiIndex == 0) {
    miShopLeft.style.color = '#b0b0b0';
  } else if (carouselLiIndex == carouselLi.length / 5 - 1) {
    miShopRight.style.color = '#b0b0b0';
  }
};

miShopRight.onmouseover = function () {
  //將颜色設定為橘色
  if (carouselLiIndex != carouselLi.length / 5 - 1)
    this.style.color = '#ff6700';
};

miShopRight.onmouseout = function () {
  //將颜色設定為橘色
  this.style.color = "";
  if (carouselLiIndex == 0) {
    miShopLeft.style.color = '#b0b0b0';
  } else if (carouselLiIndex == carouselLi.length / 5 - 1) {
    miShopRight.style.color = '#b0b0b0';
  }
};