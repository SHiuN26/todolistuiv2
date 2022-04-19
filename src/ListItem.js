import { useState } from "react";
import styled from "styled-components";

const ListDiv = styled.div`
  height: 50px;
  width: 100%;
  border: 2px solid #6eace6;
  border-left: 4px solid #6eace6;
  margin-bottom: 10px;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;
`;
const ListCheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0px 15px;
  border: 2px;
`;
const ListText = styled.p``;
const ListButton = styled.button`
  font-weight: 500;
  color: #6eace6;
  background-color: transparent;
  border-style: none;
  font-size: 25px;
  position: absolute;
  right: 5px;
  cursor: pointer;
`;

function ListItem(props) {
  const { handleDelete, value, index } = props;
  const [check, setCheck] = useState(false);
  function handleCheck() {
    if (check === true) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }
  return (
    <ListDiv
      key={index}
      style={{ textDecorationLine: check === true ? "line-through" : "none" }}
    >
      <ListCheckBox
        type="checkbox"
        checked={check}
        onChange={handleCheck}
      ></ListCheckBox>
      <ListText>{value}</ListText>
      <ListButton onClick={() => handleDelete(index)}></ListButton>
    </ListDiv>
  );
}

export default ListItem;
