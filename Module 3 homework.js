
findGradeLevel("Vlad", 49);

function findGradeLevel(name, marks) {
    if (marks < 0 && marks > 100) {
        console.log(name + "invalid marks");
    }
    else if (marks <= 100 && marks > 90) {
        console.log(name + " has S grade");
    }
    else if (marks <= 90 && marks > 80) {
        console.log(name + " has A grade");
    }
    else if (marks <= 80 && marks > 70) {
        console.log(name + " has B grade");
    }
    else if (marks <= 70 && marks > 60) {
        console.log(name + " has C grade");
    }
    else if (marks <= 60 && marks > 50) {
        console.log(name + " has D grade");
    }
    else if (marks <= 50 && marks > 0) {
        console.log(name + " has failed");
    }
}