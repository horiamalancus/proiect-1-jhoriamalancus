onmessage = function(e) {
    if(e.data === "savingItem")
    {
        postMessage("Modificare in localStorage");
    }
  }