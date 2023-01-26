import React from 'react';
import { Link } from 'react-router-dom';
import "./Main.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

const Main = (props) => {
	return (
		<>
			<h3>안녕하세요. 메인페이지 입니다.</h3>
			<div id="Grid">
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Item ><img src="img/구름1.jpg" id="img1"></img> </Item>
				</Grid>
				<Grid item xs={4}>
					<Item><img src="img/구름1.jpg" id="img1"></img></Item>
				</Grid>
				<Grid item xs={4}>
					<Item><img src="img/구름1.jpg" id="img1"></img></Item>
				</Grid>
				<Grid item xs={4}>
					<Item><img src="img/구름1.jpg" id="img1"></img></Item>
				</Grid>
				<Grid item xs={4}>
					<Item><img src="img/구름1.jpg" id="img1"></img></Item>
				</Grid>
				<Grid item xs={4}>
					<Item><img src="img/구름1.jpg" id="img1"></img></Item>
				</Grid>
			</Grid>
			</div>
		</>
	);
};

export default Main;