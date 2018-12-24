let array = [NaN, 0, 15, false, -22, '',undefined, 47, null]; 

function cleanUp(array) {
    let newArr = new Array();
    for (var i = 0; i < array.length; i++) {
      if (array[i]||array[i]===0||array[i]===false)
        newArr.push(array[i]);
    }
    return newArr;  

  }
  
newArr = document.getElementById("out").textContent = JSON.stringify(cleanUp(array));
