import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from './Modal.js';
import Back from './Back';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

const Home = (props) => {
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(true);
	};
	const closeModal = () => {
		setModalOpen(false);
	};	
	return (
		<>
			<div id="Grid">
				<Link to ="/">
					<button>메인 화면으로 가기
						</button> </Link>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Item >
						<button onClick={openModal}>
							<img src="img/구름1.jpg" id="img1"></img> 
						</button>
						<Modal open={modalOpen} close={closeModal} header="해님 달님">
						{/* Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
						해와 달이 된 오누이 그 신화...!
						<Grid container>
						<Grid item xs={12}>
						<Link to="/scene1">
						<button>하러가기</button>
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


export default Home;