import ListItem from "./ListItem";
function ListAll(props) {
  const { data, handleDelete } = props;

  const newData = data.map((item, index) => {
    return (
      <ListItem
        key={index}
        index={index}
        value={item}
        handleDelete={handleDelete}
      />
    );
  });
  // console.log(newData);
  return <>{newData}</>;
}

export default ListAll;
