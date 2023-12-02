
      const changePage = (ele) => {
        ele.querySelector(".link-change-page").click();
      };
      const mm1 = document.querySelector("#mm-1");
      const mm2 = document.querySelector("#mm-2");
      const mm3 = document.querySelector("#mm-3");
      const mm4 = document.querySelector("#mm-4");
      const overlay = document.querySelector(".overlay-menu");
      const menu33 = document.querySelector("#menu_33");
      const boxMobile = document.querySelector(".box-nav-in-mobile");
      overlay.onclick = ()=>  {
        menu33.classList.remove("mm-menu_opened");
        overlay.classList.remove("active");
        boxMobile.classList.remove("active");
      }
      function menuChange() {
        overlay.classList.add("active");
        boxMobile.classList.add("active");
        var hashPart = window.location.hash;
        document.querySelector("#menu_33").classList.add("mm-menu_opened");
      if(hashPart == "#mm-1") {
        mm1.classList.add("mm-menu_opened");
        mm1.classList.add("mm-panel_opened");
        mm2.classList.remove("mm-menu_opened");
        mm3.classList.remove("mm-menu_opened");
        mm4.classList.remove("mm-menu_opened");
        mm1.classList.remove("mm-hidden");
        mm2.classList.add("mm-hidden");
        mm3.classList.add("mm-hidden");
        mm4.classList.add("mm-hidden");
      } else
      if(hashPart === "#mm-2") {
        mm1.classList.remove("mm-menu_opened");
        mm2.classList.add("mm-menu_opened");
        mm2.classList.add("mm-panel_opened");
        mm3.classList.remove("mm-menu_opened");
        mm4.classList.remove("mm-menu_opened");
        mm2.classList.remove("mm-hidden");
        mm1.classList.add("mm-hidden");
        mm3.classList.add("mm-hidden");
        mm4.classList.add("mm-hidden");
      } else if(hashPart === "#mm-3") {
        mm1.classList.remove("mm-menu_opened");
        mm2.classList.remove("mm-menu_opened");
        mm3.classList.add("mm-panel_opened");
        mm3.classList.add("mm-menu_opened");
        mm4.classList.remove("mm-menu_opened");
        mm2.classList.add("mm-hidden");
        mm1.classList.add("mm-hidden");
        mm4.classList.add("mm-hidden");
        mm3.classList.remove("mm-hidden");
      } else if(hashPart === "#mm-4") {
        mm1.classList.remove("mm-menu_opened");
        mm2.classList.remove("mm-menu_opened");
        mm3.classList.remove("mm-menu_opened");
        mm4.classList.add("mm-menu_opened");
        mm4.classList.add("mm-panel_opened");
        mm2.classList.add("mm-hidden");
        mm3.classList.add("mm-hidden");
        mm1.classList.add("mm-hidden");
        mm4.classList.remove("mm-hidden");
      }
      }