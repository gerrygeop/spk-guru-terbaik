import React from "react";

export default function SelectInput({ children, className, ...props }) {
    return (
        <select
            {...props}
            className={`border-gray-300 focus:border-orange-500 focus:ring-orange-500 rounded-md shadow-sm ${className}`}
        >
            {children}
        </select>
    );
}
