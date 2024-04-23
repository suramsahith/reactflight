// import { createStore } from "react";

// const store =createStore();

// export default store;





import { createStore } from "redux";
import bookingReducer from "./bookingReducer";


const store = createStore(bookingReducer);
export default store;
