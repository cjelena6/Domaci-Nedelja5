// Aplikacija TO-DO lista
// Zavrsiti sa casa (26.08.2021) zapocetu aplikaziju za to-do listu koja treba da poseduje sledece funkcionalnosti:
// 1. Podaci iz niza se prikazuju na stranici (lista to-do itema)
// 2. Ima formu/input za unos novih podataka (to-do itema) u niz (automatski se azurira i prikaz na stranici)
// 3. Svaki item sadrzi sledece :
//      - id
//      - opis (desc)
//      - iformaciju da li je uradjen ili ne (done)
// 4. Na stranici za svaki item se prikazuje text - opis i checkbox polje koje menja stanje itema (uradjeno-neuradjeno),
// kao i dugme za brisanje itema. Kada je item uradjen (done == true) tekst (desc) itema se precrta (ili se na neki drugi
// nacin naznaci da je item uradjen).

import { data, add, deleteById, changeById } from "./service.js";

const main = document.querySelector(".main");
const forma = document.querySelector("#forma");
const inputText = document.querySelector("#input-text");
const btnDodaj = document.querySelector("#btn-dodaj");
const prikaz = document.querySelector("#prikaz");

function ispisNiza(niz) {
    data.forEach((todo) => {
        let p = document.createElement("p");
        p.classList.add("paragraf");
        let check = document.createElement("input")
        check.setAttribute("type", "checkbox")
        check.classList.add("check-todo")
        p.innerHTML = `${todo.desc} </br>`;
        prikaz.appendChild(p);
        p.prepend(check)

        check.addEventListener("change", () => {
            if (check.checked) {
                p.style.color = "gray"
                p.style.textDecoration = "line-through";
            } else {
                p.style.color = "black"
                p.style.textDecoration = "none";
            }
        })

        const btnObrisi = document.createElement("button");
        btnObrisi.classList.add("btn-obrisi");
        btnObrisi.innerHTML = `Obrisi`;
        p.appendChild(btnObrisi);
        prikaz.appendChild(p);

        btnObrisi.addEventListener("click", () => {
            p.remove();
            data.splice(data.indexOf(todo), 1)
        });
    });
    console.log(data);
}

function addToDom() {
    let p = document.createElement("p");
    p.classList.add("paragraf");
    let check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    check.classList.add("check-todo")
    p.innerHTML = `${inputText.value} </br>`;
    prikaz.appendChild(p);
    p.prepend(check)

    check.addEventListener("change", () => {
        if (check.checked) {
            p.style.color = "gray"
            p.style.textDecoration = "line-through";
        } else {
            p.style.color = "black"
            p.style.textDecoration = "none";
        }
    })

    const btnObrisi = document.createElement("button");
    btnObrisi.classList.add("btn-obrisi");
    btnObrisi.innerHTML = `Obrisi`;
    p.appendChild(btnObrisi);

    btnObrisi.addEventListener("click", () => {
        p.remove();
        data.splice(data.indexOf(data.todo), 1)
    });

};


btnDodaj.addEventListener("click", (event) => {
    event.preventDefault();

    let noviTodo = {
        id: add(),
        desc: inputText.value,
        done: ''
    }

    data.push(noviTodo);
    addToDom(noviTodo);
    console.log(data);
    inputText.value = ''

});

ispisNiza(data);

