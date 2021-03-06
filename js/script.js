const allPhone = () => {
    document.getElementById('phone-container').innerHTML = "";
    document.getElementById('details-container').innerHTML = "";

    const searchText = document.getElementById("search-box").value;

    // Error Handling For SearchBar 
    const searchInput = parseFloat(searchText);

    const error = document.getElementById("error-info")

    if ((typeof searchText) !== "string" || searchInput <= 0) {
        error.innerText = "please give a number";


    } else {

        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => phoneDetails(data.data))
    }

};

const phoneDetails = (phones) => {

    const parent = document.getElementById("phone-container");


    // Slice for showing only 20 phone result 

    const first20Phone = phones.slice(0, 20);

    for (const phone of first20Phone) {

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

    document.getElementById("details-container").innerHTML = `
        <div>
            <img src="${info.image}" alt="">
        <h3>Name: ${info.name}</h3> 

        <h4>Brand: ${info.brand}</h4>  
          
        <h4>Storage: ${info.mainFeatures.storage}</h4>

        <h5>Display: ${info.mainFeatures.displaySize}</h5>

        <h6>Chipset: ${info.mainFeatures.chipSet}</h6>

        <h6>Memory: ${info.mainFeatures.memory}</h6>

        <h6>Sensor: ${info.mainFeatures.sensors.join()}</h6>

        <h6>Others: Bluetooth-${info.others.Bluetooth},GPS-${info.others.GPS},NFC-${info.others.NFC},Radio-${info.others.Radio},USB-${info.others.USB},WLAN-${info.others.WLAN}</h6>

        <h6>Release Date:${info.releaseDate ? info.releaseDate : "No data found"}</h6>
    </div>
   `

}