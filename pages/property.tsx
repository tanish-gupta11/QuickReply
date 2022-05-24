import Link from 'next/link';
import React, {useState} from 'react';
import {db} from '../lib/firebase';


const Property = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [size, setSize] = useState("");

    function addItems(name: string, description: string, size: string) {
        var items = {
                name: name,
                description: description,
                size: size
        };

        db.ref('/properties').push(items);
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addItems(name, description, size);
        setName("");
        setDescription("");
        setSize("");
    } 

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }
    const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSize(e.target.value);
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
            <h1 className="text-6xl font-bold">
                Welcome to{' '}
                <a className="text-blue-600" href="">
                Quick Reply!
                </a>
            </h1>

            <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around flex max-w-4xl sm:w-full border">
                <div>
                <form onSubmit={handleSubmit}>
                    <div className="mt-8 flex flex-col items-center justify-center">
                        <label className="text-2xl font-bold">
                            Name
                        </label>
                        <input 
                        type="text" 
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                         placeholder="Enter name"
                         className="border block w-full px-4 py-2 mt-2 text-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div className="mt-8 flex flex-col items-center justify-center">
                        <label className="text-2xl font-bold">
                            Description
                        </label>
                        <textarea name="description" id="description"
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Description" 
                        className="border block w-full px-4 py-2 mt-2 text-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        required></textarea>
                    </div>
                    <div className="mt-8 flex flex-col items-center justify-center">
                        <label className="text-2xl font-bold">
                            Size
                        </label>
                        <input 
                        type="text"
                        placeholder="Enter size (100m2)" 
                        name="size" 
                        value={size}
                        onChange={handleSizeChange}
                        className="border block w-full px-4 py-2 mt-2 text-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>
                    <div className="mt-8 mb-8 flex flex-col items-center justify-center">
                        <button type="submit" className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add</button>
                    </div>
                    <Link href="/">
                        <div className="mt-8 mb-8 flex flex-col items-center justify-center">
                            <div className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">HOME</div>
                        </div>
                    </Link>
                    
                </form>
                </div>
            </div>
            </main>

            <footer className="mt-8 flex h-24 w-full items-center justify-center border-t">
            <a
                className="flex items-center justify-center gap-2"
                href="https://github.com/tanish-gupta11"
                target="_blank"
                rel="noopener noreferrer"
            >
                Created by Tanish Gupta
            </a>
            </footer>
        </div>
    )
}

export default Property;