import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})

export class ThemeComponent {

  lightMode(){
     var  light = document.getElementById("light-theme");
     var  drk = document.getElementById("dark-theme");

     var  contain = document.getElementById("main-container");
     var typingfie = document.getElementById("typing-field");


     var cal = document.getElementById("calculation");
     var answer = document.getElementById("answer");

     var themeHandler = document.getElementById("theme-handler");

     if(themeHandler != null){
      themeHandler.style.backgroundColor = "rgba(239, 237, 237, 1)";
     }


     if(cal != null && answer != null){
        cal.style.color = "black";
        answer.style.color = "black";
     }

    


    var btns = document.getElementsByTagName("button");

    if(btns != null){

      for(let i = 0 ; i < btns.length; i++){
        btns[i].style.backgroundColor = "white";
        btns[i].style.color = "black";
        btns[i].style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";
      }
    }


     if(drk != null && light != null){
          drk.style.opacity = "30%"
          light.style.opacity = "100%"
          light.style.cursor = "auto"
          drk.style.cursor = "pointer"


          // set all colors to white
        if(contain != null && typingfie != null){
          contain.style.backgroundColor = "white"
          typingfie.style.backgroundColor = "white"
        }


     }


  }

  darkMode(){
    var  light = document.getElementById("light-theme");
    var  drk = document.getElementById("dark-theme");

    var  contain = document.getElementById("main-container");

    var typingfie = document.getElementById("typing-field");

    var btns = document.getElementsByTagName("button");

    var themeHandler = document.getElementById("theme-handler");

     if(themeHandler != null){
      themeHandler.style.backgroundColor = "black";
     }

    var cal = document.getElementById("calculation");
     var answer = document.getElementById("answer");


     if(cal != null && answer != null){
        cal.style.color = "white";
        answer.style.color = "white";
     }

    if(btns != null){

      for(let i = 0 ; i < btns.length; i++){
        btns[i].style.backgroundColor = "#282D31";
        btns[i].style.color = "white";
        btns[i].style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
      }
    }


    if(drk != null && light != null){
         drk.style.opacity = "100%"
         light.style.opacity = "30%"
         drk.style.cursor = "auto"
          light.style.cursor = "pointer"

          if(contain != null && typingfie != null){
            contain.style.backgroundColor = "#2a2e33"
            typingfie.style.backgroundColor = "#2a2e33"
          }
    }
  }

}



