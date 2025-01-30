// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     userId: null,
//     result: [],
// };

// const resultReducer = createSlice({
//     name: "result",
//     initialState,
//     reducers: {
//         setUserId: (state, action) => {
//             state.userId = action.payload;
//         },
//         pushResultAction: (state, action) => {
//             state.result.push(action.payload);
//         },
//         updateResultAction: (state, action) => {
//             const { trace, checked } = action.payload;
//             state.result[trace] = checked;
//         },
//         resetResultAction: () => initialState,
//     },
// });

// export const { setUserId, pushResultAction, updateResultAction, resetResultAction } = resultReducer.actions;
// export default resultReducer.reducer;