import { useEffect, useState } from "react";
import styled from "styled-components";
import { documents } from "../../data";

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
    <>
      {documents.map((doc) => {
        return <Docs doc={doc} />;
      })}
    </>
  );
};
export default AllDocs;

const Docs = styled.div``;
