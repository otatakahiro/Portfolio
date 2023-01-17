// // .s_10 .accordion_one
// $(function(){
//   //.accordion_oneの中の.accordion_headerがクリックされたら
//   $('.sample-accordion .ac-content input').click(function(){
//     //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerの横幅を開いたり閉じたりする。
//     $(this).next().animate({width:'toggle'}, {duration: 2000, easing: 'swing'});
//     $(this).toggleClass("ac-cont");
//     //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
//     $('.sample-accordion .ac-content input').not($(this)).next().animate({width:'hide'},{duration:2000, easing: 'swing'});
//     $('.ac-cont').not($(this)).removeClass("open");
//     $('.ac-cont').not($(this)).toggleClass("open");
//   });
// });
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
  // $('#home').slideDown(500);
}
let project = function(){
  ac[2].click();
};
let contact = function(){
  ac[3].click();
};
// $(function() {
//   $("input").click(function() {
//       $(this).toggleClass("click");
//   });
// });
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
// const percentage = 76 //グラフのパーセンテージ(76%)
// const backgroundColor = 'rgba(255, 0, 0, 1)' //グラフの色(赤)
//スクロール時に要素をフェードインさせるイベントを設定する
Fade.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_ELEM_TOP = FADEIN_ELEM.getBoundingClientRect().top;
    console.log(FADEIN_ELEM_TOP)
    //ブラウザの高さを取得
    const WINDOW_HEIGHT = window.innerHeight;
    console.log(WINDOW_HEIGHT)
    // console.log(WINDOW_HEIGHT);
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP) + 200) {
        FADEIN_ELEM.classList.add('fadein-after');
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [90, 100 - 90],
              backgroundColor: [
                '#E34C26',
                'rgba(0, 0, 0, 0)',
              ],
              borderWidth: 0,
            }]
          },
          options: {
                tooltips: {
                enabled: false
            }
          }
        })
        new Chart(ctx2, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [85, 100 - 85],
              backgroundColor: [
                '#264DE4',
                'rgba(0, 0, 0, 0)',
              ],
              borderWidth: 0
            }]
          },
          options: {
            tooltips: {
            enabled: false
        }
      }
        })
        new Chart(ctx3, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [68, 100 - 68],
              backgroundColor: [
                '#787CB5',
                'rgba(0, 0, 0, 0)',
              ],
              borderWidth: 0
            }]
          },
          options: {
            tooltips: {
            enabled: false
        }
      }
        })
        new Chart(ctx4, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [65, 100 - 65],
              backgroundColor: [
                '#61DBFB',
                'rgba(0, 0, 0, 0)',
              ],
              borderWidth: 0
            }]
          },
          options: {
            tooltips: {
            enabled: false
        }
      }
        })
        new Chart(ctx5, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [75, 100 - 75],
              backgroundColor: [
                '#F0DB4F',
                'rgba(0, 0, 0, 0)',
              ],
              borderWidth: 0
            }]
          },
          options: {
            tooltips: {
            enabled: false
        }
      }
        })
        new Chart(ctx6, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [82, 100 - 82],
              backgroundColor: [
                '#DD1D16',
                'rgba(0, 0, 0, 0)',
              ],
              borderWidth: 0
            }]
          },
          options: {
            tooltips: {
            enabled: false
        }
      }
        })
        new Chart(ctx7, {
          type: 'doughnut',
          data: {
            datasets: [{
              data: [80, 100 - 80],
              backgroundColor: [
                '#41B883',
                'rgba(0, 0, 0, 0)',
              ],
              borderWidth: 0
            }]
          },
          options: {
                tooltips: {
                enabled: false
            }
          }
        })
    }else{
        FADEIN_ELEM.classList.remove('fadein-after');
    }
});


