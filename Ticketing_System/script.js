let c=1000000;
localStorage.setItem("initId",c)

function showForm() {
    newWindow_method_1();
}

var myWindow

function newWindow_method_1() {
  var divText = document.getElementById("myForm").outerHTML;
    myWindow = window.open('./index.html', '', "width=700,height=800,scrollbars=yes,resizable=yes, left=850px,top=0");
    var doc = myWindow.document;
    doc.open();
    doc.write("<link rel='stylesheet' href='style.css'>")
    doc.write(divText);
    doc.write("<script type='text/javascript' src='script.js' defer></script>")
    doc.close()
}


function sort(clicked_id){

  console.log(clicked_id);

  let getAll = document.getElementById('tr1')
  // console.log("all", getAll.children);
  let child = getAll.children

  for(let i=0;i<9;i++){

    //all other than clicked
    if(child[i].id != clicked_id){
       child[i].getElementsByTagName('i')[0].classList.value = "fa fa-sort"
    }

    else{
      //clicked
      console.log("here", child[i].id);
      let id = clicked_id
      let changeIcon = document.getElementById(id).getElementsByTagName('i')[0]
    
      console.log(changeIcon.classList.value)
      
      if (changeIcon.classList.value == "fa fa-sort") {
        changeIcon.classList.value = "fa fa-caret-down"
      }
      else if(changeIcon.classList.value == "fa fa-caret-down"){
        changeIcon.classList.value = "fa fa-caret-up"
      }
      else if(changeIcon.classList.value == "fa fa-caret-up"){
        changeIcon.classList.value = "fa fa-caret-down"
      }
        
    }
  }
}

function sortHold(clicked_id){
  console.log(clicked_id);

  let getAll = document.getElementById('tr2')
  // console.log("all", getAll.children);
  let child = getAll.children

  for(let i=0;i<9;i++){

    //all other than clicked
    if(child[i].id != clicked_id){
       child[i].getElementsByTagName('i')[0].classList.value = "fa fa-sort"
    }

    else{
      //clicked
      console.log("here2", child[i].id);
      let id = clicked_id
      let changeIcon = document.getElementById(id).getElementsByTagName('i')[0]
    
      console.log(changeIcon.classList.value)
      
      if (changeIcon.classList.value == "fa fa-sort") {
        changeIcon.classList.value = "fa fa-caret-down"
      }
      else if(changeIcon.classList.value == "fa fa-caret-down"){
        changeIcon.classList.value = "fa fa-caret-up"
      }
      else if(changeIcon.classList.value == "fa fa-caret-up"){
        changeIcon.classList.value = "fa fa-caret-down"
      }
        
    }
  }

  //change this.id values
}

function sortResolved(clicked_id){
  console.log(clicked_id);

  let getAll = document.getElementById('tr3')
  // console.log("all", getAll.children);
  let child = getAll.children

  for(let i=0;i<9;i++){

    //all other than clicked
    if(child[i].id != clicked_id){
       child[i].getElementsByTagName('i')[0].classList.value = "fa fa-sort"
    }

    else{
      //clicked
      console.log("here3", child[i].id);
      let id = clicked_id
      let changeIcon = document.getElementById(id).getElementsByTagName('i')[0]
    
      console.log(changeIcon.classList.value)
      
      if (changeIcon.classList.value == "fa fa-sort") {
        changeIcon.classList.value = "fa fa-caret-down"
      }
      else if(changeIcon.classList.value == "fa fa-caret-down"){
        changeIcon.classList.value = "fa fa-caret-up"
      }
      else if(changeIcon.classList.value == "fa fa-caret-up"){
        changeIcon.classList.value = "fa fa-caret-down"
      }
        
    }
  }

  //change this.id values
}

if(document.getElementById('departments').value == 'noneSelected'){
  document.querySelector('.container').style.display = 'none';
  console.log("NONE");
  document.getElementById('ifNotSelected').innerText = 'Please select the Department';

}

//get details

