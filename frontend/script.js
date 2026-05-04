const demoProducts = [
       // Notebooks (4 items)
    {
        id: 1,
        name: "Classic Notebook",
        price: 199,
        category: "Notebooks",
        imageUrl: "https://tse3.mm.bing.net/th/id/OIP.kAU1TuE7omYKWCHNSNrz7wHaHa?pid=Api&h=220&P=0"
    },
    {
        id: 2,
        name: "Spiral Notebook",
        price: 150,
        category: "Notebooks",
        imageUrl: "https://images-cdn.ubuy.co.in/633aba2608ff2c6275335967-spiral-notebook-4-pcs-a5-thick-plastic.jpg"
    },
    {
        id: 3,
        name: "Pocket Notebook",
        price: 109,
        category: "Notebooks",
        imageUrl: "https://tse2.mm.bing.net/th/id/OIP.LAABLYdLkVuJIBRnoQediAHaHa?pid=Api&h=220&P=0"
    },
    {
        id: 4,
        name: "Hardcover Notebook",
        price: 299,
        category: "Notebooks",
        imageUrl: "https://tse1.mm.bing.net/th/id/OIP.avAuYhWM-VbhOkjPMCWMZQHaHa?pid=Api&h=220&P=0"
    },

    // Pens (4 items)
    {
        id: 5,
        name: "Ball Pen",
        price: 99,
        category: "Pens",
        imageUrl: "https://m.media-amazon.com/images/I/51pKcb25leL._AC_.jpg"
    },
    {
        id: 6,
        name: "Gel Pen",
        price: 149,
        category: "Pens",
        imageUrl: "https://tse4.mm.bing.net/th/id/OIP.ZwUQ4bAKlhfFdwKif9pfSwAAAA?pid=Api&h=220&P=0"
    },
    {
        id: 7,
        name: "Fountain Pen",
        price: 399,
        category: "Pens",
        imageUrl: "https://moneyinc.com/wp-content/uploads/2018/03/pen.jpg"
    },
    {
        id: 8,
        name: "Marker Pen",
        price: 249,
        category: "Pens",
        imageUrl: "https://tse2.mm.bing.net/th/id/OIP.mNw-WPCgXieAdfXWkycZKAHaH5?pid=Api&h=220&P=0"
    },

    // Markers (4 items)
    {
        id: 9,
        name: "Permanent Marker",
        price: 199,
        category: "Markers",
        imageUrl: "https://4.imimg.com/data4/EP/XN/MY-3188980/1-1000x1000.jpg"
    },
    {
        id: 10,
        name: "Whiteboard Marker",
        price: 129,
        category: "Markers",
        imageUrl: "https://tse3.mm.bing.net/th/id/OIP.q7r1GR9KsphbgD7Ga0QtKwHaHa?pid=Api&h=220&P=0"
    },
    {
        id: 11,
        name: "Highlighter",
        price: 124,
        category: "Markers",
        imageUrl: "https://shop.ourstore.in/wp-content/uploads/2022/09/image-43.png"
    },
    {
        id: 12,
        name: "Sketch Marker",
        price: 30,
        category: "Markers",
        imageUrl: "https://tse4.mm.bing.net/th/id/OIP.Dks_xrVFmaHELBT03MAVewHaHa?pid=Api&h=220&P=0"
    },

    // Office Material (4 items)
    {
        id: 13,
        name: "Stapler",
        price: 749,
        category: "Office Material",
        imageUrl: "https://lzd-img-global.slatic.net/g/ff/kf/S349d7c1d54dd4bac85e6bec70ea108b6r.jpg_720x720q80.jpg"
    },
    {
        id: 14,
        name: "Paper Clips",
        price: 89,
        category: "Office Material",
        imageUrl: "https://m.media-amazon.com/images/I/715+AY9qwUL._AC_.jpg"
    },
    {
        id: 15,
        name: "File Folder",
        price: 149,
        category: "Office Material",
        imageUrl: "https://m.media-amazon.com/images/I/71F4T8EEHdL.jpg"
    },
    {
        id: 16,
        name: "Punch Machine",
        price: 249,
        category: "Office Material",
        imageUrl: "https://makerbazar.in/cdn/shop/files/DP800PunchMachineMakerbzaar_1.jpg?v=1728557903&width=1080"
    },

    // School Kids (4 items)
    {
        id: 17,
        name: "Pencil Box",
        price: 99,
        category: "School Kids",
        imageUrl: "https://deodap.in/cdn/shop/files/02_ff06138a-dd19-47b6-9f2c-a8deb27c39b1_700x700.jpg?v=1694588930"
    },
    {
        id: 18,
        name: "Crayons",
        price: 99,
        category: "School Kids",
        imageUrl: "https://tse4.mm.bing.net/th/id/OIP.4RHzQ3mVzUPKcMamlPKVSgHaDt?pid=Api&h=220&P=0"
    },
    {
        id: 19,
        name: "Water Bottle",
        price: 149,
        category: "School Kids",
        imageUrl: "https://m.media-amazon.com/images/I/71wGx9Trb7L._AC_SL1500_.jpg"
    },
    {
        id: 20,
        name: "School Bag",
        price: 599,
        category: "School Kids",
        imageUrl: "https://m.media-amazon.com/images/I/81c5+8lQQ7L.jpg"
    }
];

