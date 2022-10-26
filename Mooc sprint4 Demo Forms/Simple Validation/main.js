function validationFunction(myform) {
    const TestVar = myform.inputbox.value;
    const validationMsg = document.getElementById("validationMsg");
    if (TestVar == "") {
      validationMsg.innerText = "Error - empty input.";
      validationMsg.style.color = "red";
      validationMsg.style.fontWeight = "bold";
      validationMsg.style.display = "block";
    } else {
      // Creates a log of everything typed 
      validationMsg.style.display = "none";
      const log = document.createElement("p");
      log.setAttribute("class", "logMsg");
      log.innerHTML = `You typed: ${TestVar}`;
      document.body.appendChild(log);
    }
  }