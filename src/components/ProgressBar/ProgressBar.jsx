import React from 'react';

const ProgressBar = ({ skill, percentage }) => {
    return (
        <div className="mb-4 w-full md:w-[587px]">
            <div className="flex justify-between mb-1">
                <span className="font-poppins text-lg md:text-2xl text-[var(--text-white)] font-semibold">
                    {skill}
                </span>
                <span className="font-inter text-[10px] text-[var(--text-item-color)] font-normal">
                    {percentage}%
                </span>
            </div>
            <div className="w-full bg-[var(--progress)] rounded-full h-2.5">
                <div
                    className="bg-[var(--primary-color)] h-2.5 rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;