$(document).ready(function() {
    var array = JSON.parse(localStorage.getItem('dulieuchitiet'));
    var html ='';
    html+='<div class="col l-5">';
    html+='<div class="product-img">';
    html+='<img src="'+array.img+'" alt="" class="img">';
    html+='</div>';
    html+='<div class="wrap-btn">';
    html+='<button type="button" class="btn-add-cart">Thêm vào giỏ hàng</button>';
    html+='<button type="button" class="btn-buy">Mua ngay</button>';
    html+='</div>';
    html+='</div>';
    html+='<div class="col l-7">';
    html+='<div class="deatil-product">';
    html+='<h2 class="name-prodcut">';
    html+=''+array.name+'';
    html+='</h2>';
    html+='<div class="product-view">';
    html+='<div class="product-view-one">';
    html+=' <span>Nhà cung cấp: <span class="product-view--color">FIRST NEW</span></span>';
    html+='<span>Tác giả:<span class="product-view--color">Dr blair thomas</span> </span>';
    html+='</div>';
    html+='<div class="product-view-two">';
    html+='     <span>Nhà xuất bản: <span class="product-view--color">NXB tổng hợp TPHCM</span></span>';
    html+='   <span>Hình thức bìa: <span class="product-view--color">Bìa mềm</span></span>';
    html+='  </div>';
    html+='  <div class="product-icon-start">';
    html+='       <i class="far fa-star start"></i>';
    html+='        <i class="far fa-star start"></i>';
    html+='         <i class="far fa-star start"></i>';
    html+='          <i class="far fa-star start"></i>';
    html+='       </div>';
    html+='       <div class="product-price-wrap">';
    html+='            <span class="price-new">'+array.pricenew+' đ</span>';
    html+='           <span class="price-old">'+array.priceold+' đ</span>';
    html+='       </div>';
    html+='        <div class="expected_delivery">';
    html+='           <span class="expected_delivery-item">thời gian giao hàng</span>';
    html+='           <span>Địa điểm giao hàng</span>';
    html+='       </div>';
    html+='       <div class="product-count">';
    html+='           <label for="">Số lượng:</label>';
    html+='          <div class="count-wrap">';
    html+='               <input type="button" name="" id="giam" value="-">';
    html+='                <input type="text" name="" id="input" value="1">';
    html+='              <input type="button" name="tang" id="tang" value="+">';
    html+='           </div>  ';     
    html+='       </div>';
    html+='       <div class="product-even">';
    html+='          <p>Nhập mã FHSAPP - Giảm thêm 30% (tối đa 20K) cho ĐH từ 49K (Áp dụng cho khách hàng mua trên App, không áp dụng cho sách Giáo khoa - Tham khảo và sách Ngoại văn)</p>';
    html+='           <p>Nhập mã FHSAPP06 - Giảm thêm 10% (tối đa 30K) cho ĐH từ 249K (Áp dụng cho khách hàng mua trên App, không áp dụng cho sách Giáo khoa - Tham khảo và sách Ngoại văn)</p>';
    html+='        </div>';
    html+='   </div>';
    html+=' </div>';
    html+='</div>';
    document.getElementById('wrap-product').innerHTML=html;
})

$(document).ready(function() {
    $('#giam').click(function() {
        var sl = $('#input').val();
        $('#input').val(Number(sl)-1);  
        if(sl<=1){
            alert("số lượng không nhỏ hơn 1");
            $('#input').val("1");
        }
    })
    $('#tang').click(function() {
        var sl = $('#input').val();
        $('#input').val(Number(sl)+1);  
    })
})

$(document).ready(function() {
    $('.btn-add-cart').off('click').on('click',function() {
        var array = JSON.parse(localStorage.getItem('dulieuchitiet'));
        //id,ảnh,tên,giá,số lượng
        var id = array.id;
        var img = array.img;
        var name = array.name;
        var price = array.pricenew;
        var count = $('#input').val();

        localStorage.setItem('id'+id,id);
        localStorage.setItem('img'+id,img);
        localStorage.setItem('name'+id,name);
        localStorage.setItem('price'+id,price);
        localStorage.setItem('count'+id,count);
        loadcart();
    })
})