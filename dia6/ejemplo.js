var objTest = {
  retardo: function() {
    setTimeout(function() {
      this.hacerAlgo();
    }, 1000);
  },

  hacerAlgo: function() {
    alert("hice algo");
  }
};

objTest.retardo();
