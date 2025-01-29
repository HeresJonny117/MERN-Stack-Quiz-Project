import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../styles/Result.css";
import ResultTable from "./ResultTable";
import {
    attempts_Number,
    earnPoints_Number,
    flagResult,
} from "../helper/helper";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import { usePublishResult } from "../hooks/setResult";

const Result = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const { queue = [], answers = [] } = state.questions || {};
    const { result = [], userId = "" } = state.result || {};

    const totalPoints = queue.length * 10;
    const attempts = attempts_Number(result);
    const earnedPoints = earnPoints_Number(result, answers, 10);
    const isPassed = flagResult(totalPoints, earnedPoints);

    usePublishResult({
        result,
        username: userId,
        attempts,
        points: earnedPoints,
        achived: isPassed ? "Passed" : "Failed",
    });

    const handleRestart = () => {
        dispatch(resetAllAction());
        dispatch(resetResultAction());
    };

    return (
        <div className="container">
            <h1 className="title text-light">Quiz Results</h1>
            <div className="result flex-center">
                {["Username", "Total Quiz Points", "Total Questions", "Total Attempts", "Total Earned Points"].map((label, index) => (
                    <div className="flex" key={index}>
                        <span>{label} :</span>
                        <span className="bold">
                            {index === 0 ? userId : index === 1 ? totalPoints : index === 2 ? queue.length : index === 3 ? attempts : earnedPoints}
                        </span>
                    </div>
                ))}
                <div className="flex">
                    <span>Quiz Result :</span>
                    <span className="bold" style={{ color: isPassed ? "#2aff95" : "#ff2a66" }}>
                        {isPassed ? "Passed" : "Failed"}
                    </span>
                </div>
            </div>
            <div className="start">
                <Link className="btn" to="/" onClick={handleRestart}>
                    Restart Quiz
                </Link>
            </div>
            <div className="container">
                <ResultTable />
            </div>
        </div>
    );
};

export default Result;
