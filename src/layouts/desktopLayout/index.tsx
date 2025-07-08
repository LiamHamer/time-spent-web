import React from 'react';
import Sidebar from '../../components/sidebar';

function DesktopLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='grid grid-cols-[.1fr_auto] gap-3'>
            <Sidebar></Sidebar>
            <div className='h-screen grid grid-flow-row grid-cols-5 grid-rows-5 gap-3'>
                <div className='flex flex-col col-start-2 col-end-5 row-start-2 row-span-3 gap-10 text-center'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DesktopLayout;