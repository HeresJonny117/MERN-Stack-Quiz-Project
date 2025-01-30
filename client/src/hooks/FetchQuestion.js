import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";
import * as Action from "../redux/question_reducer";


export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [dataState, setDataState] = useState({
        isLoading: false,
        apiData: [],
        serverError: null,
    });

    useEffect(() => {
        
        setDataState((prevState) => ({ ...prevState, isLoading: true }));

        const fetchData = async () => {
            try {
                const [{ questions, answers }] = await getServerData(
                    `http://localhost:${process.env.PORT || 5000}/api/questions`,
                    (data) => data
                );

                if (questions.length > 0) {
                    
                    setDataState({ isLoading: false, apiData: questions, serverError: null });

                    
                    dispatch(Action.startExamAction({ question: questions, answers }));
                } else {
                    throw new Error("No questions available.");
                }
            } catch (error) {
                
                setDataState({
                    isLoading: false,
                    apiData: [],
                    serverError: error.message,
                });
            }
        };

        fetchData();
    }, [dispatch]);

    return [dataState, setDataState];
};


export const moveNextQuestion = () => (dispatch) => {
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.error("Error moving to next question:", error);
    }
};


export const movePrevQuestion = () => (dispatch) => {
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.error("Error moving to previous question:", error);
    }
};