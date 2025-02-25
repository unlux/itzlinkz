import React from "react";
import { Plus, Trash2 } from "lucide-react";
import type { Profile } from "../App";

type ProfileFormProps = {
    profile: Profile;
    setProfile: React.Dispatch<React.SetStateAction<Profile>>;
    onSubmit: () => void;
};

const PLATFORM_OPTIONS = [
    { value: "twitter", label: "Twitter/X" },
    { value: "github", label: "GitHub" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "instagram", label: "Instagram" },
    { value: "youtube", label: "YouTube" },
    { value: "portfolio", label: "Portfolio" },
    { value: "discord", label: "Discord" },
    { value: "twitch", label: "Twitch" },
];

export function ProfileForm({
    profile,
    setProfile,
    onSubmit,
}: ProfileFormProps) {
    const addLink = () => {
        setProfile((prev) => ({
            ...prev,
            links: [...prev.links, { platform: "", url: "" }],
        }));
    };

    const removeLink = (index: number) => {
        setProfile((prev) => ({
            ...prev,
            links: prev.links.filter((_, i) => i !== index),
        }));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Profile Details</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        value={profile.name}
                        onChange={(e) =>
                            setProfile((prev) => ({
                                ...prev,
                                name: e.target.value,
                            }))
                        }
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                    </label>
                    <textarea
                        value={profile.bio}
                        onChange={(e) =>
                            setProfile((prev) => ({
                                ...prev,
                                bio: e.target.value,
                            }))
                        }
                        className="w-full px-3 py-2 border rounded-md"
                        rows={3}
                        placeholder="Tell us about yourself"
                    />
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-700">
                            Social Links
                        </label>
                        <button
                            onClick={addLink}
                            className="flex items-center text-sm text-blue-600 hover:text-blue-700"
                        >
                            <Plus size={16} className="mr-1" /> Add Link
                        </button>
                    </div>
                    {profile.links.map((link, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row gap-2"
                        >
                            <select
                                value={link.platform}
                                onChange={(e) => {
                                    const newLinks = [...profile.links];
                                    newLinks[index] = {
                                        ...link,
                                        platform: e.target.value,
                                    };
                                    setProfile((prev) => ({
                                        ...prev,
                                        links: newLinks,
                                    }));
                                }}
                                className="flex-1 px-3 py-2 border rounded-md"
                            >
                                <option value="">Select Platform</option>
                                {PLATFORM_OPTIONS.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="url"
                                value={link.url}
                                onChange={(e) => {
                                    const newLinks = [...profile.links];
                                    newLinks[index] = {
                                        ...link,
                                        url: e.target.value,
                                    };
                                    setProfile((prev) => ({
                                        ...prev,
                                        links: newLinks,
                                    }));
                                }}
                                className="flex-1 px-3 py-2 border rounded-md"
                                placeholder="URL"
                            />
                            <button
                                onClick={() => removeLink(index)}
                                className="p-2 text-red-600 hover:text-red-700"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}
                </div>
                <button
                    onClick={onSubmit}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
