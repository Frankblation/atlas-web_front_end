class studentHogwarts {
    constructor() {
        let privateScore = 0;
        let name = null;

        this.setName = function(newName) {
            name = newName;
        };

        this.rewardStudent = function() {
            privateScore += 1;
        };

        this.penalizeStudent = function() {
            privateScore -= 1;
        };

        this.getScore = function() {
            return `${name}: ${privateScore}`;
        };
    }
}

// test the functionality
var harry = new studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

var draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());