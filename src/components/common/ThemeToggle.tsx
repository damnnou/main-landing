import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ className }: { className: string }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = window.localStorage.getItem('theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
        } else {
            setIsDark(false);
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
        window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = (theme: boolean) => {
        if (isDark !== theme) {
            setIsDark(theme);
        }
    };

    return (
        <div
            className={
                'flex fixed bottom-4 left-4 rounded-full w-24 h-10 border-0 bg-white dark:bg-dark-background shadow dark:shadow-gray-600 border-black z-50' +
                ' ' +
                className
            }
        >
            <button
                onClick={() => toggleTheme(false)}
                className={`rounded-full w-full h-full items-center flex justify-center ${
                    !isDark ? 'bg-primary' : ''
                }`}
            >
                <Sun size={20} />
            </button>
            <button
                onClick={() => toggleTheme(true)}
                className={`rounded-full w-full h-full items-center flex justify-center ${
                    isDark ? 'bg-primary' : ''
                }`}
            >
                <Moon size={20} />
            </button>
        </div>
    );
};

export default ThemeToggle;
