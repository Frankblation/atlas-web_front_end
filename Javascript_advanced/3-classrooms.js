/* Define the function createClassRoom */

function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }
    
    var students = [];
    for (let i = 0; i < numberOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }
    return students;

}

var classRoom = createClassRoom(10);

//testy test
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());