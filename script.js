// Example: Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);  // Changes slide every 5 seconds

// JavaScript to update the rate based on the quantity selected
function updateRate(selectElement) {
    const selectedValue = selectElement.value;
    const productContainer = selectElement.closest('.product');
    const rateElement = productContainer.querySelector('.rate');

    let ratePerKg;

    // Update rates based on the product
    if (productContainer.querySelector('img').alt === 'Urad Dal') {
        ratePerKg = 199; // Rate for Urad Dal
    } else if (productContainer.querySelector('img').alt === 'Toor Dal Pack') {
        ratePerKg = 199; // Rate for Toor Dal Pack
    } else if (productContainer.querySelector('img').alt === 'Toor Dal') {
        ratePerKg = 199; // Rate for Toor Dal
    } else if (productContainer.querySelector('img').alt === 'Urad Dal Pack') {
        ratePerKg = 199; // Rate for Urad Dal Pack
    }

    // Calculate the total price based on the quantity
    if (selectedValue > 0) {
        const totalPrice = (ratePerKg * selectedValue).toFixed(2);
        rateElement.textContent = `Total: Rs ${totalPrice}`;
    } else {
        rateElement.textContent = `Rate: Rs ${ratePerKg}/kg`;
    }
}


