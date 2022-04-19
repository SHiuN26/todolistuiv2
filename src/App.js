import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import ListAll from "./ListAll";
import { BsFillPlusSquareFill } from "react-icons/bs";
//---------------------------------------
const Container = styled.div`
  background-color: #636363;
  height: 650px;
  width: 500px;
  border-bottom: 1px solid darkGrey;
  margin: 0 auto;
  box-sizing: border-box;

  .TopArea {
    height: 25%;
    border-bottom: 1px solid #acacac;
    padding: 25px 25px 10px 25px;
    box-sizing: border-box;
  }
  .TopArea h1 {
    padding: 0;
    margin: 0;
    color: white;
    font-weight: 400;
  }
  .TopArea span {
    color: lightgrey;
  }
  .ListArea {
    height: 43%;
    padding: 20px 30px;
    overflow-x: hidden;
    box-sizing: border-box;
    border-bottom: 1px solid #acacac;
    // overflow-y: auto;
    //overflow-y:scroll; /*強制出現滾動條*/
    // border: 1px solid black;
  }
  .Footer {
    height: 32%;
    width: 100%;
    box-sizing: border-box;
    // border: 1px solid black;
  }
  .Footer p {
    color: #6eace6;
    padding: 15px 30px 0px 30px;
    margin: 0px;
    margin-top: 110px;
  }
  .Footer .addArea {
    width: 100%;
    padding: 0px 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    margin-top: 0px;
  }
  .Footer .addInput {
    border-style: none;
    border-radius: 4px;
    border: 1px solid #6eace6;
    height: 30px;
    width: 90%;
    margin-right: 5px;
    background-color: #808080;
    color: white;
    display: inline-block;
  }
  .Footer .addButton {
    height: 36px;
    width: 10%;
    background-color: #6eace6;
    border-style: none;
    border-radius: 3px;
    color: white;
    font-weight: 900;
    // &hover: Pointer;
    display: inline-block;
    cursor: pointer;
  }
`;

function App() {
  const [item, setItem] = useState("");
  const [data, setData] = useState([
    "Aaaaaaaa",
    "Bbbbbbbbbb",
    "Ccccccccccc",
    "Ddddddddd",
    "Eeeeeeeeeee",
  ]);

  function addItem(item) {
    if (item === "") {
      return;
    }
    const newData = [...data, item];
    setData(newData);
    // setItem("");
  }

  function handleDelete(index) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }
  return (
    <div className="App">
      <Container>
        <div className="TopArea">
          <h1>Todo List</h1>
          <span>Get things done,one item add a time</span>
        </div>
        <div className="ListArea">
          <ListAll data={data} handleDelete={handleDelete} />
        </div>
        <div className="Footer">
          <p>Add to todo list</p>
          <div className="addArea">
            <input
              className="addInput"
              type="text"
              value={item}
              onChange={(event) => setItem(event.target.value)}
            ></input>
            <button
              className="addButton"
              onClick={() => {
                addItem(item);
              }}
            >
              <BsFillPlusSquareFill />
              //待處理
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
