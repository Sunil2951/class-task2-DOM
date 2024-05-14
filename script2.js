function label_create(tagname,attrname,attrval,content){
var label_ele = document.createElement(tagname);
label_ele.setAttribute(attrname,attrval);
label_ele.innerHTML = content;
return label_ele;
}

function break_create(){
    var break_ele = document.createElement("br");
    return break_ele;
}

function input_create(inputtag,attrname,attrval,attrname1,attrval1){
var input_ele = document.createElement(inputtag);
input_ele.setAttribute(attrname,attrval);
input_ele.setAttribute(attrname1,attrval1);
return input_ele;
}

function button_create(tag,attrname,attrval,attrname1,attrval1,content){
var button_ele=document.createElement(tag);
button_ele.setAttribute(attrname,attrval);
button_ele.setAttribute(attrname1,attrval1);
button_ele.innerHTML = content;
return button_ele;
}

function foo(){
    var res = document.getElementById("firstname").value;
    console.log(res);

    var res = document.getElementById("middlename").value;
    console.log(res);

    var res = document.getElementById("lastname").value;
    console.log(res);

    var res = document.getElementById("email").value;
    console.log(res);

    var res = document.getElementById("location").value;
    console.log(res);

}

//firstname
document.body.append(label_create("label","for","firstname","Firstname"));
document.body.append(break_create());
document.body.append(input_create("input","type","firstname","id","firstname"));
document.body.append(break_create());

//middlename
document.body.append(label_create("label","for","middlename","Middlename"));
document.body.append(break_create());
document.body.append(input_create("input","type","middlename","id","middlename"));
document.body.append(break_create());

//lastname
document.body.append(label_create("label","for","lastname","Lastname"));
document.body.append(break_create());
document.body.append(input_create("input","type","lastname","id","lastname"));
document.body.append(break_create());

//email
document.body.append(label_create("label","for","email","Email"));
document.body.append(break_create());
document.body.append(input_create("input","type","email","id","email"));
document.body.append(break_create());

//location
document.body.append(label_create("label","for","location","Location"));
document.body.append(break_create());
document.body.append(input_create("input","type","location","id","location"));
document.body.append(break_create());

//button
document.body.append(button_create("button","type","button","onclick","foo()","ClickMe"))
