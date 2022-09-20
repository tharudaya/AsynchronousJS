function firstF() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("first");
            if(true) {
                resolve("success");
            }else {
                reject("fails");
            }
          },2000)
    })
  }
  
  function secondF() {
      setTimeout(() => {
        console.log("second");
    },1000)
  }
  
  firstF().then(secondF)
  .catch((err) => {
    console.log(err);
  })