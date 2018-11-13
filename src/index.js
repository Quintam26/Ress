import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList';

window.React = React

render(
	<SkiDayList days={
		[
			{
				resort: "Death Valley",
				date: new Date("1/25/2010"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Pheasant Mountain",
				date: new Date("8/5/2001"),
				powder: true,
				backcountry: true
			},
			{
				resort: "Hell's Gate",
				date: new Date("7/7/1998"),
				powder: false,
				backcountry: true
			}
		]
	}/>,
	document.getElementById('react-container')
	)