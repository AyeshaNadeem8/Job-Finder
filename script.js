var selectedRow=null;
function onFormSubmit(e){
 event.preventDefault(); 
 var formData=readFromData();
 if(selectedRow==null){
    insertNewRecord(formData);
 }
 else{
  updateRecord(formData);
 }
 resetForm();
}
//retrieve the data
function readFromData(){
    var formData={};
    formData["companyname"]=document.getElementById("companyname").value;
    formData["postdes"]=document.getElementById("postdes").value;
    return formData;
}

//insert (create) data
function insertNewRecord(formData) {
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = formData.companyname;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = formData.postdes;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = "<button onClick='onEdit(this)'>Update</button> <button onClick='onDelete(this)'>Delete</button>";
}


//edit data
function onEdit(td){
selectedRow=td.parentElement.parentElement;
document.getElementById("companyname").value=selectedRow.cells[0].innerHTML;
document.getElementById("postdes").value=selectedRow.cells[1].innerHTML;
}
//update record
function updateRecord(formData){
selectedRow.cells[0].innerHTML=formData.companyname;
selectedRow.cells[1].innerHTML=formData.postdes;
}

//delete data
function onDelete(td){
if(confirm("Do you remove job post")){
    row=td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
}
resetForm();
}

//reset data
function resetForm(){
    document.getElementById("companyname").value="";
    document.getElementById("postdes").value="";
}