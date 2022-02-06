import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlayersList } from './components/PlayersList';
import { setGameEnd } from './store/action-creators';

import {Button} from './components/Button';
import {randomizeArray} from './utils';
import { EventPrize } from './components/EventPrize';

export const App = () => {
	const dispatch = useDispatch();

	const playersRoles = useSelector(({playersRoles: {playersRoles}}) => playersRoles);
	const players = useSelector(({playersReducer: {players}}) => players);

	const [roles, setRoles] = useState([]);

	const getRoles = () => {
		setRoles([...randomizeArray(playersRoles)]);
	}

	const endGame = () => {
		dispatch(setGameEnd());
	}

	return (
		<div className={'app'}>
			
			<div className={'container'}>
				<Button onClick={getRoles} title={'Выдать роль'} />

				<PlayersList roles={roles} />

				<Button onClick={endGame} title={'Закончить игу'} />

				{players.length === 10 && <EventPrize players={players} />}
			</div>
		</div>
	);
}
