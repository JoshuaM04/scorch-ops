import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    const [activeId, setActiveId] = useState(1);
    const activeStyle = "bg-primary border-2 border-primary-light mobile:shadow-[5px_5px] mobile:shadow-red-500";
    const mobileStyle = "max-mobile:w-20 max-mobile:flex-col max-mobile:justify-center max-mobile:items-center max-mobile:p-2 max-mobile:w-min max-mobile:gap-0"

    const handleButton = (id: number) => {
        setActiveId(id)
    }

    return (
        <div className="navigation-component flex flex-col gap-10 mobile:border-r mobile:border-primary p-5 mobile:min-h-dvh min-w-65 max-mobile:w-full max-mobile:absolute max-mobile:bottom-5 max-mobile:border-t-2 max-mobile:border-white">
            <section className="capitalize font-label text-primary-light max-mobile:hidden max-mobile:aria-hidden">
                <p className="text-primary text-3xl uppercase font-bold font-headline">scorch ops</p>
                <p>unit 01 - small batch</p>
                <p>extraction</p>
            </section>

            <section className="flex flex-col mobile:gap-5 max-mobile:gap-2 max-mobile:flex-row max-mobile:justify-center w-full">
                <Link onClick={() => handleButton(1)} to="/Home" className={`flex gap-2 pl-4 pr-4 pt-3 pb-3 ${activeId === 1 ? activeStyle : ''} select-none ${mobileStyle}`}>
                    <svg className="stroke-white w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <p className="text-white max-mobile:text-xs">Home</p>
                </Link>

                <Link onClick={() => handleButton(2)} to="/Batches" className={`flex gap-2 mobile:pl-4 mobile:pr-4 mobile:pt-3 mobile:pb-3 ${activeId === 2 ? activeStyle : ''} select-none max-mobile:${mobileStyle}`}>
                    <svg className="stroke-white w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>

                    <p className="text-white max-mobile:text-xs">Batches</p>
                </Link>

                <Link onClick={() => handleButton(3)} to="/Inventory" className={`flex gap-2 mobile:pl-4 mobile:pr-4 mobile:pt-3 mobile:pb-3 ${activeId === 3 ? activeStyle : ''} select-none max-mobile:${mobileStyle}`}>
                    <svg className="stroke-white w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>

                    <p className="text-white max-mobile:text-xs">Inventory</p>
                </Link>

                <Link onClick={() => handleButton(4)} to="/Customers" className={`flex gap-2 mobile:pl-4 mobile:pr-4 mobile:pt-3 mobile:pb-3 ${activeId === 4 ? activeStyle : ''} select-none max-mobile:${mobileStyle}`}>
                    <svg className="stroke-white w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>

                    <p className="text-white max-mobile:text-xs">Customers</p>
                </Link>

                <Link onClick={() => handleButton(5)} to="/Sales" className={`flex gap-2 mobile:pl-4 mobile:pr-4 mobile:pt-3 mobile:pb-3 ${activeId === 5 ? activeStyle : ''} select-none max-mobile:${mobileStyle}`}>
                    <svg className="stroke-white w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>


                    <p className="text-white max-mobile:text-xs">Sales</p>
                </Link>
            </section>
        </div>
    );
}