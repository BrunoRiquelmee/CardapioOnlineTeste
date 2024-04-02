/*const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkOutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")

//array da lista
let cart = [];

//Abrir modal do carrinho
cartBtn.addEventListener("click", function() {
    updateCartModal();
    cartModal.style.display = "flex"
})

//Fechar modal quando cllickar fora
cartModal.addEventListener("click", function(event){
    if (event.target === cartModal) {
        cartModal.style.display = "none"
    }
})

//Fechar modal com botao
closeModalBtn.addEventListener("click", function(){
        cartModal.style.display = "none"
})

//Adicionar no carrinho
menu.addEventListener("click", function(event){
    let parentButton = event.target.closest(".add-to-cart-btn")

        if(parentButton) {
            const name = parentButton.getAttribute("data-name")
            const price = parseFloat(parentButton.getAttribute("data-price"))

            //Add no carrinho
            addToCart(name, price)

        }

})

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Adiciona a classe de shake
        button.classList.add("shake");

        // Remove a classe de shake após a animação ser concluída
        setTimeout(() => {
            button.classList.remove("shake");
        }, 500); // O valor 500 corresponde à duração da animação em milissegundos
    });
});

//Function para add no carrinho
function addToCart(name, price){
    const existingItem = cart.find(item => item.name === name)
    
        if (existingItem){
            //se o item ja existir aumenta apenas a quantidade +1
            existingItem.quantity += 1;
        
        }else {

            cart.push({
                name,
                price,
                quantity: 1,
            })

        }

    updateCartModal()
}


//att o carrinho
function updateCartModal(){
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col")

        cartItemElement.innerHTML = `
        <div class="flex items-center justify-between">
            <div>
                <p class="font-medium">${item.name}</p>
                <p>Qtd: ${item.quantity}</p>
                <p class="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
            </div>

            <div class="bg-red-500 text-white px-2 rounded">
            <button class="remove-btn" data-name="${item.name}">Remover</button>
            </div>
        </div>
    `

    total += item.price * item.quantity

        cartItemsContainer.appendChild(cartItemElement)
    })

    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    cartCounter.innerHTML = cart.length;

}

//function para remover item do carriinho
cartItemsContainer.addEventListener("click", function (event){
    if(event.target.classList.contains("remove-btn")) {
        const name = event.target.getAttribute("data-name")
        
        removeitemCart(name);
    }
})

//function botao remover
function removeitemCart(name){
    const index = cart.findIndex(item => item.name === name);

    if(index !== -1) {
        const item = cart [index]
        
        if (item.quantity > 1){
            item.quantity -= 1;
            updateCartModal();
            return;
        }

        cart.splice(index,  1);
        updateCartModal();

    }
}

//adress input
addressInput.addEventListener("input", function(event){
    let inputValue = event.target.value;
    
    if(inputValue !== ""){
        addressInput.classList.remove("border-red-500")
        addressWarn.classList.add("hidden")
    }
    
})


//finalizar pedido
checkOutBtn.addEventListener("click", function(){

    const isOpen = checkRestaurantOpen();
    if(!isOpen){

        Toastify({
            text: "Ops o restaurante está fechado!",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#ef4444",
            },
    }).showToast();
    return;
    }

    if(cart.length === 0) return;
    if(addressInput.value === ""){
        addressWarn.classList.remove("hidden")
        addressInput.classList.add("border-red-500")
        return;
    }

    //ENVIAR PEDIDO PRA API DO ZAP
    const cartItems = cart.map((item) => {
        let itemInfo = `•${item.name} | Quantidade: (${item.quantity}) | Preço:R$${item.price.toFixed(2)} `;
    
        // Adiciona o tamanho apenas se estiver definido para o item
        if (item.size) {
            itemInfo += `| Tamanho:(${item.size})`;
        }
    
        return itemInfo;
    }).join("\n");
    
    const total = updateCartModal();
    
    const message = encodeURIComponent(`${cartItems}  \n*Valor total: R$${total.toFixed(2)}*\n*Endereço: ${addressInput.value}*`);
    const phone = "+5588998404876";
    
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    
    cart = [];
    updateCartModal();

})

//function de verificar o horario
function checkRestaurantOpen() {
    const data = new Date();
    const hora = data.getHours();
    return hora >= 10 && hora < 23; 
}

const spanItem = document.getElementById("date-span")
const isOpen = checkRestaurantOpen();

if(isOpen){
    spanItem.classList.remove("bg-red-500");
    spanItem.classList.add("bg-green-600");
} else {
    spanItem.classList.remove("bg-green-600")
    spanItem.classList.add("bg-red-500")
}
*/


const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkOutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")

//array da lista
let cart = [];

//Abrir modal do carrinho
cartBtn.addEventListener("click", function() {
    updateCartModal();
    cartModal.style.display = "flex"
})

//Fechar modal quando cllickar fora
cartModal.addEventListener("click", function(event){
    if (event.target === cartModal) {
        cartModal.style.display = "none"
    }
})

//Fechar modal com botao
closeModalBtn.addEventListener("click", function(){
        cartModal.style.display = "none"
})

//Adicionar no carrinho
// Tu adicionou um evento de click no menu que é uma div então mesmo que tu não clique no botão se vc clicar
//o evento de click é disparado sem necessidade
/* menu.addEventListener("click", function(event){
    let parentButton = event.target.closest(".add-to-cart-btn")

        if(parentButton) {
            const name = parentButton.getAttribute("data-name")
            const price = parseFloat(parentButton.getAttribute("data-price"))

            //Add no carrinho
            addToCart(name, price)

        }

}) */

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Adiciona a classe de shake
        button.classList.add("shake");

        // Remove a classe de shake após a animação ser concluída
        setTimeout(() => {
            button.classList.remove("shake");
        }, 500); // O valor 500 corresponde à duração da animação em milissegundos
    });
});

