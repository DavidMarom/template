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
		<div className="text-section">
			<h1>Code Playground</h1>
			<h2>Welcome to my code playground.</h2>
			<p>This project contains different code practices and use of frameworks and libraries</p>
			<p>React, Redux, NodeJS, Express, MongoDB, Firebase, axios, socket.io, SCSS, Flex, debounce, regex, promises, routing</p>
			<p>Hooks: useState, useContext, useEffect, useDispatch, useSelector ...</p>
			<div className="h-space"></div>
			<h2>UI design is in progress</h2>
			<p>For some nice looking CSS please see my other projects: <span><a target="_blank" rel="noreferrer" href="http://davidmarom.site/">Link to portfolio</a></span> </p>
			
			<div className="h-space"></div>
			<h2>Source code on gitHub</h2>
			<p>Link: <span><a target="_blank" rel="noreferrer" href="https://github.com/DavidMarom/template">repo</a></span> </p>



			<div className="h-space"></div>
			<p>Hire me: 054-8762043</p>
		</div>
	)
}