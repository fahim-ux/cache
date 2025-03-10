"use client";
import { useState } from "react";

export default function User() {
    const [activeTab, setActiveTab] = useState("apiKeys");
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    // Mock data
    const apiKeys = [
        { id: 1, name: "Default API Key", key: "ck_12345abcdef", created: "2023-10-15" },
        { id: 2, name: "Project Alpha", key: "ck_67890ghijkl", created: "2023-11-03" },
        { id: 3, name: "Testing API", key: "ck_mnopq12345", created: "2023-12-20" },
    ];

    const folders = [
        { id: 1, name: "Profile Pictures", count: 12, size: "24.5 MB" },
        { id: 2, name: "Documents", count: 8, size: "15.2 MB" },
        { id: 3, name: "Presentations", count: 5, size: "42.7 MB" },
        { id: 4, name: "Screenshots", count: 27, size: "8.9 MB" },
        { id: 5, name: "Uploads", count: 34, size: "124 MB" },
    ];

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case "apiKeys":
                return (
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">API Keys</h2>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Generate New Key
                            </button>
                        </div>
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">API Key</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created On</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {apiKeys.map((key) => (
                                        <tr key={key.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{key.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{key.key}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{key.created}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button className="text-blue-600 hover:text-blue-900 mr-3">Copy</button>
                                                <button className="text-red-600 hover:text-red-900">Revoke</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                            <strong>Security Note:</strong> Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas.
                        </div>
                    </div>
                );
            case "myFolders":
                return (
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">My Folders</h2>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                New Folder
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {folders.map((folder) => (
                                <div key={folder.id} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-center mb-3">
                                        <div className="text-blue-500 mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">{folder.name}</h3>
                                            <p className="text-sm text-gray-500">{folder.count} files • {folder.size}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end space-x-2">
                                        <button className="text-blue-600 hover:text-blue-900 text-sm">Open</button>
                                        <button className="text-gray-600 hover:text-gray-900 text-sm">Share</button>
                                        <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6">
                            <div className="bg-white rounded-lg shadow p-4">
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Storage Usage</h3>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                                <div className="flex justify-between mt-2 text-sm text-gray-600">
                                    <span>215.3 MB used</span>
                                    <span>500 MB total</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "settings":
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h2>
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900">Profile Information</h3>
                                <p className="text-sm text-gray-600 mt-1">Update your account's profile information.</p>
                            </div>
                            <div className="px-6 py-4">
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                        <input type="text" name="name" id="name" defaultValue="John Doe" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" name="email" id="email" defaultValue="john@example.com" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border" />
                                    </div>
                                    <div>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 bg-white rounded-lg shadow overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900">Security</h3>
                                <p className="text-sm text-gray-600 mt-1">Update your password and security preferences.</p>
                            </div>
                            <div className="px-6 py-4">
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <label htmlFor="current_password" className="block text-sm font-medium text-gray-700">Current Password</label>
                                        <input type="password" name="current_password" id="current_password" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border" />
                                    </div>
                                    <div>
                                        <label htmlFor="new_password" className="block text-sm font-medium text-gray-700">New Password</label>
                                        <input type="password" name="new_password" id="new_password" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border" />
                                    </div>
                                    <div>
                                        <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                        <input type="password" name="confirm_password" id="confirm_password" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border" />
                                    </div>
                                    <div>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                                            Change Password
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return <div>Select an option from the sidebar</div>;
        }
    };

    return (
        <div className="min-h-screen w-full absolute overflow-auto py-4 px-4 top-[4.7rem] bg-[#003049]">
            <div className="mx-auto p-4 ">

                <div className="flex flex-col md:flex-row items-start ">
                    {/* Sidebar */}
                    {/* Sidebar */}
                    <div className={`transition-all duration-300 ease-in-out  flex-shrink-0 mb-4 md:mb-0 rounded-lg flex items-center justify-between gap-2 `}>
                        <div
                            className={`bg-white h-[30rem] rounded-lg shadow-lg hover:shadow-2xl p-4 md:sticky md:top-4 overflow-y-auto 
                                max-h-[calc(100vh-6rem)] transition-all duration-300 transform hover:-translate-y-2 
                                border border-[#1d3557] ${isSidebarExpanded ? 'w-fit-content' : 'w-12'} `}
                            style={{
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
                            }}
                        >


                            <div className={`flex items-center mb-6 pb-4 border-b ${!isSidebarExpanded && 'justify-center'}`}>
                                <div className="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xl mr-3">
                                    JD
                                </div>
                                {isSidebarExpanded && (
                                    <div>
                                        <h3 className="font-medium">John Doe</h3>
                                        <p className="text-sm text-gray-500">john@example.com</p>
                                    </div>
                                )}
                            </div>
                            <ul className="space-y-1">
                                <li>
                                    <button
                                        className={`w-full px-3 py-2 rounded-md text-left flex ${!isSidebarExpanded && 'justify-center'} items-center ${activeTab === 'apiKeys' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                        onClick={() => {
                                            setActiveTab("apiKeys");
                                            if (!isSidebarExpanded) setIsSidebarExpanded(true);
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isSidebarExpanded ? 'mr-2' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                        </svg>
                                        {isSidebarExpanded && "API Keys"}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`w-full px-3 py-2 rounded-md text-left flex ${!isSidebarExpanded && 'justify-center'} items-center ${activeTab === 'myFolders' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                        onClick={() => {
                                            setActiveTab("myFolders");
                                            if (!isSidebarExpanded) setIsSidebarExpanded(true);
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isSidebarExpanded ? 'mr-2' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                        </svg>
                                        {isSidebarExpanded && "My Folders"}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`w-full px-3 py-2 rounded-md text-left flex ${!isSidebarExpanded && 'justify-center'} items-center ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                        onClick={() => {
                                            setActiveTab("settings");
                                            if (!isSidebarExpanded) setIsSidebarExpanded(true);
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isSidebarExpanded ? 'mr-2' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {isSidebarExpanded && "Settings"}
                                    </button>
                                </li>
                                <li className={`${isSidebarExpanded ? 'pt-4 mt-4 border-t border-gray-200' : 'mt-4'}`}>
                                    <button className={`w-full px-3 py-2 rounded-md text-left flex ${!isSidebarExpanded && 'justify-center'} items-center text-red-600 hover:bg-red-50`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isSidebarExpanded ? 'mr-2' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        {isSidebarExpanded && "Logout"}
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <button
                            className="transform -translate-y-1/2 bg-white w-7 h-7 rounded-full 
                                    border border-gray-300 flex items-center justify-center shadow-md hover:shadow-lg z-10
                                    transition-transform duration-300 "
                            onClick={toggleSidebar}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 text-gray-500 transform transition-transform duration-300 ${isSidebarExpanded ? 'rotate-0' : 'rotate-180'}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Main content */}
                    <div className="md:flex-1 md:ml-6">
                        <div className="bg-white rounded-lg shadow p-6">
                            {renderTabContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}