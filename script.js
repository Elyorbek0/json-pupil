fetch("http://localhost:3000/data")
.then((res) => res.json())
.then ((data) => {
    let pic = document.querySelector(".pic")
    data?.forEach(elem => {
        let box = document.createElement("div")
        box.innerHTML=`
        <p>Pupil:${elem?.id}  ${elem.name} </p>
        <img width="300" src=${elem?.img} alt="">
        `;
        pic.appendChild(box)
    });
})
