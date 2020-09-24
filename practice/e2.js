function run(data, newData = []) {
	data.forEach(function(element) {
		 if (element % 5 === 0){
             newData.push(element)
         }
    });
    return newData
}

console.log(run([15,6,7,3,4,6,7, 50])) 

// console.log("hello tra my")