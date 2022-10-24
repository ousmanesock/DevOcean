import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { documents } from "../../data";
import Card from '../../components/Card/Card'

const Members = () => {
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

		// {
		// 	docs && docs.map((doc) => {
		// 		return <Docs doc={doc} />;
		// 	})
		// }
		< Card />

	);
};
export default Members;

const Docs = styled.div``;
