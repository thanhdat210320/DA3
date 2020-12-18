$(document).ready(function() {
    var stt = 0;
    var starImg = $('.slide:first').attr('stt');
    var lastImg = $('.slide:last').attr('stt');
    $('.slide').each(function() {
        if($(this).is(':visible')){
            stt =$(this).attr('stt');
        }
    })
    $('#Next').click(function() {
        next = ++stt;
        if(next >= lastImg){
            stt= starImg-1;
        }
        $('.slide').hide();//ẩn ảnh thứ nhất
        $('.slide').eq(next).show();//hiện ảnh thứ 2
    })
    $('#Prev').click(function() {
        clearInterval(c);
        prev = --stt;
        if(prev < starImg){
            stt = lastImg;
        }
        $('.slide').hide();
        $('.slide').eq(prev).show();
        $('.section-slide ul li').removeClass('active');
        $('.section-slide ul li').eq(prev).addClass('active');   
    })   
   var c= setInterval(() => {
        $('#Next').click();
    },2000);
})


$(document).ready(function() {
  loadcart();
})
function loadcart(){
    html='';
    var total=0;
    for(var i=0;i<100;i++){
        if(localStorage.getItem('idsp'+i)!=null){
            html+='<li class="header__cart-item">';
            html+='<img src="'+localStorage.getItem('imgsp'+i)+'" alt="" class="header__cart-img">';
            html+='<div class="header__cart-item-info">';
            html+='<div class="header__cart-item-head">';
            html+='<h5 class="header__cart-item-name">'+localStorage.getItem('namesp'+i)+'</h5>';
            html+='<div class="header__cart-item-price-warp">';
            html+='<span class="header__cart-item-price">'+localStorage.getItem('pricesp'+i)+'</span>';
            html+='<span class="header__cart-item-multipl">x</span>';
            html+='<span class="header__cart-item-qnt">'+localStorage.getItem('countsp'+i)+'</span>';
            html+='</div>';
            html+='</div>';
            html+='<div class="header__cart-item-body">';
            html+='<span class="header__cart-item-discription">tái bản 2020</span>';
            html+='<span class="header__cart-item-remove" onclick="onDeleteProduct('+i+')">Xóa</span>';
            html+='</div>';
            html+='</div>';
            html+='</li>';
            var pri =Number(localStorage.getItem("pricesp"+i))*localStorage.getItem("countsp"+i);
            total+=pri;
            console.log(pri);
            console.log(localStorage.getItem('pricesp'+i));
        }
        $('#totalPrice').text(total);
        document.getElementById('cart-list').innerHTML=html; 
    }
   
  
}
function onDeleteProduct(index){
    deleteProduct(index)
 }
 function deleteProduct(index){
 localStorage.removeItem("linksp"+index)
 localStorage.removeItem("namesp"+index)
 localStorage.removeItem("countsp"+index)
 localStorage.removeItem("pricesp"+index)
 localStorage.removeItem("idsp"+index)
 loadcart();
 }
 

var temp ={
    
}
var array=[]

$(".flash-sale-link").each(function ()  {
        temp={
            id: $(this).attr('id'),
            img: $(this).children('.flash-sale-warp').children('.flash-sale__img').attr('src'),
            name:$(this).children('.flash-sale__info').children('.flash-sale__info-name').text(),
            priceold:$(this).children('.flash-sale__info').children('.flash-sale__info-price-old').text(),
            pricenew:$(this).children('.flash-sale__info').children('.flash-sale__info-price').text(),
            count:1
        };
        array.push(temp);
})
console.log(array);

console.log(array[0])

//code phần chi tiết sp

$(".flash-sale-link").click(function ()  {
       var id= $(this).attr('id');
       var img= $(this).children('.flash-sale-warp').children('.flash-sale__img').attr('src');
       var name=$(this).children('.flash-sale__info').children('.flash-sale__info-name').text();
       var priceold=$(this).children('.flash-sale__info').children('.flash-sale__info-price-old').text();
       var pricenew=$(this).children('.flash-sale__info').children('.flash-sale__info-price').text();
       var count=1
       for(var i=0;i<array.length;i++){
           if(array[i].id==id){
               localStorage.setItem('dulieuchitiet',JSON.stringify(array[i]));
           }
       }   
})






// xóa cart
// var remove_cart = document.getElementsByClassName("btn-delete");
// for (var i = 0; i < remove_cart.length; i++) {
//   var button = remove_cart[i]
//   button.addEventListener("click", function () {
//     var button_remove = event.target
//     button_remove.parentElement.parentElement.remove()
//   })
// }
function xoa(elm)
{
    elm.parent().parent().parent().remove()
}
// update cart 
function updatecart() {
    var tbody = document.getElementsByClassName("tbody")[0];
    var total = 0;
    for (var i = 0; i < tbody.length; i++) {
      var tbody = tbody[i]
      var price = tbody.getElementsByClassName("price")[0]
      var count = tbody.getElementsByClassName("count")[0]
      var price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
      var quantity = quantity_item.value // lấy giá trị trong thẻ input
      total = total + (price * quantity)
    }
    document.getElementsByClassName("totalPrice")[0].innerText = total + 'VNĐ'
    // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
  }



  //làm trang chi tiết sản phẩm 
  function loadchitiet(){
      html = '';

  }