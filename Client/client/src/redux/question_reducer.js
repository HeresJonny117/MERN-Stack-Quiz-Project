import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    queue: [],
    answers: [],
    trace: 0,
};

const questionReducer = createSlice({
    name: "questions",
    initialState,
    reducers: {
        startExamAction: (state, action) => {
            const { question, answers } = action.payload;
            state.queue = question;
            state.answers = answers;
        },
        moveNextAction: (state) => {
            state.trace += 1;
        },
        movePrevAction: (state) => {
            state.trace -= 1;
        },
        resetAllAction: () => initialState,
    },
});

export const { startExamAction, moveNextAction, movePrevAction, resetAllAction } = questionReducer.actions;
export default questionReducer.reducer;