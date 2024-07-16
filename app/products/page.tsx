import ProductHeader from "./productHeader";
import Image from "next/image";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Props {
  params: {
    id: string;
  };

  searchParams: {};
}
const page = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products: Product[] = await res.json();

  return (
    <>
      <ProductHeader />
      <section className="grid grid-cols-responsive gap-3">
        {products.map((product) => (
          <div className="card bg-base-100 shadow-xl" key={product.id}>
            <figure
              style={{ width: "100%", height: "320px", position: "relative" }}
            >
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectPosition="center"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p>{product.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default page;
