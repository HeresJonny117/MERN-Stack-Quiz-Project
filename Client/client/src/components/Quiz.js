import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";

const Quiz = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(undefined);
    const dispatch = useDispatch();

    const { result } = useSelector((state) => state.result);
    const { queue, trace } = useSelector((state) => state.questions);

    const handleNext = () => {
        if (trace < queue.length) {
            dispatch(MoveNextQuestion());
            if (result.length <= trace) dispatch(PushAnswer(selectedAnswer));
        }
        setSelectedAnswer(undefined);
    };

    const handlePrev = () => {
        if (trace > 0) dispatch(MovePrevQuestion());
    };

    const handleSelect = (answer) => {
        setSelectedAnswer(answer);
    };

    if (result.length >= queue.length) {
        return <Navigate to="/result" replace />;
    }

    return (
        <div className="container">
            <h1 className="title text-light">Quiz Application</h1>
            <Questions onChecked={handleSelect} />
            <div className="grid">
                {trace > 0 && (
                    <button className="btn prev" onClick={handlePrev}>
                        Prev
                    </button>
                )}
                <button className="btn next" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Quiz;