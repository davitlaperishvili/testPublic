// Benefits
const benefits = document.querySelectorAll(".benefits .benefits_list .benefit_item");

benefits.forEach(function (item) {
    item.addEventListener("click", function (event) {
        const targetElem = event.target;
        console.log(this);

        const elemTitle = this.querySelector(".benefit_title");
        if (this.classList.contains("is-active")) {
            this.classList.remove("is-active");
            elemTitle.innerHTML = elemTitle.innerHTML.replace("Active", "");
        } else {
            this.classList.add("is-active");
            elemTitle.innerHTML += "Active";
        }
    });
});

// const benefits = document.querySelectorAll(".benefits .benefits_list .benefit_item");
// function benefitsAnim(item) {
//     item.addEventListener("click", function (e) {
//         e.stopPropagation();
//         let target = e.target;
//         if (target.classList.contains("is-active")) {
//             target.classList.remove("is-active");
//         } else {
//             target.classList.add("is-active");
//         }
//     });
// }
// benefits.forEach(benefitsAnim);
