let Products = [
  {
    quantity: 0,
    price: 0,
    discount: 0,
    class: 'basket',
  },
  {
    quantity: 0,
    price: 0,
    discount: 0,
    class: 'clock',
  },
  {
    quantity: 0,
    price: 0,
    discount: 0,
    class: 'lamp',
  },
  {
    quantity: 0,
    price: 0,
    discount: 0,
    class: 'painting',
  }
];
function togglePanel() {
  var panel = document.querySelector('.slide-panel');
  panel.classList.toggle('open');
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {

  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}

let count = 0, Total_Price = 0 , Total_Discount = 0 , Total_Items = 0;
function handleAddClick(param) {
  console.log(Products,param)

  count = count + 1;
  if(count>0){
  document.getElementById("cart-notification").style.display = "block";
  document.getElementById("cart-notification").textContent = count;}

  if (param == 1) {
    Products[0].quantity = Products[0].quantity + 1;
    console.log("basket quantity", Products[0].quantity, "price ", Products[0].price);

    Products[0].price = Products[0].price+ 500;
    if( Products[0].price>3000)
    {
      Products[0].discount = 800;
      Products[0].price =  Products[0].price - Products[0].discount;
    }
    console.log("basket quantity",Products[0].price);
    document.getElementById("basket-price").textContent = "Price: " + Products[0].price;
    document.getElementById("basket-discount").textContent = "discount:  - " + Products[0].discount;


  }
  else if (param == 2) {
    Products[1].quantity = Products[1].quantity + 1;
    Products[1].price = Products[1].price+ 1000;
    if( Products[1].price>3000)
    {
      Products[1].discount = 200;
      Products[1].price =  Products[1].price - Products[1].discount;
    }
     console.log("clock price",Products[1].price);
     document.getElementById("clock-price").textContent = "Price: " + Products[1].price;
     document.getElementById("clock-discount").textContent = "discount:  - " + Products[1].discount;
  }
  else if (param == 3)
  {
     Products[2].quantity = Products[2].quantity + 1;
     Products[2].price = Products[2].price+ 300;
     if( Products[2].price>3000)
     {
       Products[2].discount = 50;
       Products[2].price =  Products[2].price - Products[2].discount;
     }
    console.log("lamp price",Products[2].price);
    document.getElementById("lamp-price").textContent = "Price: " + Products[2].price;
     document.getElementById("lamp-discount").textContent = "discount:  - " + Products[2].discount;
  }
    else if (param == 4)
    {
      Products[3].quantity = Products[3].quantity + 1;
      Products[3].price = Products[3].price+ 2000;
      if( Products[3].price>3000)
      {
        Products[3].discount = 100;
        Products[3].price =  Products[3].price - Products[3].discount;
      }
      console.log("painting price",Products[3].price);
      document.getElementById("painting-price").textContent = "Price: " + Products[3].price;
     document.getElementById("painting-discount").textContent = "discount:  - " + Products[3].discount;

    }

 Total_Price = Products[0].price+Products[1].price+Products[2].price+Products[3].price;
 Total_Discount = Products[0].discount+Products[1].discount+ Products[2].discount+Products[3].discount;
 Total_Items = count;
 document.getElementById("Total-Price").textContent = Total_Price;
 document.getElementById("Total-Discount").textContent = Total_Discount;
 document.getElementById("Total-Items").textContent = Total_Items;

}

function handleSubtractClick(param) {
  if (count <= 0) {
    setTimeout(function() {
      document.getElementById("cart-notification").style.display = "none";
    }, 10000000);
  }
  if (count > 0) {
    count = count - 1;
    document.getElementById("cart-notification").style.display = "block";
    document.getElementById("cart-notification").textContent = count;

    if (param == 1) {
      Products[0].quantity = Products[0].quantity - 1;
      Products[0].price = Products[0].price - 500;
      if (Products[0].price < 1000) {
        Products[0].discount = 0;
      }
      console.log("basket quantity", Products[0].quantity, "price ", Products[0].price);
      document.getElementById("basket-price").textContent = "Price: " + Products[0].price;
      document.getElementById("basket-discount").textContent = "discount:  - " + Products[0].discount;
    } else if (param == 2) {
      Products[1].quantity = Products[1].quantity - 1;
      Products[1].price = Products[1].price - 1000;
      if (Products[1].price < 1000) {
        Products[1].discount = 0;
      }
      console.log("clock quantity", Products[1].quantity, "price ", Products[1].price);
      document.getElementById("clock-price").textContent = "Price: " + Products[1].price;
      document.getElementById("clock-discount").textContent = "discount:  - " + Products[1].discount;
    } else if (param == 3) {
      Products[2].quantity = Products[2].quantity - 1;
      Products[2].price = Products[2].price - 300;
      if (Products[2].price < 1000) {
        Products[2].discount = 0;
      }
      console.log("lamp quantity", Products[2].quantity, "price ", Products[2].price);
      document.getElementById("lamp-price").textContent = "Price: " + Products[2].price;
      document.getElementById("lamp-discount").textContent = "discount:  - " + Products[2].discount;
    } else if (param == 4) {
      Products[3].quantity = Products[3].quantity - 1;
      Products[3].price = Products[3].price - 2000;
      if (Products[3].price < 1000) {
        Products[3].discount = 0;
      }
      console.log("painting quantity", Products[3].quantity, "price ", Products[3].price);
      document.getElementById("painting-price").textContent = "Price: " + Products[3].price;
      document.getElementById("painting-discount").textContent = "discount:  - " + Products[3].discount;
    }
Total_Price = Products[0].price+Products[1].price+Products[2].price+Products[3].price;
Total_Discount = Products[0].discount+Products[1].discount+ Products[2].discount+Products[3].discount;
Total_Items = count;
document.getElementById("Total-Price").textContent = Total_Price;
document.getElementById("Total-Discount").textContent = Total_Discount;
document.getElementById("Total-Items").textContent = Total_Items;

}
}