import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayer } from '../store/action-creators';
import { ActionSelect } from './ActionSelect';

export const Player = ({role, number, nights}) => {
	const dispatch = useDispatch();

	const isGameEnd = useSelector(({gameReducer: {isGameEnd}}) => isGameEnd);

	const [value, setValue] = useState('');
	const [isDead, setIsDead] = useState(false);
	const [folls, setFolls] = useState(0);
	

	const isActiveRedRole = role === 'Доктор' || role === 'Комиссар';
	const isBlackRole = role === 'Мафия' || role === 'Дон';

	const playerClass = () => {
		if (isDead) return 'player dead';
		if (folls === 4) return 'player dead';

		if (isActiveRedRole) return 'player red';
		if (isBlackRole) return 'player black';

		return 'player';
	};

	useEffect(() => {
		if (!isGameEnd) return;

		dispatch(setPlayer({number: number, player: value, isDead: isDead, role: role}));
	}, [isGameEnd]);

	return (
		<div className={playerClass()}
		>
			<div>
				<div className={'player-number'} >{number}</div>
				<div className={'player-id'} >
					<input 
						type="text" 
						placeholder='ID'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
				<div className={'player-role'} >{role}</div>
				<div 
					className={'player-foll'} 
					onClick={() => {
						if (folls === 4) return;

						setFolls(folls + 1);
					}}
				>{folls}</div>
			</div>
			
			<div>
				{nights.map(night => <div className={'night'} key={night}>
					<ActionSelect />
				</div>)}
				<div 
					className={'player-kill x'}
					onClick={() => setIsDead(true)}
				>x</div>
			</div>
		</div>	
	);
}
