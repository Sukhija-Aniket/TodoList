//  Defining all the functions which will be used ahead.
// we will use the localstorage of the device to store our list of ToDo's.
// we will use an array to fetch and store data and then use that data to create our list elements.

// function to add and retrieve data from local storage.
"use strict";
function addtolocalstorage(todos) {
  localStorage.setItem("mydata", JSON.stringify(todos));
}

function getfromlocalstorage() {
  const reference = localStorage.getItem("mydata");
  if (reference) {
    todos = JSON.parse(reference);
    for (var i = 0; i < todos.length; i++) {
      getvalues(
        todos[i].task,
        todos[i].important,
        todos[i].checked,
        todos[i].time,
        todos[i].timeleft
      );
    }
  }
}

// saving the new todo list data just before the reload.
onbeforeunload = function () {
  todos = [];
  var myNodelist = document.getElementsByTagName("LI");
  var secondlist =  document.getElementsByClassName("duetime");
  for (var i = 0; i < myNodelist.length; i++) {
    var task = myNodelist[i].childNodes[0].nodeValue;
    var checked = myNodelist[i].classList.contains("checked");
    var important = myNodelist[i].classList.contains("important");
    var time = secondlist[i].childNodes[0].nodeValue;
    document.write(time);
    // var time = "2021-12-10";
    var timeleft = duedate(time);
    todos.push({
      task: task,
      important: important,
      checked: checked,
      time: time,
      timeleft: timeleft,
    });
  }
  addtolocalstorage(todos);
};

// using the close button functionality to delete a task from the todo list.
function closefunctionality() {
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      div.remove();
    };
  }
}

//function to add the days left functionality.
function duedate(userinput) {
  var time = userinput.toString();
  var timer = new Date();
  let daystoshow = 0;

  var monthleft = parseInt(time.substring(5, 7)) - timer.getMonth()-1;
  var daysleft = parseInt(time.substring(8, 10)) - timer.getDate();
  var yearleft = parseInt(time.substring(0, 4)) - timer.getFullYear();

  console.log(timer.getMonth());
  if (daysleft >= 0) {
    daystoshow = daystoshow + daysleft;
  } else {
    daystoshow = daystoshow + 30 + daysleft;
    monthleft = monthleft - 1;
  }

  if (monthleft >= 0) {
    daystoshow = daystoshow + monthleft * 30;
  } else {
    daystoshow = daystoshow + 365 + monthleft * 30;
    yearleft = yearleft - 1;
  }

  daystoshow = daystoshow + yearleft * 365;
  return daystoshow;
}

function addtime(li, time, timeleft) {
  var span = document.createElement("timespan");
  if (timeleft >= 0)
    var txt = document.createTextNode(timeleft.toString() + " days left.");
  else var txt = document.createTextNode("time limit exceeded.");

  span.className = "timeleft";
  span.appendChild(txt);
  li.appendChild(span);

  var span2 = document.createElement("timespan2");
  var txt2 = document.createTextNode(time);
  span2.className = "duetime";
  span2.appendChild(txt2);
  li.appendChild(span2);
}

// function to add the close button to each list element.
function addclosebutton(li) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}

// button to close the form when cancel is pressed by the user.
function closeform() {
  // console.log("print this while closing")
  document.getElementById("myform").style.display = "none";
}

// function to create each list element from initial data using checked and important functionality.
function getvalues(inputValue, important, checked, time, timeleft) {
  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (checked) {
    li.classList.add("checked");
    li.cl;
  }

  if (important) {
    li.classList.add("important");
  }

  addclosebutton(li);

  addtime(li, time, timeleft);

  document.getElementById("mylist").appendChild(li);
}

// function to add another task.
function openTextBox() {
  document.getElementById("myform").style.display = "block";
}

// function to add the given event name and time by taking the input from the form.
function addEvent() {
  var inputValue = document.getElementById("task").value;
  var time = document.getElementById("time").value;

  var important = document.getElementById("important").checked;

  if (!(inputValue === null)) {
    var li = document.createElement("li");
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (important) {
      li.classList.add("important");
    }
    var timeleft = duedate(time);

    addtime(li, time, timeleft);

    if (inputValue === "" || inputValue === " ") {
      alert("You must write something");
    } else {
      document.getElementById("mylist").appendChild(li);
    }

    addclosebutton(li);

    closefunctionality();
  }
}

let todos = [];
getfromlocalstorage();

closefunctionality();

// function to mark the elements as checked or unchecked.
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

//  <-- This is neccessary to use the filter function -->
var isimportant = false;
function usefilter() {
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  if (isimportant === false) {
    isimportant = true;
    for (i = 0; i < myNodelist.length; i++) {
      var getname = myNodelist[i].className;
      if (!(getname.indexOf("important") > -1)) {
        myNodelist[i].style.display = "none";
      }
    }
  } else {
    for (i = 0; i < myNodelist.length; i++) {
      myNodelist[i].style.display = "block";
    }
    isimportant = false;
  }
}



// These are the media query functions.
var isvisible=false;
function turnvisible() {
    var element = document.getElementById("dropdown");
    if(isvisible){
        element.style.display='none';
        isvisible=false;
    }
    else{
        element.style.display='block';
        isvisible=true;
    }
}