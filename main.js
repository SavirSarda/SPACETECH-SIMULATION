var students = [];

var name1,name2,name3,name4,name5,name6,name7,name8,name9,name10,name11;

function submit() {

    for ( var j = 1; j<=11; j++){
   var name = document.getElementById("input"+j).value
        students.push(name);

    }
    
    document.getElementById("display_names").innerHTML = students;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";

}

function sort() {
students.sort();

var new_st = students.join(" - ");
document.getElementById("display_names").innerHTML = new_st;
document.getElementById("display_names").innerHTML = new_st;
}