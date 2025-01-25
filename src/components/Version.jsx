import React, { useEffect, useState } from 'react';
import * as marked from 'marked'; // Correct import

const Version = () => {
    const [releaseData, setReleaseData] = useState([]);

    // Fetch release data from GitHub API
    useEffect(() => {
        const fetchReleaseData = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/aislxflames/flame-launcher/releases');
                const data = await response.json();
                setReleaseData(data); // Set all releases (not just the first one)
            } catch (error) {
                console.error("Error fetching release data:", error);
            }
        };

        fetchReleaseData();
    }, []);

    // Function to add dash in front of every line without breaking lists
    const addDashToEachLine = (text) => {
        return text
            .split('\n') // Split the body by lines
            .map((line) => {
                // Add dash at the beginning of every line except already existing list items
                if (line.trim() && !line.trim().startsWith('-')) {
                    return `- ${line.trim()}`; // Prepend dash
                }
                return line; // Leave existing lists or empty lines as they are
            })
            .join('\n'); // Join the lines back into a string
    };

    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <section className='text-center bg-white dark:bg-gray-800 min-h-[50vh] mt-[-7rem] flex flex-col items-center'
                style={{ backgroundImage: 'URL(images/image-8.png)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <h1 className='pt-[10rem] text-6xl font-bold text-white'>
                    Versions
                </h1>
            </section>

            {/* Loading screen with big text */}
            {releaseData.length === 0 ? (
                <div className="flex justify-center items-center min-h-screen">
                    <h2 className="text-6xl font-bold text-white">Loading...</h2>
                </div>
            ) : (
                <section className='flex flex-col items-center'>
                    {releaseData.map((release) => {
                        // Apply the dash transformation to the body for each release
                        const formattedBody = addDashToEachLine(release.body);
                        const descriptionHtml = marked.parse(formattedBody); // Parse the Markdown content

                        return (
                            <div key={release.id} className='bg-white dark:bg-slate-800 shadow-lg rounded-lg p-8 max-w-3xl w-full mx-4 my-8'>
                                <h1 className='text-3xl font-bold'>{release.tag_name}</h1>
                                <h2 className='text-lg text-gray-500 dark:text-gray-400'>
                                    Released {new Date(release.published_at).toLocaleDateString()}
                                </h2>
                                <hr className="my-4" />

                                {/* Show converted Markdown description here */}
                                <div
                                    className="release-description markdown-content"
                                    dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                                />

                                {/* Display download buttons for each asset in the release */}
                                {release.assets && release.assets.length > 0 && (
                                    <div className="mt-4">
                                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Download Assets:</h3>
                                        <ul className="space-y-2 mt-2">
                                            {release.assets.map((asset) => (
                                                <li key={asset.id} className="flex items-center justify-between">
                                                    <a
                                                        href={asset.browser_download_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-block py-2 px-4 text-white bg-red-500 rounded-md hover:bg-red-600 transition"
                                                    >
                                                        {asset.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </section>
            )}
        </div>
    );
};

export default Version;
