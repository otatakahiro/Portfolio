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


$('#ac-cap2').click(function(){
  var elemPos = $(this).offset().top;//要素より、50px上の
	var windowHeight = $('#myChart').height();
	var scroll = $('.ac-cont').scrollTop(windowHeight);
  console.log(scroll)
  if (windowHeight){   
  const ctx = document.getElementById('myChart');

//この2つの値を設定するだけ!!
const percentage = 76 //グラフのパーセンテージ(76%)
const backgroundColor = 'rgba(255, 0, 0, 1)' //グラフの色(赤)

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
}
})

// const ctx = document.getElementById('myChart');

// //この2つの値を設定するだけ!!
// const percentage = 76 //グラフのパーセンテージ(76%)
// const backgroundColor = 'rgba(255, 0, 0, 1)' //グラフの色(赤)

// new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     datasets: [{
//       data: [percentage, 100 - percentage],
//       backgroundColor: [
//         backgroundColor,
//         'rgba(0, 0, 0, 0)',
//       ],
//       borderWidth: 0
//     }]
//   }
// })