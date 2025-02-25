import React from "react";
import {
    Github,
    Instagram,
    Linkedin,
    Twitter,
    Globe,
    Youtube,
    Twitch,
    BoxIcon,
} from "lucide-react";
import { Profile, Theme } from "../App";

type PhonePreviewProps = {
    profile: Profile;
    theme: Theme;
};

const iconMap: {
    [key: string]: React.ReactNode;
} = {
    github: <Github />,
    instagram: <Instagram />,
    linkedin: <Linkedin />,
    twitter: <Twitter />,
    youtube: <Youtube />,
    portfolio: <Globe />,
    twitch: <Twitch />,
    discord: <div />,
};

const platformLabels: {
    [key: string]: string;
} = {
    github: "GitHub",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    twitter: "Twitter/X",
    youtube: "YouTube",
    portfolio: "Portfolio",
    twitch: "Twitch",
    discord: "BoxIcon",
};

export function PhonePreview({ profile, theme }: PhonePreviewProps) {
    const getIcon = (platform: string) => {
        const key = platform.toLowerCase();
        return iconMap[key] || iconMap.portfolio;
    };

    const getPlatformLabel = (platform: string) => {
        const key = platform.toLowerCase();
        return platformLabels[key] || platform;
    };

    const isLightTheme = theme.backgroundColor === "#ffffff";

    return (
        <div className="w-[300px] h-[600px] rounded-[3rem] border-8 border-black relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
            <div
                className="h-full overflow-y-auto p-6"
                style={{
                    backgroundColor: theme.backgroundColor,
                }}
            >
                <div className="text-center space-y-6">
                    <div
                        className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg border-4 mt-4"
                        style={{
                            backgroundColor: isLightTheme
                                ? "#000000"
                                : "#ffffff",
                            borderColor: `${theme.textColor}20`,
                        }}
                    >
                        <div
                            className="w-full h-full flex items-center justify-center text-3xl font-bold"
                            style={{
                                color: isLightTheme ? "#ffffff" : "#000000",
                            }}
                        >
                            {profile.name
                                ? profile.name.charAt(0).toUpperCase()
                                : "?"}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h1
                            className="text-2xl font-bold"
                            style={{
                                color: theme.textColor,
                            }}
                        >
                            {profile.name || "Your Name"}
                        </h1>
                        <p
                            className="text-sm"
                            style={{
                                color: `${theme.textColor}CC`,
                            }}
                        >
                            {profile.bio || "Your bio will appear here"}
                        </p>
                    </div>
                    <div className="space-y-3">
                        {profile.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full transition-all duration-200 hover:scale-102 hover:-translate-y-0.5"
                            >
                                <div
                                    className="flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl"
                                    style={{
                                        backgroundColor: `${theme.textColor}15`,
                                        color: theme.textColor,
                                    }}
                                >
                                    <span className="text-lg opacity-90">
                                        {getIcon(link.platform)}
                                    </span>
                                    <span className="font-medium">
                                        {getPlatformLabel(link.platform)}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
