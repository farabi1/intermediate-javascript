const allPhone = () => {
    document.getElementById('phone-container').innerHTML = "";

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
            <div class="card rounded d-flex align-items-center">
                <div class="phone-pic">
                    <img src="${phone.image}" class="card-img-top" alt="">
                </div>
                <div class="card-body">
                    <h4 class="card-title">${phone.phone_name}</h4>
                    <h5 class="card-text">Brand: ${phone.brand}</h5>
                    <button onclick="details('${phone.slug}')" class="btn btn-success text-white">Details</button>
                </div>
            </div>`
        parent.appendChild(div);
    }
};


const details = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then(data => detailsData(data.data));
};

const detailsData = (info) => {
    console.log(info);
    document.getElementById("details-container").innerHTML = `
        <div>
            <img src="${info.image}" alt="">
        <h4>Storage:${info.mainFeatures.storage}</h4>
        <h5>Display:${info.mainFeatures.displaySize}</h5>
        <h6>Chipset:${info.mainFeatures.chipset}</h6>
        <h6>Memory:${info.memory}</h6>
        <h6>Sensor:</h6>
        <h6></h6>
        <h6></h6>
    </div>
   `
}