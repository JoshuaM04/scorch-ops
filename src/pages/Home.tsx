import SearchBar from '../components/SearchBar';

export default function Home() {
    return (
        <div className="home-component flex flex-col gap-30 min-h-dvh w-full">
            <SearchBar />

            <div id="body" className="flex flex-col gap-10 p-5 h-full">
                <div id="heading-container" className="flex flex-col gap-10">
                    <div className="flex flex-col gap-5">
                        <p className="uppercase font-label bg-primary-light pt-1 pb-1 pr-4 pl-4 w-fit">status: combat ready</p>
                        
                        <h1 className="text-6xl uppercase font-headline flex flex-col">
                            <span className="text-white">scorch ops:</span>
                            <span className="text-primary">small batch,</span>
                            <span className="text-white">large consequences</span>
                        </h1>
                    </div>

                    <div className="border-l-4 border-primary-light pt-2 pb-2 pl-4">
                        <p className="text-primary-light">
                            Precision-engineered heat for the elite operative. We don't make condiments; we <br />
                            manufacture sensory tactical advantages. Small-batch extraction protocols ensure every <br /> 
                            drop hits with scientific accuracy.
                        </p>
                    </div>

                    <div className="flex gap-5">
                        <button className="text-white text-xl uppercase font-headline bg-primary border-2 border-primary-light pt-2 pb-2 pr-6 pl-6 shadow-[5px_5px] shadow-primary hover:cursor-pointer">
                            commence operation
                        </button>

                        <button className="text-primary-light text-xl uppercase font-headline border-2 border-primary-light pt-2 pb-2 pr-6 pl-6">
                            view protocols
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}