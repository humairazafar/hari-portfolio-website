//Meny show and Hidden 

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),


      //Menu Show =====/
      //validate if the constant exists 

      if(navToggle){
          navToggle.addEventListener('click', () =>{
              navMenu.classList.add('show-menu')
          })
      }

      if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
      }

      //===============remove mobile menu =========///

      const navLink = document.querySelectorAll('.nav__link')

      function linkAction(){
          const navMenu  = document.getElementById('nav-menu')
          //when we clisck on each nav__lick we remove the show-menu class
          navMenu.classList.remove('show-menu')
      }

      navLink.forEach(n => n.addEventListener('click', linkAction))