const buttonsAddToCart = document.querySelectorAll("button.add-to-cart-btn")

buttonsAddToCart.forEach(buttonCart => {
    buttonCart.addEventListener("click", function(event){
        let button = event.currentTarget
        
        let name = button.getAttribute("data-name")
        let price = parseFloat(button.getAttribute("data-price"))
        let size = button.getAttribute("data-size");
        //Add no carrinho
        addToCart(name, price,size)    
    })
})

const buttonsSizePrices = document.querySelectorAll("button.prices")

buttonsSizePrices.forEach(buttonSize => {
    buttonSize.addEventListener("click", function(event){
        let button = event.currentTarget
        
        const name = button.getAttribute("data-name");
        const price = button.getAttribute("data-price");
        const size = button.getAttribute("data-size");
        
        
        const p = document.querySelector(`p[data-name="${name}"]`)
        p.innerHTML = `R$ ${price} (${size})`
        
        const buttonCart = document.querySelector(`button[data-name="${name}"].add-to-cart-btn`)
        buttonCart.setAttribute("data-price", price)
        buttonCart.setAttribute("data-size", size);
    })
})


//Function para add no carrinho
function addToCart(name, price, size) {
    console.log(size);
    const existingItem = cart.find(item => (item.name === name && (item.size === size || item.size === null)));
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name,
            price,
            size,
            quantity: 1,
        });
    }
    updateCartModal();
    Toastify({
        text: `${name} ${size} adicionado ao carrinho`,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#4caf50",
            color: "#fff", // Cor do texto
            'font-size': "15px", // Tamanho da fonte
            'padding-left': "40px", // Espaçamento à esquerda para o ícone
            'background-image': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"white\" d=\"M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z\"/></svg>')", // Substitua pelo código SVG real
            'background-repeat': "no-repeat", // Impede a repetição do ícone
            'background-position': "10px center", // Posiciona o ícone corretamente
            'background-size': "15px"
        },
    }).showToast();
}


//att o carrinho
function updateCartModal(){
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col");

    let sizeHTML = ''; // Inicializa uma string vazia para o tamanho HTML

    // Verifica se o tamanho do item está definido antes de exibi-lo
    if (item.size) {
        sizeHTML = `<p>${item.size}</p>`;
    }

    cartItemElement.innerHTML = `
        <div class="flex items-center justify-between">
            <div>
                <p class="font-medium">${item.name}</p>
                ${sizeHTML} <!-- Exibe o tamanho apenas se estiver definido -->
                <p>Qtd: ${item.quantity}</p>
                <p class="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
            </div>
            <div class="bg-red-500 text-white px-2 rounded">
            <button class="remove-btn " data-name="${item.name}" data-size=${item.size}>Remover</button>
            </div>
        </div>
    `;

    total += item.price * item.quantity

    // Adiciona o elemento do item do carrinho ao contêiner do carrinho
    cartItemsContainer.appendChild(cartItemElement);
});

    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    cartCounter.innerHTML = cart.length;

    return total;

}

//function para remover item do carriinho
cartItemsContainer.addEventListener("click", function (event){
    if(event.target.classList.contains("remove-btn")) {
        const name = event.target.getAttribute("data-name")
        const size = event.target.getAttribute("data-size")
        
        removeitemCart(name, size);
    }
})

//function botao remover
function removeitemCart(name, size){
    const index = cart.findIndex(item => item.name === name && (item.size === size || item.size == null));

    if(index !== -1) {
        const item = cart [index]
        
        if (item.quantity > 1){
            item.quantity -= 1;
            updateCartModal();
            return;
        }

        cart.splice(index,  1);
        updateCartModal();

    }
}

//adress input
addressInput.addEventListener("input", function(event){
    let inputValue = event.target.value;
    
    if(inputValue !== ""){
        addressInput.classList.remove("border-red-500")
        addressWarn.classList.add("hidden")
    }
    
})


//finalizar pedido
checkOutBtn.addEventListener("click", function(){

    const isOpen = checkRestaurantOpen();
    if(!isOpen){

        Toastify({
            text: "Ops o restaurante está fechado!",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#ef4444",
            },
    }).showToast();
    return;
    }

    if(cart.length === 0) return;
    if(addressInput.value === ""){
        addressWarn.classList.remove("hidden")
        addressInput.classList.add("border-red-500")
        return;
    }

    //ENVIAR PEDIDO PRA API DO ZAP
    const cartItems = cart.map((item) => {
        let itemInfo = `\n•${item.name} | Quantidade: (${item.quantity}) | Preço:R$${item.price.toFixed(2)}\n `;
    
        // Adiciona o tamanho apenas se estiver definido para o item
        if (item.size) {
            itemInfo += `| Tamanho:(${item.size})`;
        }
    
        return itemInfo;
    }).join("\n");
    
    const total = updateCartModal();
    
    const message = encodeURIComponent(`${cartItems}  \n*Valor total: R$${total.toFixed(2)}*\n*Endereço: ${addressInput.value}*`);
    const phone = "+5588998404876";
    
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    
    cart = [];
    updateCartModal();

})

//function de verificar o horario
function checkRestaurantOpen() {
    const data = new Date();
    const hora = data.getHours();
    return hora >= 10 && hora < 23; 
}

const spanItem = document.getElementById("date-span")
const isOpen = checkRestaurantOpen();

if(isOpen){
    spanItem.classList.remove("bg-red-500");
    spanItem.classList.add("bg-green-600");
} else {
    spanItem.classList.remove("bg-green-600")
    spanItem.classList.add("bg-red-500")
}
