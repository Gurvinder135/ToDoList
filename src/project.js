import { array } from "./hidePanel.js";
import { domCreate } from "./object.js";


export function newProject(){
    document.querySelector(".new").addEventListener("click",()=>{
        document.querySelector("#name").value="";
    document.querySelector("body div").classList.add("bg");
    document.querySelector(".projectPopup").classList.remove("hide");
    projectPopup();
     } )}

function projectPopup(){
    document.querySelector(".projectFlex").addEventListener("click", (e)=>{
      
        if(e.target.innerText==="Close"){
            document.querySelector("body div").classList.remove("bg");
    document.querySelector(".projectPopup").classList.add("hide");
    document.querySelector("#name").value="";}
    else if(e.target.innerText==="Add"){
        if(document.querySelector("#name").value===""){
            alert("Please enter real value");
        } else{
        document.querySelector("body div").classList.remove("bg");
document.querySelector(".projectPopup").classList.add("hide");
projectArray.setarray(document.querySelector("#name").value);
createProDom();
}
}})};

let projectArray=(function (){
    let proArray=[];
    return{setarray: function(value){
        proArray.push(value);
    },
    getarray: function(){
        return proArray;
    },
    editArray: function(value){
        proArray.splice(value,1);
    }
}})();

function createProDom(){
    document.querySelector(".projectCont").textContent="";
    let array= projectArray.getarray();
    for(let i=0;i<array.length;i++){
        let mainDiv=document.createElement("div");
        mainDiv.classList.add("newProject");
        mainDiv.classList.add(`+${i}`);
        document.querySelector(".projectCont").appendChild(mainDiv);
        let childDiv=document.createElement("div");
        childDiv.classList.add("divProject");
        childDiv.textContent=`${array[i]}`;
        mainDiv.appendChild(childDiv);
        let imgDiv=document.createElement("div");
        imgDiv.classList.add("projectImg");
        mainDiv.appendChild(imgDiv);
        let img=document.createElement("img");
        img.src="/img/bin.png";
        imgDiv.appendChild(img);
}}
(function (){
    let title=document.querySelector(".projectCont")
    title.addEventListener("click", (e)=>{
        
        if(e.target.parentElement.classList.value==="projectImg"){
            let value=e.target.parentElement.parentElement.classList[1];
 projectArray.editArray(value);
 createProDom();
}})})();
export function createoption(){
    document.querySelector("#project").textContent="";
    let deafult=document.createElement("option");
    deafult.textContent="Default";
    let main=document.querySelector("#project");
    main.appendChild(deafult);
    let array= projectArray.getarray();
    for(let i=0;i<array.length;i++){
        let newProject=document.createElement("option");
    newProject.textContent=array[i];
    main.appendChild(newProject);
}}

(function (){
    document.querySelector(".projectCont").addEventListener("click",(e)=>{
        let string1="";
        let newArray=[];
        if(e.target.classList[0]==="newProject"|| e.target.classList[0]==="divProject"){
            let text=e.target.textContent;           
            newArray=array.filter((e)=> {return e.project===text})
            domCreate(newArray);
        }
    })
})();
(function (){
    document.querySelector(".left_panel>div").addEventListener("click",(e)=>{
        let newArray=[];
                  
            newArray=array.filter((e)=> {return e.project==="Default"})
            domCreate(newArray);
        })
    
})();

(function (){
    document.querySelector(".left_header>div:nth-child(2)").addEventListener("click",(e)=>{        
            domCreate();
        })
    
})();


