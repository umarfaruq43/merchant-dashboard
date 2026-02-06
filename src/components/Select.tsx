import { cn } from "@/lib/utilities";
import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: { value: string; label: string }[];
    label: string;
    labelStyle?: string;
    allowDefault?: boolean;
}

const Select: React.FC<SelectProps> = ({
    options,
    label,
    labelStyle,
    allowDefault = true,
    ...props
}) => {
    return (
        <div className="flex flex-col">
            <label className={cn("mb-1", labelStyle)}>{label}</label>
            <select className="p-2 border rounded" {...props}>
                {allowDefault && <option value="">Select...</option>}
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