const CART_KEY = "cartItems";
const PRODUCT_CATEGORIES = ["Notebooks", "Pens", "Markers", "Office", "Art Material", "School Kits"];

function getCartItems() {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    try {
        return JSON.parse(raw);
    } catch (e) {
        return [];
    }
}

function saveCartItems(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function renderNavbarAuth() {
    const navWrap = document.querySelector(".nav-wrap");
    if (!navWrap) return;

    const existingStaticAuth = navWrap.querySelector(".nav-auth-btn");
    if (existingStaticAuth) {
        existingStaticAuth.remove();
    }

    const oldAuthArea = navWrap.querySelector(".nav-auth-area");
    if (oldAuthArea) {
        oldAuthArea.remove();
    }

    const authArea = document.createElement("div");
    authArea.className = "nav-auth-area";

    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    if (token && username) {
        const userLabel = document.createElement("span");
        userLabel.className = "nav-username";
        userLabel.textContent = `Hi, ${username}`;

        const logoutBtn = document.createElement("button");
        logoutBtn.className = "btn nav-logout-btn";
        logoutBtn.type = "button";
        logoutBtn.textContent = "Logout";
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("username");
            window.location.href = "auth.html";
        });

        authArea.appendChild(userLabel);
        authArea.appendChild(logoutBtn);
    } else {
        const loginLink = document.createElement("a");
        loginLink.className = "btn";
        loginLink.href = "auth.html";
        loginLink.textContent = "Login / Sign Up";
        authArea.appendChild(loginLink);
    }

    navWrap.appendChild(authArea);
}

function addToCart(product) {
    const cart = getCartItems();
    const existing = cart.find((item) => String(item.id) === String(product.id));
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: Number(product.price) || 0,
            category: product.category || "General",
            imageUrl: product.imageUrl || "",
            quantity: 1
        });
    }
    saveCartItems(cart);
    alert("Added to cart");
}

function renderProducts(targetId, data, filterCategory) {
    const container = document.getElementById(targetId);
    if (!container) return;

    const list = filterCategory
        ? data.filter((p) => (p.category || "").toLowerCase() === filterCategory.toLowerCase())
        : data;

    // Remove 'Add to Cart' button for home page (featuredProducts)
    const isHomeFeatured = targetId === "featuredProducts";
    container.innerHTML = list.map((p) => `
        <article class="card">
            <img src="${p.imageUrl || "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=60"}" alt="${p.name}">
            <div class="card-body">
                <span class="chip">${p.category || "General"}</span>
                <h3 class="card-title">${p.name}</h3>
                <p class="price">Rs. ${p.price}</p>
                ${!isHomeFeatured ? `<button class="btn add-to-cart-btn" type="button" data-product-id="${p.id}">Add to Cart</button>` : ""}
            </div>
        </article>
    `).join("");

    if (!isHomeFeatured) {
        container.querySelectorAll(".add-to-cart-btn").forEach((button) => {
            button.addEventListener("click", () => {
                const id = button.getAttribute("data-product-id");
                const product = list.find((item) => String(item.id) === String(id));
                if (product) addToCart(product);
            });
        });
    }
}

