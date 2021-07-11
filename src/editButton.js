import { array } from "./hidePanel.js";
import { domCreate } from "./object.js";
export function deleteButton(){
    let title=document.querySelector(".titles")
    title.addEventListener("click", (e)=>{
        if(e.target.classList.value==="delete"){
            let value=e.target.parentElement.classList.value[1];
 array.splice(value,1);
 domCreate();
    }})
}

export function editButton(){
    let title=document.querySelector(".titles")
    title.addEventListener("click", (e)=>{
      
        if(e.target.classList.value==="edit"){
            
            console.log(e)
            let value=e.target.parentElement.classList.value[1];
            document.querySelector("#title").value=array[value].title;
            document.querySelector("#desc").value=array[value].desc;
            document.querySelector("#date").value=array[value].date;
           document.querySelector("#pri").value=array[value].priority;
            document.querySelector("#project").value=array[value].project;
            document.querySelector(".popup").classList.remove("hide");
    document.querySelector("body div").classList.add("bg");
    document.querySelector("button:nth-of-type(2)").classList.add("hide");
    document.querySelector("button:nth-of-type(3)").classList.remove("hide");
    document.querySelectorAll(".popup>button").forEach(function(e){e.addEventListener("click",function(){
    
            if(e.textContent==="Close"){
                document.querySelector(".popup").classList.add("hide");
                document.querySelector("body div").classList.remove("bg");
                } else if(e.textContent==="Update"){
                    console.log("edit");
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
                array[value].title=title;
                array[value].desc=desc;
                array[value].date=date;
                array[value].priority=pri;
                array[value].project=project;
               console.log(value);
               domCreate();
        }}})})}})
}