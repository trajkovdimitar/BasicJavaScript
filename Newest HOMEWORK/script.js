let rIndex;
let counter = 1;
document.getElementById("myBtn").addEventListener("click", function(){counter++});

table = document.getElementById("table");

// proverka za vnesot na inputite
function checkEmpty(){
    let isEmpty=false;
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;

    if(fname === ""){
        alert("Mora da vnesete ime!");
        isEmpty = true;
    }
    else if(lname===""){
        alert("Mora da vnesete prezime!");
        isEmpty = true;
    }
    else if(email === ""){
        alert("Mora da vnesete email!");
        isEmpty = true;
    }
    return isEmpty;
}

// dodavanje redovi na tabelata
function addRows(){
    if(!checkEmpty()){
        let newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);

        cell1.innerHTML = counter;
        cell2.innerHTML = fname;
        cell3.innerHTML = lname;
        cell4.innerHTML = email;
       
        selectedRow();
          // za brisenje 
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
    }
}

// Selektiranje redovi
function selectedRow()
    {
                
        for(var i = 1; i < table.rows.length; i++)
        {
            table.rows[i].onclick = function()
            {
              // go zema ovoj red
              rIndex = this.rowIndex;
              document.getElementById("fname").value = this.cells[1].innerHTML;
              document.getElementById("lname").value = this.cells[2].innerHTML;
              document.getElementById("email").value = this.cells[3].innerHTML;
            };
        }
    }
selectedRow();

// editiranje na selektiraniot red
function editRow(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;

    if(!checkEmpty()){
        table.rows[rIndex].cells[1].innerHTML = fname;
        table.rows[rIndex].cells[2].innerHTML = lname;
        table.rows[rIndex].cells[3].innerHTML = email;
        
    }
}

// brisenje 
function deleteRow(){
    table.deleteRow(rIndex);
    document.getElementById("id").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
}

