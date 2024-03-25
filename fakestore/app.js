fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        const cardsContainer = document.getElementById("cardsContainer");
        
        data.map((product) => {
            const card = document.createElement("div");
            card.classList.add("card");
            
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="card-image">
                <div class="card-body">
                    <h2 class="card-title">${product.title}</h2>
                    <p class="card-price">$${product.price}</p>
                    <p class="card-description">${product.description}</p>
                    <p class="card-category">${product.category}</p>
                   
                </div>
            `;
            
            cardsContainer.appendChild(card);
        });
    });