async function fetchAndRenderProducts() {
    const container = document.getElementById("allProducts");
    if (!container) return;

    try {
        const response = await fetch("http://localhost:8080/products");
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        const apiProducts = await response.json();
        renderProducts("allProducts", apiProducts);
    } catch (error) {
        container.innerHTML = "<p class='card-text'>Could not load products from backend. Showing sample products.</p>";
        renderProducts("allProducts", demoProducts);
    }
}

async function handleCategoryPage() {
    const categoryContainer = document.getElementById("categoryCards");
    const categoryProducts = document.getElementById("categoryProducts");
    const selectedCategoryTitle = document.getElementById("selectedCategoryTitle");
    const emptyMessage = document.getElementById("categoryEmptyMessage");
    if (!categoryContainer || !categoryProducts || !selectedCategoryTitle || !emptyMessage) return;

    let products = demoProducts;
    try {
        const response = await fetch("http://localhost:8080/products");
        if (response.ok) {
            products = await response.json();
        }
    } catch (e) {
        // Keep demo products if backend is unavailable.
    }

    renderProducts("allProducts", products);

    const renderCategory = (category) => {
        selectedCategoryTitle.textContent = `${category} Products`;
        renderProducts("categoryProducts", products, category);
        const filtered = products.filter((p) => (p.category || "").toLowerCase() === category.toLowerCase());
        emptyMessage.textContent = filtered.length === 0 ? `No products found in ${category}.` : "";
    };

    categoryContainer.querySelectorAll("[data-category]").forEach((button) => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            if (!category) return;
            categoryContainer.querySelectorAll("[data-category]").forEach((el) => el.classList.remove("active"));
            button.classList.add("active");
            renderCategory(category);
        });
    });

    const defaultCategoryButton = categoryContainer.querySelector("[data-category='Notebooks']");
    if (defaultCategoryButton) {
        defaultCategoryButton.classList.add("active");
        renderCategory("Notebooks");
    }
}

function handleContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thanks! We received your message.");
        form.reset();
    });
}

function decodeJwtPayload(token) {
    try {
        const payloadPart = token.split(".")[1];
        if (!payloadPart) return null;
        const normalized = payloadPart.replace(/-/g, "+").replace(/_/g, "/");
        const json = atob(normalized);
        return JSON.parse(json);
    } catch (e) {
        return null;
    }
}

function redirectByRole(role) {
    if (role === "ADMIN") {
        window.location.href = "admin-dashboard.html";
        return;
    }
    if (role === "USER") {
        window.location.href = "index.html";
        return;
    }
    window.location.href = "index.html";
}

function handleLoginForm() {
    const form = document.getElementById("loginForm");
    const errorBox = document.getElementById("loginError");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (errorBox) errorBox.textContent = "";

        const username = document.getElementById("username")?.value?.trim();
        const password = document.getElementById("password")?.value || "";

        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                throw new Error("Invalid username or password");
            }

            const data = await response.json();
            const token = data.token;
            if (!token) {
                throw new Error("Token not received from server");
            }

            localStorage.setItem("token", token);
            const payload = decodeJwtPayload(token);
            const role = payload?.role || "USER";
            localStorage.setItem("role", role);
            localStorage.setItem("username", username);
            redirectByRole(role);
        } catch (error) {
            if (errorBox) {
                errorBox.textContent = error.message || "Login failed";
            }
        }
    });
}

