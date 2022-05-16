import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
	return (
		<ContentLoader
			className="pizza-block"
			speed={2}
			width={280}
			height={460}
			viewBox="0 0 280 460"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb">
			<circle cx="140" cy="120" r="120" />
			<rect x="0" y="270" rx="6" ry="6" width="280" height="26" />
			<rect x="1" y="320" rx="6" ry="6" width="280" height="84" />
			<rect x="160" y="420" rx="23" ry="23" width="120" height="38" />
			<rect x="0" y="423" rx="3" ry="3" width="90" height="28" />
		</ContentLoader>
	);
}

export default LoadingBlock;
