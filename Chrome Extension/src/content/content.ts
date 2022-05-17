(() => {
  function nextField() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (document.activeElement.id == inputs[i].id && i + 1 < inputs.length) {
        return inputs[i + 1];
      }
    }
    return undefined;
  }

  function getPassword(hostname) {
    const Http = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/posts";
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
      console.log(Http.responseText);
    };
  }
  /** @type {Element | null} */
  let lastFocusedElement = null;

  const logId = setInterval(() => {
    const focusedElement = document.activeElement;
    if (focusedElement !== lastFocusedElement) {
      if (focusedElement.tagName.toLowerCase() == "input") {
        if (focusedElement.tagName.toLowerCase() != "password") {
          let nextInput = nextField();
          if (nextInput.type.toLowerCase() == "password") {
            /* Username + Password fields */
            console.log(
              "Found username and password fields for: " +
                window.location.hostname
            );
            if (focusedElement instanceof HTMLInputElement) {
              focusedElement.value = "username";
            }
            nextInput.value = "password";
          }
        } else {
          /* Only password field */
          console.log(
            "Found only username field for: " + window.location.hostname
          );
          if (focusedElement instanceof HTMLInputElement) {
            focusedElement.value = "password";
          }
        }
      }

      lastFocusedElement = focusedElement;
    }
  });
})();
