// topjs

jQuery(function($){
  $('#article').masonry({
    itemSelector: '.item', //対象するセレクタ指定
    columnWidth: 23.5%, //カラム幅
    isFitWidth: true  //親要素の幅に合わせてカラム数を自動調整
  });
});
