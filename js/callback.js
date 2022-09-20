function firstF(callback) {
    setTimeout(() => {
        console.log("first");
        callback();
    },2000)
  }
  
  function secondF() {
      setTimeout(() => {
        console.log("second");
    },1000)
  }
  
  firstF(secondF);