function getAll(){

  for(let i=0; i<9; i++){
    console.log("TRY");
    document.getElementById('tr1').children[i].getElementsByTagName('i')[0].classList.value = "fa fa-sort"
  }
  // document.getElementById('loader').style.display = 'none';
  document.getElementById('loader').style.cssText += 'animation: spin 1s linear reverse;'

  if(document.getElementById('departments').value == 'noneSelected'){

    setTimeout(() => {
      document.querySelector('.container').style.display = 'none';
      document.getElementById('ifNotSelected').style.display = 'block'
      console.log("NONE");
    }, 400)
   
  }
  else{
    setTimeout(() => {
      document.getElementById('ifNotSelected').style.display = 'none'
    }, 700)

  setTimeout(() => {
    var url = 'http://localhost/ticketing/receive.php'
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function(){
      // console.log(JSON.parse(xhr.responseText));
      var data = JSON.parse(xhr.responseText);

      showData(data)
    }

    xhr.send()

    document.getElementById('loader').removeAttribute('style');
  }, 1000)
  }
}

function getActive(){

  document.getElementById('loader1').style.cssText += 'animation: spin 1s linear reverse;'

  setTimeout(() => {
    var url = 'http://localhost/ticketing/receive.php'
    var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
  
      xhr.onload = function(){
        // console.log(JSON.parse(xhr.responseText));
        var data = JSON.parse(xhr.responseText);
  
        showData1(data)
      }
  
      xhr.send()

    document.getElementById('loader1').removeAttribute('style');
  }, 1000);

}

function getHold(){

  document.getElementById('loader2').style.cssText += 'animation: spin 1s linear reverse;'

  setTimeout(() => {
    var url = 'http://localhost/ticketing/receive.php'
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function(){
      // console.log(JSON.parse(xhr.responseText));
      var data = JSON.parse(xhr.responseText);

      showData2(data)
    }

    xhr.send()

    document.getElementById('loader2').removeAttribute('style');

  }, 1000)

  
}

function getResolved(){

  document.getElementById('loader3').style.cssText += 'animation: spin 1s linear reverse;'

  setTimeout(() => {
    var url = 'http://localhost/ticketing/receive.php'
    var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
  
      xhr.onload = function(){
        // console.log(JSON.parse(xhr.responseText));
        var data = JSON.parse(xhr.responseText);
  
        showData3(data)
      }
  
      xhr.send()

      document.getElementById('loader3').removeAttribute('style');

  }, 1000)

}


let key=1
function showData(fetchedData){
  let fd = fetchedData;
  console.log(fd);

    var dataAct = []
    var dataHold = []
    var dataRes = []

    let cat = document.getElementById('departments').value

    for(let j=0; j<fd.length; j++){

      if(fd[j].category == cat) {

        document.querySelector('.container').style.display = 'flex';

        for(let i=0; i<3; i++){
          document.getElementsByClassName('putCat')[i].innerHTML = cat
        }

        if(fd[j].status == 'New' || fd[j].status == 'In Process' ){
          dataAct[j] = ['10000'+fd[j].id, fd[j].title, fd[j].req, fd[j].acct, fd[j].category, fd[j].status, "TSS - Instructional Tools", "Unassigned",fd[j].time ]
        }
        else if(fd[j].status == 'On Hold'){
          dataHold[j] = ['10000'+fd[j].id, fd[j].title, fd[j].req, fd[j].acct, fd[j].category, fd[j].status, "TSS - Instructional Tools", "Unassigned",fd[j].time ]
        }
        else if(fd[j].status == 'Resolved'){
          dataRes[j] = ['10000'+fd[j].id, fd[j].title, fd[j].req, fd[j].acct, fd[j].category, fd[j].status, "TSS - Instructional Tools", "Unassigned",fd[j].time ]
        }
    }

  }
    
    // console.log(data); 

    document.getElementById('table-active-body').innerHTML='';
    document.getElementById('table-hold-body').innerHTML='';
    document.getElementById('table-resolved-body').innerHTML='';
    
    dataAct.map(display);
    dataHold.map(display2);
    dataRes.map(display3);
  }