function handleRegisterForm() {
    const form = document.getElementById("registerForm");
    if (!form) return;

    const errorBox = document.getElementById("registerError");
    const successBox = document.getElementById("registerSuccess");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (errorBox) errorBox.textContent = "";
        if (successBox) successBox.textContent = "";

        const username = document.getElementById("registerUsername")?.value?.trim();
        const password = document.getElementById("registerPassword")?.value || "";
        const confirmPassword = document.getElementById("registerConfirmPassword")?.value || "";

        try {
            if (!username || !password || !confirmPassword) {
                throw new Error("Please complete all fields.");
            }
            if (password !== confirmPassword) {
                throw new Error("Passwords do not match.");
            }

            let response, data = {};
            try {
                response = await fetch("http://localhost:8080/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, password, role: "USER" })
                });
                data = await response.json();
            } catch (err) {
                throw new Error("Could not connect to server. Please check if backend is running.");
            }
            if (!response.ok) {
                throw new Error(data?.message || data?.error || "Registration failed");
            }

            if (successBox) {
                successBox.textContent = "Registration successful. Please login to continue.";
            }

            // Switch to login tab after registration
            const tabLogin = document.getElementById("tabLogin");
            const tabSignup = document.getElementById("tabSignup");
            const loginSection = document.getElementById("loginSection");
            const signupSection = document.getElementById("signupSection");

            setTimeout(() => {
                if (tabLogin && tabSignup && loginSection && signupSection) {
                    tabLogin.classList.add("active");
                    tabSignup.classList.remove("active");
                    loginSection.style.display = "block";
                    signupSection.style.display = "none";
                } else {
                    window.location.href = "auth.html";
                }
            }, 800);
        } catch (error) {
            if (errorBox) {
                errorBox.textContent = error.message || "Registration failed";
            }
        }
    });
}

function removeFromCart(productId) {
    const cart = getCartItems().filter((item) => String(item.id) !== String(productId));
    saveCartItems(cart);
    renderCart();
}

function renderCart() {
    const container = document.getElementById("cartItems");
    const totalBox = document.getElementById("cartTotal");
    if (!container || !totalBox) return;

    const cart = getCartItems();
    if (cart.length === 0) {
        container.innerHTML = "<p class='card-text'>Your cart is empty.</p>";
        totalBox.textContent = "Total: Rs. 0";
        return;
    }

    let total = 0;
    container.innerHTML = cart.map((item) => {
        const lineTotal = (Number(item.price) || 0) * (item.quantity || 1);
        total += lineTotal;
        return `
            <article class="cart-item">
                <div>
                    <h3 class="card-title">${item.name}</h3>
                    <p class="card-text">${item.category}</p>
                    <p class="card-text">Quantity: ${item.quantity || 1}</p>
                    <p class="price">Rs. ${lineTotal}</p>
                </div>
                <button class="btn remove-btn" type="button" data-remove-id="${item.id}">Remove</button>
            </article>
        `;
    }).join("");

    totalBox.textContent = `Total: Rs. ${total}`;

    container.querySelectorAll(".remove-btn").forEach((button) => {
        button.addEventListener("click", () => {
            removeFromCart(button.getAttribute("data-remove-id"));
        });
    });
}

function getAuthHeaders() {
    const token = localStorage.getItem("token");
    if (!token) return null;
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
}

