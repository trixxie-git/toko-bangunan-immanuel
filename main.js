// Daftar produk untuk pencarian
const products = [
  "Besi",
  "Semen Conch",
  "Keramik",
  "Palu",
  "Gunting",
  "Selang",
  "Tong Air",
  "Pipa pvc",
  "Pipa listrik",
  "GRC",
  "Canal C",
  "Besi Serbaguna",
  "Kunci Pintu",
  "Engsel Pintu",
  "Grendel Pintu & Jendela",
  "Lem Pipa",
  "Lem Fox",
  "Lem Eha Bond",
  "Topi Proyek",
  "Cornice",
  "Cat Dinding",
  "Cat Minyak",
  "Kuas",
  "Slot Pintu",
  "Kran Air",
  "Obeng",
];

// Fungsi untuk menangani pencarian
function searchProduct(event) {
  event.preventDefault(); // Mencegah form dari submit default
  const searchInput = document
    .querySelector('input[name="search"]')
    .value.toLowerCase();
  const foundProduct = products.find(
    (product) => product.toLowerCase() === searchInput
  );

  if (foundProduct) {
    alert(`Produk ditemukan: ${foundProduct}`);
    // Arahkan ke produk yang ditemukan
    const productId = foundProduct.toLowerCase().replace(/ /g, "-"); // Ganti spasi dengan tanda hubung
    const productElement = document.getElementById(productId);
    if (productElement) {
      productElement.scrollIntoView({ behavior: "smooth" }); // Gulir ke produk
    }
  } else {
    alert("Produk tidak ditemukan.");
  }
}
