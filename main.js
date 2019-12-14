

////////////////////////////////////////////////////////////////
//Функционал корзины
let goodList = [];
let Basket = {
    //общая стоимость товаров в корзине
    AddProduct: function (eventObj) {
        let eventElement = eventObj.target;

        for (let i in Products)
        {
            if (Products[i].id === eventElement.id) {
                goodList.push(Products[i]);
            }
        }
    },
    countTotalNumber: function () {
        return goodList.length
    },
    countTotalPrice: function () {
        let sum = 0;
        for (let i in goodList) {
            sum += goodList[i].price
        }
        return sum;
    },
    ClearBasket: function () {
        goodList = [];
    },
    checkTotal: function () {
        if (goodList.countTotalNumber !== 0) {
            return true;
        }
        else {
            return false;
        }
    }
};

function PrintBasket() {
    let p = document.getElementById("Basket");

    if (Basket.checkTotal()) {
        p.innerHTML = "Товаров в корзине: " + Basket.countTotalNumber() + " на сумму " + Basket.countTotalPrice() + " рублей";
    }
    else {
        p.innerHTML = "Корзина пуста";
        let del = document.getElementById("Delete");
        del.visible = false;
    }
}

////////////////////////////////////////////////////////////////
let Products = [
    {id: "maslo_Honda4L", name: "Масло Хонда.4Л", price: 2600},
    {id: "maslo_Honda1L", name: "Масло Хонда.1Л", price: 600},
    {id: "maslo_Mazda5L", name: "Масло Мазда.5Л", price: 2850},
    {id: "maslo_Mazda1L", name: "Масло Мазда.1Л", price: 650},
];

function init() {
    init_market();
    PrintBasket();

    document.addEventListener('click', PrintBasket);
}

function init_market() {
    let div_market = document.getElementById("div_market");

    for (let i in Products)
    {
        let img_product = document.createElement("img");
        img_product.src = Products[i].id + ".jpg";

        let title_product = document.createElement("p");
        title_product.innerHTML = Products[i].name + ": " + Products[i].price + " рублей";

        let button_product = document.createElement("button");
        button_product.innerHTML = "Добавить в корзину";
        button_product.id = Products[i].id;
        button_product.onclick = Basket.AddProduct;

        let div_product = document.createElement("div");
        div_product.style = "padding: 10px;";
        div_product.appendChild(img_product);
        div_product.appendChild(title_product);
        div_product.appendChild(button_product);

        div_market.appendChild(div_product);
    }

}

window.onload = init;