let ac = $('input');
let a = $('a');
let aboutPage = ac[1];

$('.logo').on('click', function(){
  ac[0].click();
})

let home = function(){
  ac[0].click();
};
let about = function(){
  ac[1].click();
};
let project = function(){
  ac[2].click();
};
let contact = function(){
  ac[3].click();
};
$('button').on('click',function(){
  ac[1].click();
});

//フェードインさせる要素を取得
const FADEIN_ELEM = document.getElementById('skills');
const Fade = document.getElementById('about');
const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');
const ctx5 = document.getElementById('myChart5');
const ctx6 = document.getElementById('myChart6');
const ctx7 = document.getElementById('myChart7');

//この2つの値を設定するだけ!!
const percentage = 76 //グラフのパーセンテージ(76%)
const backgroundColor = 'rgba(255, 0, 0, 1)' //グラフの色(赤)
//スクロール時に要素をフェードインさせるイベントを設定する
console.log(FADEIN_ELEM)
Fade.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_ELEM_TOP = FADEIN_ELEM.getBoundingClientRect().top;
    console.log(FADEIN_ELEM_TOP)
    //ブラウザの高さを取得
    const WINDOW_HEIGHT = window.innerHeight;
    // console.log(WINDOW_HEIGHT);
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP) + 100) {
        FADEIN_ELEM.classList.add('fadein-after');
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [percentage, 100 - percentage],
              backgroundColor: [
                backgroundColor,
                'rgba(0, 0, 0, 0)',
              ],
              borderWidth: 0
            }]
          }
        })
        new Chart(ctx2, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [percentage, 100 - percentage],
              backgroundColor: [
                backgroundColor,
                'rgba(0, 0, 0, 0)',
              ],
              borderWidth: 0
            }]
          }
        })
        new Chart(ctx3, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [percentage, 100 - percentage],
              backgroundColor: [
                backgroundColor,
                'rgba(0, 0, 0, 0)',
              ],
              borderWidth: 0
            }]
          }
        })
        new Chart(ctx4, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [percentage, 100 - percentage],
              backgroundColor: [
                backgroundColor,
                'rgba(0, 0, 0, 0)',
              ],
              borderWidth: 0
            }]
          }
        })
        new Chart(ctx5, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [percentage, 100 - percentage],
              backgroundColor: [
                backgroundColor,
                'rgba(0, 0, 0, 0)',
              ],
              borderWidth: 0
            }]
          }
        })
        new Chart(ctx6, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [percentage, 100 - percentage],
              backgroundColor: [
                backgroundColor,
                'rgba(0, 0, 0, 0)',
              ],
              borderWidth: 0
            }]
          }
        })
        new Chart(ctx7, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [percentage, 100 - percentage],
              backgroundColor: [
                backgroundColor,
                'rgba(0, 0, 0, 0)',
              ],
              borderWidth: 0
            }]
          }
        })
    }else{
        FADEIN_ELEM.classList.remove('fadein-after');
    }

});

