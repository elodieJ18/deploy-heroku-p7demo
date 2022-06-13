import React from "react";
import "../styles/style.css";
import logo from "../assets/logo-groupomania.png";

/*function send() {
  let form = document.querySelector(".cart__order__form");
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"
  );
  let charRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
  let addressRegExp = new RegExp(
    "^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+"
  );

  form.firstName.addEventListener("change", function () {
    validFirstName(this);
  });

  form.lastName.addEventListener("change", function () {
    validLastName(this);
  });

  form.email.addEventListener("change", function () {
    validEmail(this);
  });

  const validFirstName = function (inputFirstName) {
    let firstNameErrorMsg = inputFirstName.nextElementSibling;

    if (charRegExp.test(inputFirstName.value)) {
      firstNameErrorMsg.innerHTML = "";
      return true;
    } else {
      firstNameErrorMsg.innerHTML =
        "Veuillez renseigner correctement ce champ.";
      return false;
    }
  };

  const validLastName = function (inputLastName) {
    let lastNameErrorMsg = inputLastName.nextElementSibling;

    if (charRegExp.test(inputLastName.value)) {
      lastNameErrorMsg.innerHTML = "";
      return true;
    } else {
      lastNameErrorMsg.innerHTML = "Veuillez renseigner correctement ce champ.";
      return false;
    }
  };

  const validEmail = function (inputEmail) {
    let emailErrorMsg = inputEmail.nextElementSibling;

    if (emailRegExp.test(inputEmail.value)) {
      emailErrorMsg.innerHTML = "";
      return true;
    } else {
      emailErrorMsg.innerHTML = "Veuillez renseigner correctement votre email.";
      return false;
    }
  };

  let btnorder = document.getElementById("order");
  btnorder.addEventListener("click", (e) => {
    e.preventDefault();
    if (validFirstName(form.firstName)) {
      console.log("valide");
    } else {
      console.log("invalide");
      return;
    }

    if (validLastName(form.lastName)) {
      console.log("valide");
    } else {
      console.log("invalide");
      return;
    }

    if (validEmail(form.email)) {
      console.log("valide");
    } else {
      console.log("invalide");
      return;
    }

    /*---------------------preparation-de-l-envoie-------------------- */
/*let itemFirstName = document.querySelector("#firstName").value;
    let itemLastName = document.querySelector("#lastName").value;
    let itemAddress = document.querySelector("#address").value;
    let itemCity = document.querySelector("#city").value;
    let itemEmail = document.querySelector("#email").value;

    let contact = {
      firstName: itemFirstName,
      lastName: itemLastName,
      address: itemAddress,
      city: itemCity,
      email: itemEmail,
    };

    let products = [];
    for (let i = 0; i < productLocalStorage.length; i++) {
      products.push(productLocalStorage[i].id);
    }

    /*-----------objet-creer--------------- */
/*let sendAll = {
      contact,
      products,
    };

    const sendOrder = fetch("http://localhost:3000/api/products/order", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendAll),
    });

    sendOrder.then(async (response) => {
      try {
        const content = await response.json();
        console.log(content);
        /*-------------ça-ne-lis-pas-la-suite-parce-que-ce-n'est pas ok */
/*  if (response.ok) {
          console.log(`Resultat de response.ok : ${response.ok}`);

          console.log(content.orderId);
          localStorage.setItem("orderId", content.orderId);
          /*on rappelle le localstorage pour afficher la response dans url */
/*     let idConfirm = localStorage.getItem("orderId");
        window.location = `confirmation.html?${idConfirm}`;
        } else {
          console.log(`Réponse du serveur : ${response.status}`);
          alert(`Problème avec le serveur : erreur ${response.status}`);
        }
      } catch (e) {
        console.log(e);
      }
    });
  });
}

send();*/

/*constructor (props) {
  super(props)
  this.state = {
    nom: 'Jean'
  }
};*/

/*function constructor(props) {
  super(props);
  this.state = {
    nom: "Jean",
  };
}*/

function Signup() {
  return (
    <div className="form-signup-content">
      <div className="navbar">
        <img className="logo" src={logo} alt="groupomania" />
      </div>
      <div className="form-signup-element">
        <h1>Sign-Up</h1>
        <div className="from-signup">
          <form>
            <div className="cart__order__form__question">
              <label htmlFor="first-name">
                <b>FirstName</b>
              </label>
              <input
                type="text"
                placeholder="FirstName"
                name="FirstName"
                id="firstName"
                required
              />
              <p id="firstNameErrorMsg"></p>
            </div>
            <div className="cart__order__form__question">
              <label htmlFor="LastName">
                <b>LastName</b>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                required
              />
              <p id="lastNameErrorMsg"></p>
            </div>

            <div className="cart__order__form__question">
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input type="text" placeholder="Email" name="email" required />
              <p id="emailErrorMsg"></p>
            </div>

            <div className="cart__order__form__question">
              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="psw"
                required
              />
            </div>

            <div className="clearfix">
              <button type="submit" class="btn-bleu-navy">
                sign up
              </button>
              <a className="btn-blanc" href="/">
                cancel
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
