import React from 'react';

export const Button = ({onClick, title}) => {
	return (
		<button
			onClick={() => onClick()}
			className={'button'}
		>
			{title}
		</button>
	);
};
