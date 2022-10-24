import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { documents } from "../../data";
import Card from "../../components/Card/Card";
import Thread from "./Thread";
import RichTextEditor from "../../components/TextEditor/RichTextEditor";

const Threads = () => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    fetch(`/thread`)
      .then((res) => res.json())
      .then((data) => {
        setDocs(data.data);
      });
  }, []);
  console.log(docs);

  return (
    docs &&
    docs.length &&
    docs.map((doc) => {
      return <Thread doc={doc} />;
    })
    // <Thread />
    // <RichTextEditor />
  );
};
export default Threads;
