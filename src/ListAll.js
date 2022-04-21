import ListItem from "./ListItem";
function ListAll(props) {
  const { data, handleDelete,handleCheck} = props;
  // console.log(props);
  const newData = data.map((item, index) => {
    return (
      <ListItem
        key={index}
        value={item.value}
        index={item.key}
        isCheck={item.isCheck}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
    );
  });
  return <>{newData}</>;
}

export default ListAll;
