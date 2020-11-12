function getStyle(obj, name) {
  return getComputedStyle(obj, null)[name];
}

// 嘗試創造一個可以執行簡單動畫的函數
/*
參數:
  obj:要執行動畫的變量
  attr:要執行動畫的樣式，比如 left top width height
  target:執行動畫的目標位置
  speed:移動的速度(正數向右移動，負數向左移動)
  callback:回調函數，這個函數會在動畫執行完畢以後執行
*/
function move(obj, attr, target, speed, callback) {
  clearInterval(obj.timer);

  // 獲得元素目前的位置
  var current = parseInt(getStyle(obj, attr));

  // 判斷 speed 的正負值
  // 如果從 0 向 800 移動，則 speed 為正
  // 如果從 800 向 0 移動，則 speed 為負
  if (current > target) {
    // 此時速度應為負值
    speed = -speed;
  }


  // 向執行動畫的對象中執行一個 timer 屬性，用來保存他自己的定時器的標示
  obj.timer = setInterval(() => {
    var oldValue = parseInt(getStyle(obj, attr));
    var newValue = oldValue + speed;

    // 向左移動時，需要判斷 newValue 是否小於 target
    // 向右移動時，需要判斷 newValue 是否大於 target
    if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
      newValue = target;
    }

    obj.style[attr] = newValue + 'px';

    if (newValue == target) {
      clearInterval(obj.timer);
      callback && callback();
    }
  }, 30);
}