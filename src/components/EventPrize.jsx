import React, { useState, useEffect } from 'react';

export const EventPrize = ({players}) => {
	const [redPlayers, setRedPlayers] = useState([]);
	const [blackPlayers, setBlackPlayers] = useState([]);

	const [isRedWon, setIsRedWon] = useState(true);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const game = players.reduce((state, player) => {
			if (player.role === 'Комиссар' || player.role === 'Доктор' || player.role === 'Мирный житель') {
				state.redPlayers = [...state.redPlayers, player];

				if (!player.isDead) state.redAlivePlayers = [...state.redAlivePlayers, player];
			}

			if (player.role === 'Дон' || player.role === 'Мафия') {
				state.blackPlayers = [...state.blackPlayers, player];

				if (!player.isDead) state.blackAlivePlayers = [...state.blackAlivePlayers, player];
			}

			return state;
		}, {
			redPlayers: [],
			redAlivePlayers: [],
			blackPlayers: [],
			blackAlivePlayers: []
		});

		if (game.redAlivePlayers <= game.blackAlivePlayers) setIsRedWon(false);

		setRedPlayers(game.redPlayers);	
		setBlackPlayers(game.blackPlayers);

		setIsLoaded(true);
	}, []);

	const getEventPrize = () => {
		if (isRedWon) return <>
			/event prize {blackPlayers.map((player, index) => <span>
				пользователь{index === 0 ? '' : index + 1}:{player.player} количество{index === 0 ? '' : index + 1}:20  </span>)}

			{redPlayers.map((player, index) => <span>
				пользователь{index + 4}:{player.player} количество{index + 4}:30 </span>)}
		</>

		if (!isRedWon) return <>
			/event prize {blackPlayers.map((player, index) => <span>
				пользователь{index === 0 ? '' : index + 1}:{player.player} количество{index === 0 ? '' : index + 1}:50  </span>)}

			{redPlayers.map((player, index) => <span>
				пользователь{index + 4}:{player.player} количество{index + 4}:20 </span>)}
		</>
	}

    return (
		<div>
			{isLoaded && getEventPrize()}
		</div>
	);
}
