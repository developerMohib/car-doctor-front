
import product1 from "../assets/images/products/1.png"
import product2 from "../assets/images/products/2.png"
import product3 from "../assets/images/products/3.png"
import product4 from "../assets/images/products/4.png"
import product5 from "../assets/images/products/5.png"
import product6 from "../assets/images/products/6.png"

const Products = () => {
   
    return (
        <div>
            <div className="lg:w-1/2 mx-auto my-10 ">
        <div className="text-center" >
        <h1 className="text-xl text-[#FF3811] font-bold">Popular Products</h1>
        <h1 className="text-3xl font-bold">
        Browse Our Products
        </h1>
        <p className="py-6">
        the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
        </p>
        </div>
      </div>
      <div className="lg:grid grid-cols-3 gap-5 ">
      <div className="card py-5 shadow-xl px-10 col-span-1 text-center justify-center">
            <figure>
                <img className="w-52" src={product1} alt="" />
            </figure>
            <div className="">
                <p>Car Engine Plug</p>
                <h2 className=" "> $20.00 </h2>
            </div>
        </div>
      <div className="card py-5 shadow-xl px-10 col-span-1 text-center justify-center"> text-center
            <figure>
                <img className="w-52" src={product2} alt="" />
            </figure>
            <div className="">
                <p>Car Air Filter</p>
                <h2 className=" ">$20.00!</h2>
            </div>
        </div>
        <div className="card py5-5 shadow-xl px-10 col-span-1 text-center justify-center">
            <figure>
                <img className="w-52" src={product3} alt="" />
            </figure>
            <div className="">
                <p>Cools Led Light</p>
                <h2 className=" ">$20.00</h2>
            </div>
        </div>
        <div className="card py5-5 shadow-xl px-10 col-span-1 text-center justify-center">
            <figure>
                <img className="w-52" src={product4} alt="" />
            </figure>
            <div className="">
                <p>Cools Led Light</p>
                <h2 className=" ">$20.00</h2>
            </div>
        </div>
      <div className="card py-5 shadow-xl px-10 col-span-1 text-center justify-center">
            <figure>
                <img className="w-52" src={product5} alt="" />
            </figure>
            <div className="">
                <p>Cools Led Light</p>
                <h2 className=" ">$20.00</h2>
            </div>
        </div>
      <div className="card py-5 shadow-xl px-10 col-span-1 text-center justify-center">
            <figure>
                <img className="w-52" src={product6} alt="" />
            </figure>
            <div className="">
                <p>Cools Led Light</p>
                <h2 className=" ">$20.00</h2>
            </div>
        </div>
      </div>
      <div className="text-center my-10">
        <button className="btn btn-outline bg-[#FF3811] ">
          {" "}
          More Servies{" "}
        </button>
      </div>
        </div>
    );
};

export default Products;