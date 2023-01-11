// récupérer les champs d’un formulaire possédant les champs suivants:
// <input type=”text” name=”name” />
// <input type=”number” name=”age” />
// <input type=”date” name=”birthdate” />
// <button>valider</button>
// afficher le nom et la valeur dans une balise p possédant l’id “result” sous la forme suivante:
// name: Guilian, age: 42, birthdate: 2000-12-09

// document.querySelector("button").addEventListener("click", (e) = () => {
//     let myName = [...document.getElementsByName("name")];
//     let myAge = [...document.getElementsByName("age")];
//     let myBirth = [...document.getElementsByName("birthdate")];
//     let myP = document.createElement("p");
//     myP.setAttribute("id", "result");
//     myP.innerHTML = `name: ${myName[0].value}, age: ${myAge[0].value}, birthdate: ${myBirth[0].value}`;
//     document.body.appendChild(myP);
// })

$("button").click(() => {
    $("body").append(
        $(`<p id="result">name: ${$('[name="name"]').val()}, age: ${$('[name="age"]').val()}, birthdate:${$('[name="birthdate"]').val()}</p>`)
        );
})