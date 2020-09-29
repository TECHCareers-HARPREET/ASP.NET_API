﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NetReact.Controllers
{
    public class FormExampleController : Controller
    {
        


        public IActionResult Index()
        {
            return RedirectToAction("Input");
        }

        public IActionResult Input()
        {
            return View();
        }

        public IActionResult Output(string name, string email, string phone)
        {
            ViewBag.Name = name ?? "No Name Provided";
            ViewBag.Email = email ?? "No Email Provided";
            ViewBag.Phone = phone ?? "No Phone Provided";

            return View();
        }
    }
}