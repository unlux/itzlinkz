import React from "react";
import type { Theme } from "../App";
type CustomizationPanelProps = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};
const backgroundOptions = [
    {
        color: "#ffffff",
        name: "Light",
    },
    {
        color: "#000000",
        name: "Dark",
    },
    {
        color: "#0f172a",
        name: "Navy",
    },
    {
        color: "#18181b",
        name: "Zinc",
    },
    {
        color: "#831843",
        name: "Rose",
    },
    {
        color: "#1e3a8a",
        name: "Royal",
    },
];
export function CustomizationPanel({
    theme,
    setTheme,
}: CustomizationPanelProps) {
    const handleColorChange = (backgroundColor: string) => {
        const r = parseInt(backgroundColor.slice(1, 3), 16);
        const g = parseInt(backgroundColor.slice(3, 5), 16);
        const b = parseInt(backgroundColor.slice(5, 7), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        const textColor = brightness > 128 ? "#000000" : "#ffffff";
        setTheme((prev) => ({
            ...prev,
            backgroundColor,
            textColor,
            accentColor: textColor === "#000000" ? "#3b82f6" : "#60a5fa",
        }));
    };
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Choose Theme</h2>
            <div className="grid grid-cols-3 gap-3">
                {backgroundOptions.map((option) => (
                    <button
                        key={option.color}
                        onClick={() => handleColorChange(option.color)}
                        className={`h-20 rounded-lg flex items-center justify-center text-sm font-medium transition-transform hover:scale-105 ${
                            theme.backgroundColor === option.color
                                ? "ring-2 ring-blue-500"
                                : ""
                        }`}
                        style={{
                            backgroundColor: option.color,
                            color:
                                option.color === "#ffffff"
                                    ? "#000000"
                                    : "#ffffff",
                        }}
                    >
                        {option.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