function showData1(fetchedData){
  let fd = fetchedData;
  // console.log(fd);

    var dataAct = []
    let cat = document.getElementById('departments').value

    for(let j=0; j<fd.length; j++){
      if(fd[j].category == cat) {
        if(fd[j].status == 'New' || fd[j].status == 'In Process' ){
          dataAct[j] = ['10000'+fd[j].id, fd[j].title, fd[j].req, fd[j].acct, fd[j].category, fd[j].status, "TSS - Instructional Tools", "Unassigned",fd[j].time ]
        }
      }
    }
    
    // console.log(data); 

    document.getElementById('table-active-body').innerHTML='';
  
    dataAct.map(display);
  }

function showData2(fetchedData){
  let fd = fetchedData;
  // console.log(fd);

    var dataHold = []

    let cat = document.getElementById('departments').value

    for(let j=0; j<fd.length; j++){
      if(fd[j].category == cat) {
        if(fd[j].status == 'On Hold'){
          dataHold[j] = ['10000'+fd[j].id, fd[j].title, fd[j].req, fd[j].acct, fd[j].category, fd[j].status, "TSS - Instructional Tools", "Unassigned",fd[j].time ]
        }
    }
    }
  
  // console.log(data); 

    
    document.getElementById('table-hold-body').innerHTML='';

    dataHold.map(display2);
}

