export default function Contact({ countryData }) {
	return (
		<section className="bg-umojablue text-white p-10">
			<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<h3 className="text-2xl font-bold mb-4">Contact Information</h3>
					<p className="mb-2">
						<strong>Phone:</strong> {countryData.contact.phone}
					</p>
					<p className="mb-2">
						<strong>Email:</strong> {countryData.contact.email}
					</p>
					<p>
						<strong>Address:</strong> {countryData.contact.address}
					</p>
				</div>
				<div>
					<h3 className="text-2xl font-bold mb-4">Location</h3>
					<iframe
						src={countryData.mapLink}
						width="100%"
						height="200"
						loading="lazy"
						title={`Map for ${countryData.title}`}
						className="border-0 rounded-lg"
					></iframe>
				</div>
			</div>
		</section>
	);
}
