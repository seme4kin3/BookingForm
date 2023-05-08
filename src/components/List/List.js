import "./styles.css";

const List = ({ state, element, changeElement }) => {
  return (
    <div>
      <select
        className="selectBox"
        value={state}
        onChange={(e) => changeElement(e.target.value)}
      >
        {element?.map((el, index) => (
          <option key={index}>{el}</option>
        ))}
      </select>
    </div>
  );
};

export default List;
