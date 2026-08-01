export default function SearchBar() {
    return (
        <div className="searchBar-component flex flex-wrap justify-between gap-10 border-b border-primary p-5 h-fit w-full">
            <section className="flex flex-wrap items-center gap-10">
                <h1 className="text-primary text-4xl uppercase font-bold font-headline min-w-fit">scorch ops</h1>

                <div className="flex gap-5 h-full border border-primary pl-2 pr-2 min-w-73.5 max-h-10.5">
                    <svg className="w-5 stroke-primary-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <input className="text-white placeholder:text-gray-500 font-label focus:outline-none" type="text" placeholder="Search Archives..." />
                </div>
            </section>

            <section className="flex items-center gap-10">       
                <button className="hover:cursor-pointer">
                    <svg className="w-5 stroke-primary-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </button>
                
                <button className="hover:cursor-pointer">
                    <svg className="w-5 stroke-primary-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </button>

                <button className="text-white uppercase font-label bg-primary border-2 border-primary-light pt-2 pb-2 w-33 hover:cursor-pointer">
                    cool down
                </button>       
            </section>
        </div>
    );
}