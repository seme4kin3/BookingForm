import { useReducer } from "react";
import List from "../List/List";
import "./styles.css";
import { bookingReducer } from "../../context/bookingContext";

const booking = {
  tower: "",
  floor: "",
  room: "",
  date: "",
  timeStart: "",
  timeEnd: "",
  comment: "",
};
const towers = ["-", "А", "Б"];
const floors = [
  "-",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
];
const rooms = ["-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const Bookingform = () => {
  const [state, dispatch] = useReducer(bookingReducer, booking);

  const handleTowerChange = (e) => {
    dispatch({
      type: "CHANGE_TOWER",
      payload: e,
    });
  };
  const handleFloorChange = (e) => {
    dispatch({
      type: "CHANGE_FLOOR",
      payload: e,
    });
  };
  const handleRoomChange = (e) => {
    dispatch({
      type: "CHANGE_ROOM",
      payload: e,
    });
  };

  const handleChangeDate = (e) => {
    dispatch({
      type: "CHANGE_DATE",
      payload: e,
    });
  };

  const handleTimeStartChange = (e) => {
    dispatch({
      type: "CHANGE_TIMESTART",
      payload: e,
    });
  };
  const handleTimeEndChange = (e) => {
    dispatch({
      type: "CHANGE_TIMEEND",
      payload: e,
    });
  };

  const handleCommentChange = (e) => {
    dispatch({
      type: "CHANGE_COMMENT",
      payload: e,
    });
  };

  return (
    <div className="conteiner">
      <div className="mainForm">
        <ul className="listBox">
          <li>
            <span className="name">Башня</span>
            <List
              state={state.tower}
              element={towers}
              changeElement={handleTowerChange}
            />
          </li>
          <li>
            <span className="name">Этаж</span>
            <List
              state={state.floor}
              element={floors}
              changeElement={handleFloorChange}
            />
          </li>
          <li>
            <span className="name">Комната</span>
            <List
              state={state.room}
              element={rooms}
              changeElement={handleRoomChange}
            />
          </li>
        </ul>
        <div className="timeBox">
          <input
            id="date"
            type="date"
            value={state.date}
            onChange={(e) => handleChangeDate(e.target.value)}
          />
          <div className="time">
            <input
              id="timeStart"
              type="time"
              value={state.timeStart}
              onChange={(e) => handleTimeStartChange(e.target.value)}
            />
            <span className="tire">&mdash;</span>
            <input
              id="timeEnd"
              type="time"
              value={state.timeEnd}
              onChange={(e) => handleTimeEndChange(e.target.value)}
            />
          </div>
        </div>
        <div className="commentBox">
          <textarea
            id="comment"
            value={state.comment}
            onChange={(e) => handleCommentChange(e.target.value)}
          />
        </div>
        <div className="buttonsBox">
          <button id="add" onClick={() => console.log(JSON.stringify(state))}>
            Отправить
          </button>
          <button id="remove" onClick={() => dispatch({ type: "RESET_STATE" })}>
            Очистить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookingform;
