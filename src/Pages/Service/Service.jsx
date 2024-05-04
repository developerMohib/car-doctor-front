import { Link, useLoaderData, useParams, } from "react-router-dom";
import Banner from "../../Components/Banner";

const Service = () => {
  const serVice = useLoaderData();
  const {id} = useParams();

  console.log(serVice,"servies")
  const filterSer = serVice?.find(item => item._id == id);

  console.log('useloader',filterSer);
  const {description,img,title,facility} = filterSer || { } ;
  
  return (
    <div>
      <div className="relative my-10">
        <Banner> </Banner>
        <div className=" bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute h-full w-full top-0 left-0">
          <h1 className="font-bold text-2xl text-white absolute left-[10%] top-1/2 ">
            Service Details
          </h1>
        </div>
        <div className="text-xl items-center justify-center py-0 flex breadcrumbs mx-auto">
          <ul className="bg-[#FF3811] px-5 rounded-lg " >
            <li>
              <Link className="text-white" > Home </Link>
            </li>
            <li  className="text-white " >Servies</li>
          </ul>
        </div>
      </div>
      <div className="lg:grid grid-cols-3 " >
        <div className="col-span-2" >
          <img src={img} alt="" />
          <h1 className="font-blod text-2xl my-3 "> {title} </h1>
          <p> {description} </p>
          <div className="grid grid-cols-2 gap-5 my-10 ">
          {
            facility?.map((item, id )=> (
              <div key={id} className="bg-base-300 border-t border-black rounded-lg p-5 " >
                <h1 className="text-2xl font-semibold"> {item.name} </h1>
                <p>{item.details}</p>
              </div>
            ) )
          }
          </div>
          <div>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. </p>
            <div className="grid grid-cols-3 gap-5 my-10" >
              <div className="bg-base-300 rounded-lg "> card 1 </div>
              <div className="bg-base-300 rounded-lg "> card 2 </div>
              <div className="bg-base-300 rounded-lg "> card 3 </div>
            </div>
          </div>
        </div>
        <div className="col-span-1" ></div>
      </div>
    </div>
  );
};

export default Service;
