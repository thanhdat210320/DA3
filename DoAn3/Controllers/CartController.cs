using DoAn3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DoAn3.Controllers
{
    public class CartController : Controller
    {
        // GET: Cart
        private const string CartSession = "CartSession";
        public ActionResult Index()
        {
            //var Cart = Session[CartSession];
            //var list = new List<CardItem>();
            //if(Cart !=null)
            //{
            //    list = (List<CardItem>)Cart;
            //}
            return View();
        }
        public ActionResult AddItem(int MaSP, int SoLuong)
        {
            //var Cart = Session[CartSession];
            //if(Cart != null)
            //{
            //    var list = (List<CardItem>)Cart;
            //    if (list.Exists(x=>x.Product.ID==MaSP))
            //    {
            //        foreach (var item in list)
            //        {
            //            //if (item == MaSP)
            //            //{
            //            //    item.SoLuong += SoLuong;
            //            //}
            //        }
            //    }else
            //    {
            //        //tạo mới đối tượng
            //        var item = new CardItem();
            //        item.MaSP = MaSP;
            //        item.SoLuong = SoLuong;
            //        list.Add(item);
            //    }
            //    //Gán vào session
            //    Session[CartSession] = list;
            //}
            //else
            //{
            //    //tạo mới đối tượng
            //    var item = new CardItem();
            //    item.MaSP = MaSP;
            //    item.SoLuong = SoLuong;
            //    var list = new List<CardItem>();
            //    //Gán vào session
            //    Session[CartSession] = list;
            //}
            return View();
        }
    }
}