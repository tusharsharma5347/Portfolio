import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Tushar. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-gray-900 text-sm transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-900 text-sm transition-colors">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
