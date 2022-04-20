import { useState } from "react";
import styled from "styled-components";

const ListDiv = styled.div`
  height: 50px;
  width: 100%;
  border: 2px solid #6eace6;
  border-left: 4px solid #6eace6;
  text-decoration: ${(props) => props.isCheck ? 'line-through' : 'none'};
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
  // display:${(props) => props.isSwitch ? 'hidden' : ''};
  // text-decoration: ${({check, name}) => check ? 'line-through' : 'none'};
`;
const ListCheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0px 15px;
  border: 2px;
`;
const ListText = styled.p`
  margin : 0px;
`;
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
  const {value, index, handleDelete, handleCheck,isCheck} = props;
  // useEffect(()=>{
  //   console.log(props);
  // },[props])

  return (
    <ListDiv isCheck={isCheck}>   
      <ListCheckBox
        type="checkbox"
        isCheck={isCheck}
        onChange={()=>handleCheck(index)}
      ></ListCheckBox>
      <ListText>{value}</ListText>
      <ListButton onClick={() => handleDelete(index)}>X</ListButton>
    </ListDiv>
  );
}

export default ListItem;
