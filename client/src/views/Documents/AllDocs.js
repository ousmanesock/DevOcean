import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { documents } from "../../data";
import Card from "../../components/Card/Card";
import Document from "./Document";

const AllDocs = () => {
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
    docs &&
    docs.length &&
    docs.map((doc) => {
      return <Document doc={doc} />;
    })
  );
};
export default AllDocs;