async function loadAdminProducts() {
    const container = document.getElementById("adminProductsList");
    if (!container) return;

    try {
        const response = await fetch("http://localhost:8080/products");
        if (!response.ok) throw new Error("Failed to load products");
        const products = await response.json();

        const categoryOptions = (selectedCategory) => PRODUCT_CATEGORIES
            .map((category) => `<option value="${category}"${selectedCategory === category ? " selected" : ""}>${category}</option>`)
            .join("");

        container.innerHTML = products.map((p) => `
            <article class="card">
                <img src="${p.imageUrl || "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=60"}" alt="${p.name}">
                <div class="card-body">
                    <h3 class="card-title">${p.name}</h3>
                    <p class="card-text">${p.category}</p>
                    <p class="price">Rs. ${p.price}</p>
                    <form class="admin-update-form" data-id="${p.id}">
                        <input type="text" name="name" value="${p.name}" required>
                        <select name="category" required>
                            ${categoryOptions(p.category)}
                        </select>
                        <input type="number" name="price" step="0.01" min="0" value="${p.price}" required>
                        <input type="text" name="imageUrl" value="${p.imageUrl || ""}" placeholder="Image URL">
                        <button class="btn" type="submit">Update</button>
                    </form>
                    <button class="btn remove-btn admin-delete-btn" data-id="${p.id}" style="margin-top: 8px;" type="button">Delete</button>
                </div>
            </article>
        `).join("");

        container.querySelectorAll(".admin-update-form").forEach((form) => {
            form.addEventListener("submit", async (e) => {
                e.preventDefault();
                const id = form.getAttribute("data-id");
                const headers = getAuthHeaders();
                const message = document.getElementById("adminActionMessage");
                if (!headers) {
                    if (message) message.textContent = "Please login as admin first.";
                    return;
                }

                const payload = {
                    name: form.elements.name.value.trim(),
                    category: form.elements.category.value.trim(),
                    price: Number(form.elements.price.value),
                    imageUrl: form.elements.imageUrl.value.trim()
                };

                try {
                    const response = await fetch(`http://localhost:8080/products/${id}`, {
                        method: "PUT",
                        headers,
                        body: JSON.stringify(payload)
                    });
                    if (!response.ok) throw new Error("Update failed. Ensure you are logged in as admin.");
                    if (message) message.textContent = "Product updated successfully.";
                    await loadAdminProducts();
                } catch (error) {
                    if (message) message.textContent = error.message || "Update failed.";
                }
            });
        });

        container.querySelectorAll(".admin-delete-btn").forEach((button) => {
            button.addEventListener("click", async () => {
                const id = button.getAttribute("data-id");
                const headers = getAuthHeaders();
                const message = document.getElementById("adminActionMessage");
                if (!headers) {
                    if (message) message.textContent = "Please login as admin first.";
                    return;
                }
                try {
                    const response = await fetch(`http://localhost:8080/products/${id}`, {
                        method: "DELETE",
                        headers
                    });
                    if (!response.ok) throw new Error("Delete failed. Ensure you are logged in as admin.");
                    if (message) message.textContent = "Product deleted successfully.";
                    await loadAdminProducts();
                } catch (error) {
                    if (message) message.textContent = error.message || "Delete failed.";
                }
            });
        });
    } catch (error) {
        container.innerHTML = "<p class='card-text'>Could not load products.</p>";
    }
}

function handleAdminCrud() {
    const form = document.getElementById("adminAddProductForm");
    if (!form) return;

    const message = document.getElementById("adminActionMessage");
    const role = localStorage.getItem("role");
    if (role !== "ADMIN") {
        if (message) message.textContent = "You are not logged in as admin.";
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const headers = getAuthHeaders();
        if (!headers) {
            if (message) message.textContent = "Please login as admin first.";
            return;
        }

        const payload = {
            name: document.getElementById("adminProductName")?.value?.trim(),
            category: document.getElementById("adminProductCategory")?.value?.trim(),
            price: Number(document.getElementById("adminProductPrice")?.value),
            imageUrl: document.getElementById("adminProductImageUrl")?.value?.trim()
        };

        try {
            const response = await fetch("http://localhost:8080/products", {
                method: "POST",
                headers,
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error("Create failed. Ensure you are logged in as admin.");
            if (message) message.textContent = "Product created successfully.";
            form.reset();
            await loadAdminProducts();
        } catch (error) {
            if (message) message.textContent = error.message || "Create failed.";
        }
    });

    loadAdminProducts();
}

document.addEventListener("DOMContentLoaded", () => {
    renderNavbarAuth();
    renderProducts("featuredProducts", demoProducts);
    fetchAndRenderProducts();
    handleCategoryPage();
    handleContactForm();
    handleLoginForm();
    handleRegisterForm();
    renderCart();
    handleAdminCrud();
});
