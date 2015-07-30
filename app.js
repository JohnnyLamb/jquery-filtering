$(document).ready(function() {

  $('.image-container').append("<article class='home' data-price='20000'><img src='img/myfirstcabin.jpg' /><h4>$20,000</h4></article>");
  $('.image-container').append("<article class='home' data-price='50000'><img src='img/ontheprairy.jpg' /><h4>$50,000</h4></article>");
  $('.image-container').append("<article class='home' data-price='200000'><img src='img/redcabin.jpg' /><h4>$200,000</h4></article>");



  $('.dark').on("click", function() {
    $('body').css('background', "url(img/dark_wood.png)");
  });
  $('.light').on("click", function() {
    $('body').css('background', "url(img/tileable_wood_texture.png)");
  });
  $('.textures').css('width', '150px').append('<span class="forest"></span>');
  $('.forest').css('background', "url(img/forest.jpg)");
  $('.forest').on("click", function() {
    $('body').css(
    {
      'background-size': 'contain',
      'background': "url(img/forest.jpg)"
        }
      );
  });




  $('.low').on("click", function(){

    $('.image-container article').sort(sort_article).appendTo('.image-container');

          function sort_article(a,b){
          return ($(b).data('price')) < ($(a).data('price')) ? 1 : -1;
        }

    //   var sortedArray= [];
    //   var homeArray = $('.home');
    //   for (var i = 0 ; i < homeArray.length; i++){

    //   var dataPrice = $('.home')[i].dataset.price;
    //   sortedArray.push(dataPrice);

    // }
    // // sort low to hi
    //   sortedArray.sort(function(a, b){return a - b});
    //   console.log(sortedArray);

  });

    $('.high').on("click", function(){

    $('.image-container article').sort(sort_article).appendTo('.image-container');

          function sort_article(a,b){
          return ($(b).data('price')) > ($(a).data('price')) ? 1 : -1;
        }


    //   var sortedArray= [];
    //   var homeArray = $('.home');
    //   for (var i = 0 ; i < homeArray.length; i++){

    //   var dataPrice = $('.home')[i].dataset.price;
    //   sortedArray.push(dataPrice);

    // }
    // // sort hi to low
    //   sortedArray.sort(function(a, b){return b - a});
    //   console.log(homeArray);
    //   console.log(sortedArray);

  });


});
