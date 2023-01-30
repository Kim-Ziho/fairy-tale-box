import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Main.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from './Modal.js';


const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

const Main = (props) => {
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};
	const closeModal = () => {
		setModalOpen(false);
	};	
	return (
		<>
			<h3>안녕하세요. 메인페이지 입니다.</h3>
			<div id="Grid">
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Item >
						<button onClick={openModal}>
							<img src="img/구름1.jpg" id="img1"></img> 
						</button>
						<Modal open={modalOpen} close={closeModal} header="모달창 띄우기">
						{/* Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
						리액트 함수형 모달 팝업창입니다.
						<Grid container>
						<Grid item xs={12}>
						<Link to="/scene1">
						<button>하이</button>
						</Link>
						
							
						</Grid>
						</Grid>
						</Modal>					
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item><img src="img/loading.png" id="img1"></img></Item>
				</Grid>
				<Grid item xs={4}>
					<Item><img src="img/loading.png" id="img1"></img></Item>
				</Grid>
				<Grid item xs={4}>
					<Item><img src="img/loading.png" id="img1"></img></Item>
				</Grid>
				<Grid item xs={4}>
					<Item><img src="img/loading.png" id="img1"></img></Item>
				</Grid>
				<Grid item xs={4}>
					<Item><img src="img/loading.png" id="img1"></img></Item>
				</Grid>
			</Grid>
			</div>
		</>
	);
};


export default Main;