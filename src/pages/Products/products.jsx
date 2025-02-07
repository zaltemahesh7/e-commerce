import ProductCard from "../../components/Products/ProductCard";

function Products() {
  const exampleProduct = {
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    image:
      "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_1280.jpg",
    rating: 4.5,
    reviews: 128,
  };

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-[5vw] scroll-smooth">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
          <ProductCard key={i} product={exampleProduct} />
        ))}
      </div>
    </>
  );
}

export default Products;
