import React from 'react';

const Download: React.FC = () => {
    const handleDownload = async () => {
        try {
            const response = await fetch('/cv-ghazwan.pdf');

            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = 'CV-Ghazwan.pdf';
            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading PDF:', error);
            alert('Gagal mendownload file. Silakan coba lagi.');
        }
    };

    return (
        <button
            onClick={handleDownload}
            className="px-6 py-3 text-sm md:text-md lg:text-lg cursor-pointer w-full bg-green-accent-main text-green-accent-light font-semibold rounded-lg shadow-md hover:bg-green-accent-dark transition duration-300"
        >
            Download CV
        </button>
    );
};

export default Download;