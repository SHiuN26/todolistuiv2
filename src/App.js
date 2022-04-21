import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import ListAll from "./ListAll";
import { Switch } from "antd";
import "antd/dist/antd.css";
import { BsPlusSquareFill } from "react-icons/bs";
import { Progress } from "antd";
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
    padding: 20px 30px;
    position: relative;
  }
  .Footer p {
    color: #6eace6;
    padding: 15px 30px 0px 30px;
    margin: 0px;
    margin-top: 80px;
    position: absolute;
    left: 0px;
  }
  .Footer .addArea {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    box-sizing: border-box;
    position: relative;
    // margin-top: 0px;
    margin-top: 120px;
  }
  .Footer .addInput {
    border-style: none;
    border-radius: 4px;
    border: 1px solid #6eace6;
    height: 40px;
    width: 90%;
    margin-right: 5px;
    background-color: #808080;
    color: white;
    cursor: pointer;
  }
  .Footer .addButton {
    height: 40px;
    width: 10%;
    background-color: #6eace6;
    border-style: none;
    border-radius: 3px;
    color: white;
    font-weight: 900;
    cursor: pointer;
  }
  .Footer span {
    color: white;
    position: absolute;
    margin-top: -10px;
    right: 30px;
  }
`;

function App() {
  const [item, setItem] = useState("");
  const [data, setData] = useState([
    { key: 0, value: "Aaaaaaaa", isCheck: false },
    { key: 1, value: "Bbbbbbbbbb", isCheck: false },
    { key: 2, value: "Ccccccccccc", isCheck: false },
    { key: 3, value: "Ddddddddd", isCheck: false },
  ]);
  const [isSwitch, setSwitch] = useState(false);
  const [percent, setPercent] = useState(0);

  function AddItem(val) {
    if (val === "") {
      return;
    }
    const addTodo = { key: data.length + 1, value: val, isCheck: false };
    const newData = [...data, addTodo].map((item, index) => {
      return {
        ...item,
        key: index,
      };
    });
    setData(newData);
    percentCount(newData);
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

  function handleCheck(key) {
    const newData = [...data];
    const dataIndex = newData.map((x) => x.key).indexOf(key);
    newData[dataIndex].isCheck = !newData[dataIndex].isCheck;
    setData(newData);
    percentCount(newData);
  }

  function handleSwitch(isSwitch) {
    const newData = [...data];
    //以下函示化
    let checkCount = 0;
    newData.forEach((item) => {
      if (item.isCheck === true) {
        checkCount += 1;
      }
    });
    //將上段程式函式化
    if (isSwitch) {
      if (checkCount === 0) {
        return; //如果checkbox沒有任何一個被勾選，則不進行排序
      }
      newData.sort((item) => (item.isCheck === true ? 1 : -1));
      //如果check被勾選，則進行完成事項排序
      setData(newData);
      setSwitch(!isSwitch);
    } else {
      //如果開關關閉，則依照key值進行陣列排序
      newData.sort((a, b) => {
        return a.key - b.key;
      });
      setData(newData);
    }
  }

  function percentCount(data) {
    //以下函示化
    let checkCount = 0;
    data.forEach((item) => {
      if (item.isCheck === true) {
        checkCount += 1;
        //加總checkbox=true的數量
      }
    });
    //以上函示化
    setPercent(Math.round((checkCount / data.length) * 100));
  }
  return (
    <div className="App">
      <Container>
        <div className="TopArea">
          <h1>Todo List</h1>
          <span>Get things done,one item add a time</span>
          <Progress percent={percent} />
        </div>
        <div className="ListArea">
          <ListAll
            data={data}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        </div>
        <div className="Footer">
          <span>
            Move done items to the end?{" "}
            <Switch defaultChecked={isSwitch} onChange={handleSwitch} />
          </span>

          <p>Add to todo list</p>
          <div className="addArea">
            <input
              className="addInput"
              type="text"
              value={item}
              onChange={(event) => setItem(event.target.value)}
            ></input>
            <BsPlusSquareFill
              className="addButton"
              onClick={() => {
                AddItem(item);
              }}
            ></BsPlusSquareFill>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
