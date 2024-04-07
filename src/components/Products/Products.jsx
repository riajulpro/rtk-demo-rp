import { useGetProductsQuery } from "../../redux/features/api/apiSlice";
import ProductCard from "../../utils/ProductCard/ProductCard";
const Products = () => {
  const { data: products } = useGetProductsQuery();

  return (
    <div>
      <h1 className="text-2xl font-bold uppercase">All Products</h1>
      <div className="productPanel gap-x-[20px] gap-y-[30px]">
        {products?.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