function showData3(fetchedData){
  let fd = fetchedData;
  // console.log(fd);

    var dataRes = []

    let cat = document.getElementById('departments').value

    
    for(let j=0; j<fd.length; j++){
      if(fd[j].category == cat) {
        if(fd[j].status == 'Resolved'){
          dataRes[j] = ['10000'+fd[j].id, fd[j].title, fd[j].req, fd[j].acct, fd[j].category, fd[j].status, "TSS - Instructional Tools", "Unassigned",fd[j].time ]
        }
      }
    }
    
    // console.log(data); 

    document.getElementById('table-resolved-body').innerHTML='';

    dataRes.map(display3);
  }


  function display(data){
    let currTable = document.getElementById('table-active-body')
    let row = document.createElement('tr')
    let col = []
    let a = []
    
    for(let i=0; i<9; i++){
      if(i<3){
        col[i] = document.createElement('td')
        a[i] = document.createElement("a")
        // a[i].href = ""
        a[i].setAttribute('class', 'clicktest'+key);
        a[i].setAttribute('onclick', 'javascript:getValue(this.className);')
        a[i].innerHTML = data[i]
        a[i].style ='cursor:pointer'
        currTable.appendChild(row).appendChild(col[i]).appendChild(a[i])
      }else{
        col[i] = document.createElement('td')
        col[i].innerHTML = data[i]
        currTable.appendChild(row).appendChild(col[i])   
      }
    }
    key++;

  }


  function display2(data){
    let currTable = document.getElementById('table-hold-body')
    let row = document.createElement('tr')
    let col = []
    let a = []
    
    for(let i=0; i<9; i++){
      if(i<3){
        col[i] = document.createElement('td')
        a[i] = document.createElement("a")
        // a[i].href = ""
        a[i].setAttribute('class', 'clicktest'+key);
        a[i].setAttribute('onclick', 'javascript:getValue(this.className);')
        a[i].innerHTML = data[i]
        a[i].style ='cursor:pointer'
        currTable.appendChild(row).appendChild(col[i]).appendChild(a[i])
      }else{
        col[i] = document.createElement('td')
        col[i].innerHTML = data[i]
        currTable.appendChild(row).appendChild(col[i])   
      }
    }
    key++;
  }

  function display3(data){
    let currTable = document.getElementById('table-resolved-body')
    let row = document.createElement('tr')
    let col = []
    let a = []
    
    for(let i=0; i<9; i++){
      if(i<3){
        col[i] = document.createElement('td')
        a[i] = document.createElement("a")
        // a[i].href = ""
        a[i].setAttribute('class', 'clicktest'+key);
        a[i].setAttribute('onclick', 'javascript:getValue(this.className);')
        a[i].innerHTML = data[i]
        a[i].style ='cursor:pointer'
        currTable.appendChild(row).appendChild(col[i]).appendChild(a[i])
      }else{
        col[i] = document.createElement('td')
        col[i].innerHTML = data[i]
        currTable.appendChild(row).appendChild(col[i])   
      }
    }
    key++;
  }


  function getValue(v){
    // console.log(v);
    let idname = v;

    // console.log(idname);

   let p2 = "."+idname+""

    let p = document.querySelectorAll(p2)[1].innerHTML
    console.log(p);

    //pass to php
    createCookie("titlename", p, 1)

    var url = 'http://localhost/ticketing/moredetails.php'
    var req2 = new XMLHttpRequest();
      req2.open('GET', url, true);
  
      req2.onload = function(){
        var data2 = JSON.parse(req2.responseText);
        console.log("Selected",data2);
        showPopup(data2);
      }
  
      req2.send()


  }

  function createCookie(name, value, days) {
    // console.log(name,value);

    var expires;
      
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }

    document.cookie = escape(name)+ "=" + escape(value) + expires + "; path=/";

  }


  function showPopup(item){
    let item2 = item
    // console.log("Itemwa", item2[0].id);

    document.getElementById('clickform').style.cssText += 'display:block'

    let newID = 100000 + parseInt(item2[0].id)

    document.getElementById('showId').setAttribute("value", newID)
    document.getElementById('showTitle').setAttribute("value", item2[0].title)
    document.getElementById('showReq').setAttribute("value", item2[0].req)
    document.getElementById('showDescr').innerHTML = item2[0].descr
    // document.getElementById('default').innerHTML = item2[0].status

    
    let option_html = ""
    value_array = ["New", "In Process", "On Hold", "Resolved"]
    for(let i=0; i< value_array.length; i++){
      if (value_array[i] != item2[0].status){
        option_html += '<option value="opt'+i+'">'+value_array[i]+'</option>'
      } 
      else{
        option_html += '<option value="opt'+i+'"selected>'+value_array[i]+'</option>'
      }   
    
    }

    console.log("TOTAL :",option_html);
    document.getElementById('updateTicket').innerHTML = option_html
   
    
    var divText = document.getElementById("clickform").outerHTML;
    myWindow = window.open('./index.html', '', "width=700,height=800,scrollbars=yes,resizable=yes, left=850px,top=0");
    var doc = myWindow.document;
    doc.open();
    doc.write("<link rel='stylesheet' href='style.css'>")
    doc.write(divText);
    doc.write("<script type='text/javascript' src='script.js' defer></script>")
    doc.close()

  }


  function updateTicket(){
    let opt = document.getElementById('updateTicket').getElementsByTagName('option')
    let newStatusVal;
    let updateStatusvalue

    for(let i=0; i<4; i++){
    if(opt[i].hasAttribute('selected') == true){
      opt[i].removeAttribute('selected');
    }
  }
    newStatusVal = document.getElementById('updateTicket').value
    if(newStatusVal == 'opt0'){
      updateStatusvalue = "New"
    }
    else if(newStatusVal == 'opt1'){
      updateStatusvalue = "In Process"
    }
    else if(newStatusVal == 'opt2'){
      updateStatusvalue = "On Hold"
    }
    else if(newStatusVal == 'opt3'){
      updateStatusvalue = "Resolved"
    }
    
    let currId = document.getElementById('showId').value
    let actualId = currId - 100000;


    console.log("here",actualId, updateStatusvalue);

    createCookie("status", actualId, 1)
    createCookie("status2", updateStatusvalue, 1)

    var url = 'http://localhost/ticketing/updateStatus.php'
    var req2 = new XMLHttpRequest();
    req2.open('PUT', url, true);

    req2.onload = function(){
      var data = JSON.parse(req2.responseText);
      console.log("response",data);
    }

    req2.send()

    document.getElementById('clickform').innerHTML = "Updated successfully..";
    
  }
