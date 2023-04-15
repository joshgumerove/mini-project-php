let xhr = new XMLHttpRequest();

if (!xhr) {
  alert("you are not set up with a proper browser");
}

function execute() {
  if (xhr.readyState == 0 || xhr.readyState == 4) {
    // unsent or done
    let foodItem = document.getElementById("foodItem").value;
    let method = "GET";
    let url = `./foodCheck.php?item=${foodItem}`;

    xhr.open(method, url);
    xhr.onreadystatechange = () => {};
    xhr.send();
  } else {
    setTimeout(() => {
      console.log("no AJAX request sent");
      execute();
    }, 1000);
  }
}
