import AllCategories from "@/components/AllCategories";
import Container from "@/components/Container";
import Offer from "@/components/Offer";
import ProductGroup from "@/components/ProductGroup";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-1/5">
          <h2 className="text-2xl text-gray-800 font-semibold my-3">
            All Categories
          </h2>
          <AllCategories />
        </div>
        <div className="w-full sm:w-4/5 space-y-6 py-6 ">
          <div>
          <h3 className="text-lg font-semibold " >Groceries</h3>
        <ProductGroup category="groceries" />
          </div>
        
          <Offer />
          <div className="" >
          <h3 className="text-lg font-semibold " >Laptops</h3>
          <ProductGroup category="laptops" />

          </div>
          <div>
          <h3 className="text-lg font-semibold " >Furniture</h3>
          <ProductGroup category="furniture" />

          </div>
        </div>
      </div>
    </Container>
  );
}
