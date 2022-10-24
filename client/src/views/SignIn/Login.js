

import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components/Button/Button';
import PrimaryInput from '../../components/Input/PrimaryInput';

export default function Login() {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: '',
		password: '',
		phoneNumber: '',
		country: 'SA',
		dialCode: '+966',
	});

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};




	const handleLogin = () => {
		if (user.email && user.password) {
			fetch("/login", {
				method: "POST",
				body: JSON.stringify(user),
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			})
				.then((res) => res.json())
				.then(sessionStorage.setItem("user", user.email));
			navigate("/home");
		}
		else {
			alert("Please enter details")
		}

	};

	return (
		// <AuthContainer>
		<>
			<Grid alignItems="center" justifyContent="center" container sx={{ minHeight: '100vh' }}>

				<Grid item xs={12} sm={12} md={6}>
					<Grid xs={12} item textAlign={'center'}>
						<Typography component="h1" variant="h5">
							{'LOGIN'}
						</Typography>
						<Typography component={'p'}>{'LOGIN_BACK'}</Typography>
					</Grid>
					<Box pt={3} sx={{ width: '100%' }}>


						<Grid sx={{ width: '100%' }} pt={3} item xs={12}>
							<PrimaryInput
								label={'EMAIL'}
								type={'text'}
								name="email"
								fullWidth
								placeholder={'MAIL_ADDRESS'}
								startAdornment={<Email color="disabled" />}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item pt={3} xs={12}>
							<PrimaryInput
								label={'PASSWORD'}
								type={'password'}
								name="password"
								fullWidth
								placeholder={'ENTER_PASSWORD'}
								startAdornment={<Lock color="disabled" />}
								onChange={handleChange}
							/>

						</Grid>

					</Box>
					<Grid item xs={12} sx={{ paddingTop: 2 }}>
						<PrimaryButton onClick={handleLogin} variant="contained" fullWidth>
							{"Login"}
						</PrimaryButton>
					</Grid>

				</Grid>
			</Grid>

		</>
		// </AuthContainer>
	);
}

