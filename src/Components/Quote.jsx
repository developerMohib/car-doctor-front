
// import quote from "../assets/icons/quote.svg"

const Quote = () => {
    return (
        <div className="lg:grid grid-cols-2" >
            <section className="p-6">
	<div className="container">
		<div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-50 text-gray-800">
			<div className="flex justify-between" >
            <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full bg-gray-500" />
            </div><div className="text-center text-gray-600">
				<p>Leroy Jenkins</p>
				<p>CEO of Company Co.</p>
			</div>
			<blockquote className="max-w-lg text-lg italic font-medium text-center"> Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia! </blockquote>
			
			<div className="">
				<button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full bg-gray-400"></button>
			</div>
		</div>
	</div>
</section>
            <section className="p-6">
	<div className="container">
		<div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-50 text-gray-800">
			<div className="flex justify-between" >
            <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full bg-gray-500" />
            </div>
            <div className="text-center text-gray-600">
				<p>Leroy Jenkins</p>
				<p>CEO of Company Co.</p>
			</div>
			<blockquote className="max-w-lg text-lg italic font-medium text-center"> Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia! </blockquote>
			<div className="">
				<button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full bg-gray-400"></button>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Quote;