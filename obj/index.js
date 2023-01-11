var details=[];

let add=()=>{
    let name=document.getElementById("fname").value;
    let gender=document.querySelectorAll("input[name='gen']:checked")[0].value;
    let email=document.getElementById("email").value;
    let number=document.getElementById("contact").value;
    let state =document.getElementById("state").value;
        // let hobby=document.querySelectorAll("input[name='hobby']:checked")[0].value;
        // let d2=document.getElementById("d2").style="display:block";
        let checkbox=document.querySelectorAll('input[type=checkbox]');
        let result=[];
        checkbox.forEach((iteam)=>{
            if(iteam.checked){
                result.push(iteam.value);
            }
        })
        let hobby =result;


        details.push({name,gender,email,number,state,hobby});
        let tab = document.getElementById("tab");
        // tab.innerHTML+=`<tr><td>${details[0].name}</td>`
        // console.log(details[0].name);
        tab.innerHTML=details.map((val,i)=>{return `<tr><td>${i+1}</td><td>${val.name}</td><td>${val.gender}</td><td>${val.email}</td><td>${val.number}</td>
        <td>${val.state}</td><td>${val.hobby}</td><td><button>Edit${i+1}</button></td><td><button onclick="del(${i})">Delete ${i+1}</button></td></tr>`});

    
        document.getElementById("fname").value="";
        document.getElementById("email").value="";
        document.getElementById("contact").value="";
        document.getElementById("state").value="";

         checkbox=document.querySelectorAll("input[type=checkbox]");
        checkbox.forEach((iteam)=>{
            iteam.checked=false;
        })

        console.log(details);

// console.log(name);
// console.log(gender);
// console.log(email);
// console.log(number);
// console.log(state);
// console.log(hobby);
// console.log(details);
// console.log(details[0].name);

}
let save=()=>{
console.log("save");
}



let edit=()=>{
    console.log("edit");
}



let search=()=>{
    console.log("search");
}
let del=(td)=>{


}