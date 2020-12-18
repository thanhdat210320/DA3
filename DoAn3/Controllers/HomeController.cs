using DoAn3.Models;
using Microsoft.Ajax.Utilities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DoAn3.Controllers
{
    public class HomeController : Controller
    {
        BookShopDbConText _db = new BookShopDbConText();
        //thay đổi ở đây
        //dádas
        public ActionResult Index()
        {
            return View();
        }
        public PartialViewResult Topmenu()
        { 
            return PartialView("Topmenu");
        }
        public JsonResult getProductNews()
        {
            var result = _db.SanPhams.ToList().OrderBy(x=>x.NgayTao).Skip(0).Take(12);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        public JsonResult getProductShale()
        {
            var result = _db.SanPhams.ToList().OrderBy(x => x.NgayTao).Skip(0).Take(20);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Loaisanpham()
        {
            var result = _db.LoaiSanPhams.ToList();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        public ActionResult SlideBar()
        {
            return PartialView();
        }
    }
}