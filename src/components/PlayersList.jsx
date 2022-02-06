import React, { useState } from 'react';
import { Player } from './Player';

export const PlayersList = ({roles}) => {
	const [nights, setNights] = useState([]);

	return (
		<div className={'players-list'}>
			<div className={'players-list__header'}>
				<div>
					<div className={'player-number'}>#</div>
					<div className={'player-id'}>ID</div>
					<div className={'player-role'}>Роль</div>
					<div className={'player-foll'}>Фоллы</div>
				</div>
				
				<div>
				{nights.map(night => <div className={'night'} key={night}>Н {night}</div>)}
					<div 
						className={'player-kill'} 
						onClick={() => setNights([...nights, nights.length + 1])}
					>Ночь</div>
				</div>
			</div>
			
			{roles.map((role, index) => <Player key={index} role={role} number={index+1} nights={nights} />)}
		</div>
	);
}
