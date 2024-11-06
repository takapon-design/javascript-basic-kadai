// HTMLが読み込まれたときに実行する
$(document).ready(function(){
  console.log('loadイベントが発生しました');
});

// 画面がスクロールされたときに実行する
$(window).on('scroll', function(){
  console.log('scrollイベントが発生しました');
});