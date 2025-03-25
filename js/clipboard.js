function myFunction() {
    var copyText = "jklmdia@gmail.com"
    document.addEventListener('copy', function(event) {
      event.clipboardData.setData('text/plain', copyText);
      event.preventDefault();
      document.removeEventListener('copy', handler, true);
    }, true);
    document.execCommand('copy');
    var toast = document.getElementById("toast");
    toast.textContent = "Text copied to clipboard!";
    toast.classList.add("show");
    
    // Hide toast after 3 seconds
    setTimeout(function() {
        toast.classList.remove("show");
    }, 1580);
  }
  document.getElementById('myAnchor').addEventListener('click', myFunction);