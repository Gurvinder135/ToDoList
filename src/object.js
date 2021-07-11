import { array as arr}  from "./hidePanel.js";
export function object(title,desc,date,priority,project){
    return{title,desc,date,priority,project};
};
export function domCreate(array=arr){
    document.querySelector(".add").textContent="";
    for(let i=0;i<array.length;i++){
        let a=document.createElement("div");
        document.querySelector(".add").appendChild(a);
        a.classList.add("todo");
        a.classList.add(i);
       let b=document.getElementsByClassName(i)[0];
        let title1=document.createElement("div");
        b.appendChild(title1);
        let desc1=b.appendChild(document.createElement("div"));
        let date1=b.appendChild(document.createElement("div"));
        let pri1=b.appendChild(document.createElement("div"));
        let project1=b.appendChild(document.createElement("div"));
        let img=b.appendChild(document.createElement("div"));
        img.classList.add(`.${i}`);
        let c=document.getElementsByClassName(`.${i}`)[0];
        let delete1=document.createElement("img")
        delete1.classList.add("delete");
        let d=c.appendChild(delete1);
        d.src="img/minus.png";
        let editimg=b.appendChild(document.createElement("div"));
        editimg.classList.add(`e${i}`);
        let e=document.getElementsByClassName(`e${i}`)[0];
        let edit=document.createElement("img");
        edit.classList.add("edit");
        let f=e.appendChild(edit);
        f.src="img/edit.png";

        title1.textContent=array[i].title;
        desc1.textContent=array[i].desc;
        date1.textContent=array[i].date;
        pri1.textContent=array[i].priority;
        project1.textContent=array[i].project;
        
    }

}