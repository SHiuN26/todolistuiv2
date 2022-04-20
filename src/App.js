import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import ListAll from "./ListAll";
// import {Checkbox, Switch} from 'antd';
import { Switch } from "antd";
import "antd/dist/antd.css";
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
    { key: 0, value: "Aaaaaaaa", isCheck: false },
    { key: 1, value: "Bbbbbbbbbb", isCheck: false },
    { key: 2, value: "Ccccccccccc", isCheck: false },
    { key: 3, value: "Ddddddddd", isCheck: false },
    { key: 4, value: "Eeeeeeeeeee", isCheck: false },
  ]);
  const [isSwitch, setSwitch] = useState(false);

  function addItem(val) {
    if (val === "") {
      return;
    }
    const addTodo = { key: data.length + 1, value: val, isCheck: false };
    const newData = [...data, addTodo].map((item, index) => {
      return {
        ...item, //待理解
        key: index, //待理解
      };
    });
    setData(newData);
    // setItem("");
  }

  function handleDelete(index) {
    const newData = [...data];
    const dataIndex = newData.map((x) => x.key).indexOf(index);
    newData.splice(dataIndex, 1);
    const newData1 = newData.map((item, index) => {
      return {
        ...item,
        key: index,
      };
    });
    setData(newData1);
  }

  function handleCheck(index) {
    const newData = [...data];
    console.log(newData);
    const dataIndex = newData.map((x) => x.key).indexOf(index);
    if (newData[dataIndex].isCheck === true) {
      newData[dataIndex].isCheck = false;
      setData(newData);
    } else {
      newData[dataIndex].isCheck = true;
      setData(newData);
    }
  }

  function handleSwitch(isSwitch) {
    const newData = [...data];
    const newData2 = [...data];
    if (isSwitch === true) {
      newData.sort((item) => (item.isCheck === true ? 1 : -1));
      console.log(newData);
      setData(newData);
      setSwitch(isSwitch);
    } else {
      console.log(newData2);
      // newData2.sort(function (a, b) {
      //   return a.index - b.index;
      // });
      setData(data);
      setSwitch(isSwitch);
    }
  }
  return (
    <div className="App">
      <Container>
        <div className="TopArea">
          <h1>Todo List</h1>
          <span>Get things done,one item add a time</span>
        </div>
        <div className="ListArea">
          <ListAll
            data={data}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        </div>
        <div className="Footer">
          <Switch defaultChecked={isSwitch} onChange={handleSwitch} />
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
            ></button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
