const r = {
  _call: function() {
    console.log("Calling _call method");
  }
};

const call = r._call;

// Now you can use `call` to invoke the _call method
call(); // Output: Calling _call method
