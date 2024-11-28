"use client";

const Footer = () => {
	return (
		<div className="text-center py-3 bg-white w-full">
			<p className="text-uppercase font-weight-bold text-umojablue">
				©{new Date().getFullYear()}
				<span className="ml-2">Copyright - Umoja International</span>
			</p>

			<div className="bg-footerBg w-full h-10 bg-no-repeat bg-center bg-cover">
				<div className="e-con-inner"></div>
			</div>
		</div>
	);
};

export default Footer;
