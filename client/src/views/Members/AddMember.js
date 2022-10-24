import {
	Typography,
	Grid
} from '@mui/material';
import React, { useEffect, useState } from "react";

const AddMember = () => {
	const [docs, setDocs] = useState([]);
	useEffect(() => {
		fetch(`/documents`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setDocs(data.data);
			});
	}, []);
	console.log(docs);

	return (
		<Grid>
			<Typography
				variant="h5"
				noWrap
				component="a"
				href=""
			>
				Add Member
			</Typography>
		</Grid>

	);
};
export default AddMember;

