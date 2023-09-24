let cart = []
const cartTotalElt = document.querySelector('.cart-quantity')
const addCartBtns = document.querySelectorAll('.add-to-cart-button')

// let totalQty = 0

addCartBtns.forEach((btn) => (
  btn.addEventListener('click', () =>{
    const productId = btn.dataset.productId;

    let matchingItem;
    cart.forEach(item => {
      if (productId === item.productId){
        matchingItem = item
      }
    })

    if (matchingItem){
      matchingItem.quantity += 1
    } else {
      cart.push({
        productId: productId,
        quantity: 1
      })
    }

    let totalQty = 0
    cart.forEach(item => {
      totalQty += item.quantity
    })

    cartTotalElt.innerHTML = totalQty
    console.log(cart, totalQty);
  })
) )