import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchQestion } from "../hooks/FetchQuestion";
import { updateResult } from "../hooks/setResult";

const Questions = ({ onChecked }) => {
    const dispatch = useDispatch();
    const { trace } = useSelector((state) => state.questions);
    const result = useSelector((state) => state.result.result);
    const [{ isLoading, apiData, serverError }] = useFetchQestion();
    const questionData = useSelector((state) => state.questions.queue[trace]);

    const handleSelect = (index) => {
        dispatch(updateResult({ trace, checked: index }));
        onChecked(index);
    };

    if (isLoading) return <h3 className="text-light">Loading...</h3>;
    if (serverError) return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;
    if (!questionData) return <h3 className="text-light">No questions available</h3>;

    return (
        <div className="questions">
            <h2 className="text-light">{questionData?.question}</h2>
            <ul key={questionData?.id}>
                {questionData?.options.map((option, index) => (
                    <li key={index}>
                        <input
                            type="radio"
                            value={index}
                            name={`options-${questionData.id}`}
                            id={`q${index}-option`}
                            onChange={() => handleSelect(index)}
                            checked={result[trace] === index}
                        />
                        <label className="text-primary" htmlFor={`q${index}-option`}>
                            {option}
                        </label>
                        <div className={`check ${result[trace] === index ? "checked" : ""}`}></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Questions;