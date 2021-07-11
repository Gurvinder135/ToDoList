import { object, domCreate} from "./object.js";
import { createoption } from "./project.js";
export let array=[];
export function hide(){
document.querySelector(".left_header>div:nth-child(1)>img").addEventListener("click",function(){
    if(document.querySelector(".left_panel").classList.contains("hide")){
    document.querySelector(".left_panel").classList.remove("hide");}
    else{
        document.querySelector(".left_panel").classList.add("hide");
    }
    
});
document.querySelector(".right_header>div>img").addEventListener("click",function(){
   createoption();
    document.querySelector("#title").value="";
     document.querySelector("#desc").value="";
     document.querySelector("#date").value="";
    document.querySelector("#pri").value="";
     document.querySelector("#project").value="";
    document.querySelector(".popup").classList.remove("hide");
    document.querySelector("body div").classList.add("bg");
    document.querySelector("button:nth-of-type(2)").classList.remove("hide");
    document.querySelector("button:nth-of-type(3)").classList.add("hide");
 });

 document.querySelectorAll(".popup>button").forEach(function(e){e.addEventListener("click",function(){
    
        if(e.textContent==="Close"){
        document.querySelector(".popup").classList.add("hide");
        document.querySelector("body div").classList.remove("bg");
        } else if(e.textContent==="Submit"){

            let title=document.querySelector("#title").value;
        let desc=document.querySelector("#desc").value;
        let date=document.querySelector("#date").value;
        let pri=document.querySelector("#pri").value;
        let project=document.querySelector("#project").value;
                if(title===""||desc===""||date===""||pri===""||project===""){
                    alert("pleaste input all values");
                    return;
                }else{
            document.querySelector(".popup").classList.add("hide");
        document.querySelector("body div").classList.remove("bg");
let obj=object(title,desc,date,pri,project);

       array.push(obj) ;
       domCreate();
      
    }}
  
}

);})
}