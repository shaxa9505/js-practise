window.addEventListener("load", () => {

    // 1-yuli

    var body = document.querySelector("body");
    var cars = ["BMW", "NEXIA", "COBALT"];
    var car = document.createElement("div");
    var dom = "";
    // console.log(car);
    for(var i = 0; i < cars.length; i++) {
        dom += cars[i];
        car.innerHTML = dom;
    }
    body.appendChild(car)
    
    // 2 yuli 

    var car2 = document.createElement("div");
    var cars2 = ["Toyota", "Tico", "Samara"];
    var dom2 = "";
    cars2.forEach(element => {
        dom2 += element;
        car2.innerHTML = dom2;
        car2.style.marginTop = "20px"
        car2.style.marginBottom = "20px"
    });
    
    body.append(car2)
    
    
    // 3-yuli 
    
    var car3 = document.createElement("p");
    let a = cars2.join(" ");
    car3 = a;
    body.append(car3)

    // 4-yuli 

    var p = document.createElement("p");
    var city = ["Toshkent", "Samarqand", "Jizzax"]
    for(var i = 0; i < city.length; i++) {
        p.innerHTML += `${city[i]} <br>`;
    }
    body.append(p)

})