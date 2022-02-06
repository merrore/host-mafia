import React, { useState } from 'react';

import killIcon from '../assets/kill.svg';
import healIcon from '../assets/heal.svg';
import checkIcon from '../assets/check.svg';

export const ActionSelect = () => {
	const options = [killIcon, healIcon, checkIcon];

	const [actions, setActions] = useState([]);
	const [isActive, setIsActive] = useState(false);

	const isActions = () => {
		if (!actions.length) return 'Select';
		
		return <>
			{actions.map(action => <img key={'action'} className={'action-icon'} src={action} />)}
		</>
	}

	return (
		<div className={'action-select-wrapper'}>
			<div className={'action-select__button'} onClick={() => setIsActive(!isActive)}>
				{isActions()}
			</div>

			{isActive &&
				<div className={'action-select__options'}>
					{options.map(option => <img 
						className={'action-icon'} 
						src={option} 
						key={option} 
						onClick={() => {
							if (actions.includes(option)) {
								setIsActive(false);
								return;
							}

							setActions([...actions, option]);
							setIsActive(false);
						}} />)}
				</div>
			}
		</div>
	);
}
