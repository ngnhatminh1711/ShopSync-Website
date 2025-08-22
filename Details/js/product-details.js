// Xử lý chọn size và tăng giảm số lượng sản phẩm

document.addEventListener('DOMContentLoaded', function() {
    // Size button selection
    const sizeBtns = document.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            sizeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Color circle selection
    const colorCircles = document.querySelectorAll('.color-circle');
    colorCircles.forEach(circle => {
        circle.addEventListener('click', function() {
            colorCircles.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Quantity selector
    const quantitySelector = document.querySelector('.quantity-selector');
    if (quantitySelector) {
        const minusBtn = quantitySelector.querySelector('button[aria-label="Decrease quantity"]');
        const plusBtn = quantitySelector.querySelector('button[aria-label="Increase quantity"]');
        const quantitySpan = quantitySelector.querySelector('span');
        let quantity = parseInt(quantitySpan.textContent, 10) || 1;

        minusBtn.addEventListener('click', function() {
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
            }
        });
        plusBtn.addEventListener('click', function() {
            quantity++;
            quantitySpan.textContent = quantity;
        });
    }
});
