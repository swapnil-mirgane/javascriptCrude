    
        var selectedRow=null;
        let onFromSubmit=()=>{
            var formData=readFromData();
            if(selectedRow==null)
            insertNewRecord(formData);
            else
            updateData(formData);
            resetForm();


        }
        let readFromData=()=>{
            var formData={};
            formData["fname"]=document.getElementById("fName").value;
            formData["lname"]=document.getElementById("lName").value;
            formData["gender"]=document.querySelectorAll("input[name='gender']:checked")[0].value;
            formData["contact"]=document.getElementById("contact").value;
            formData["city"]=document.getElementById("city").value;
            formData["state"]=document.getElementById("state").value;
    
            let checkbox=document.querySelectorAll('input[type=checkbox]');
            // console.log(checkbox);
            let result=[];
            checkbox.forEach((iteam)=>{
                if(iteam.checked){
                    result.push(iteam.value);
                }
            })
            formData["hobby"]=result;


            return formData;
            
        }
        let insertNewRecord=(data)=>{
            var table=document.getElementById("employeeList").getElementsByTagName("tbody")[0];
            var newRow=table.insertRow(table.legth);
            cell1=newRow.insertCell(0);
            cell1.innerHTML=data.fname;

            cell1=newRow.insertCell(1);
            cell1.innerHTML=data.lname;

            cell2=newRow.insertCell(2);
            cell2.innerHTML=data.gender;

            cell3=newRow.insertCell(3);
            cell3.innerHTML=data.contact;

            cell3=newRow.insertCell(4);
            cell3.innerHTML=data.city;

            cell3=newRow.insertCell(5);
            cell3.innerHTML=data.state;

            cell3=newRow.insertCell(6);
            cell3.innerHTML=data.hobby;

            cell4=newRow.insertCell(7);
            cell4.innerHTML=`<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
        }
        let resetForm=()=>{
            document.getElementById("fName").value= "";
            document.getElementById("lName").value= "";
            document.getElementById("city").value="";
            document.getElementById("contact").value="";
            document.getElementById("state").value="";

            let checkbox=document.querySelectorAll("input[type=checkbox]");
            checkbox.forEach((iteam)=>{
                iteam.checked=false;
            })

            // let gender=document.querySelectorAll("input[type=radio]");
            // gender.forEach((iteam)=>{
            //     iteam.checked=false;
            // });

            selectedRow=null;
        }
        let onEdit=(td)=>{
             selectedRow=td.parentElement.parentElement;
             document.getElementById("fName").value=selectedRow.cells[0].innerHTML;
             document.getElementById("lName").value=selectedRow.cells[1].innerHTML;

             document.getElementById("gender").value=selectedRow.cells[2].innerHTML;
             document.getElementById("contact").value=selectedRow.cells[3].innerHTML;
             document.getElementById("city").value=selectedRow.cells[4].innerHTML;
             document.getElementById("state").value=selectedRow.cells[5].innerHTML;
             



        }
         let updateData=(formData)=>{
            selectedRow.cells[0].innerHTML=formData.fname;
            selectedRow.cells[1].innerHTML=formData.lname;

            selectedRow.cells[2].innerHTML=formData.gender;
            selectedRow.cells[3].innerHTML=formData.contact;

            selectedRow.cells[4].innerHTML=formData.city;
            selectedRow.cells[5].innerHTML=formData.state;
            selectedRow.cells[6].innerHTML=formData.hobby;



         }
         let onDelete=(td)=>{
            if(confirm("are you sure to delete this record ?")){
            row= td.parentElement.parentElement;
            document.getElementById("employeeList").deleteRow(row.rowIndex);
            resetForm();
            }
         }
    
