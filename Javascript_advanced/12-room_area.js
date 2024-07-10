var roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length;
    }
};

var boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// test me
console.log(boundGetArea());  // Should return 5000