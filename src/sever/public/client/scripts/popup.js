function displayPopup(data) {
    //PopUp to display email body
    const popup = document.createElement("div");

    popup.innerHTML = data;

    //add close button which removes popup
    popup.innerHTML += `<button onclick='this.parentElement.remove()'>X</button>`

    //popup styles defined here
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "20px";
    popup.style.backgroundColor = "#fff";
    popup.style.border = "3px solid #013220";
    popup.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    popup.style.zIndex = "1000";
    popup.style.backgroundColor = "#C6E0BD"

    popup.children[0].style.padding = "5px 5px";
    popup.children[0].style.marginLeft = "10px";


    document.body.appendChild(popup);
}

