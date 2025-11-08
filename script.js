function showBrands() {
  const input = document.getElementById("productInput").value.toLowerCase();
  const brandList = document.getElementById("brandList");

  const brands = {
    car: ["Toyota", "BMW", "Ford", "Tata", "Honda"],
    phone: ["Apple", "Samsung", "OnePlus", "Realme", "Vivo"],
    laptop: ["HP", "Dell", "Lenovo", "Asus", "Apple"],
    shoe: ["Nike", "Adidas", "Puma", "Reebok"]
  };

  if (brands[input]) {
    brandList.innerHTML = `<strong>Popular ${input} brands:</strong> ${brands[input].join(", ")}`;
  } else {
    brandList.innerHTML = "❌ No brands found for that product.";
  }
}
