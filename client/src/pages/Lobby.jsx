import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'

export const Lobby = () => {
	const dispatch = useDispatch()

	// On mount
	useEffect(() => {
		dispatch(setPageName('lobby'));
	}, [])// eslint-disable-line react-hooks/exhaustive-deps


	return (
		<div className="text-page">
			<h1>Code Playground</h1>
			<h2>Welcome to my code playground.</h2>
			<p>This project contains different code practices and use of framework and libraries</p>
			<p>React, Redux, NodeJS, Express, MongoDB, Firebase, axios, socket.io, SCSS, Flex, debounce, regex, promises, routing</p>
			<p>Hooks: useState, useContext, useEffect, useDispatch, useSelector ...</p>
			<p>-</p>
			<p>UI design is in progress</p>
			<p>For some nice looking CSS please see my other projects </p>
			<p>-</p>
			<p>Hire me: 054-8762043</p>



		</div>
	)
}