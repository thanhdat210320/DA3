using DoAn3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DoAn3.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        BookShopDbConText _db = new BookShopDbConText();
        public ActionResult GetListOfProductByType()
        {
            int id = Convert.ToInt32(TempData["Key"]);
            var listProduc =  _db.SanPhams.Where(x => x.MaLoai == id).ToList();
            return Json(listProduc,JsonRequestBehavior.AllowGet);
        }
        public ActionResult ProductCategoryDetail(int id)
        {
            TempData["Key"] = id;
            return View();
        }

        public ActionResult ProductDetail(int id)
        {
            TempData["key"] = id;
            return View();
        }
        public JsonResult GetProductDetail()
        {
            int id = Convert.ToInt32(TempData["key"]);
            var productItem = _db.SanPhams.Where(x => x.MaSP == id).ToList();
            return Json(productItem, JsonRequestBehavior.AllowGet);
        }

        
    }
}