function NavigationItem(props: { icon: React.ReactNode; label: string }) {
	return (
		<button className="d-flex align-items-center gap-3 px-4 py-2 w-100 text-start">
			<span className="flex-shrink-0">{props.icon}</span>
			<span className="h5 mb-0 fw-bold text-light">{props.label}</span>
		</button>
	);
}

export default NavigationItem;
