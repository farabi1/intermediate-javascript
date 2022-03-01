const allPhone = () => {
    const searchText = document.getElementById("search-box").value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => phoneDetails(data.data));


    console.log(url);
};

const phoneDetails = (phones) => {
    for (const phone of phones) {
        const parent = document.getElementById("phone-container");

        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card">
                <div class="phone-pic">
                    <img src="" class="card-img-top w-25" alt="">
                </div>
                <div class="card-body">
                    <h4 class="card-title">${phone.phone_name}</h4>
                    <h5 class="card-text">Brand: ${phone.brand}</h5>
                    <button href="#" class="btn btn-success text-white">Details</button>
                </div>
            </div>`
        parent.appendChild(div);
    }
}