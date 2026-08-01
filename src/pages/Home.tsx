import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="home-component flex flex-col gap-30 min-h-dvh w-full">
            <SearchBar />

            <div id="body" className="flex flex-col items-center gap-20 h-full">
                <section id="heading-container" className="flex flex-col gap-10 p-5 w-full">
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
                </section>

                <section className="grid grid-cols-2 gap-10 border-t border-b border-primary bg-neutral-dark pt-20 pb-20 pr-5 pl-5 w-full">
                    <div>

                    </div>
                    
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-4xl uppercase text-primary-light font-headline">the extraction process</h2>
                            <h3 className="text-white text-xl font-headline uppercase flex items-center gap-2">
                                <span className="text-base text-black font-label bg-tertiary pr-3 pl-3">01</span>
                                molecular analysis
                            </h3>
                            <p className="text-primary-light">
                                Every pepper is cataloged by capsaicin concentration. We isolate the molecular bonds of the heat to ensure consistent burn profiles across every small-batch run.
                            </p>
                        </div>

                        <hr className="border-primary" />

                        <div className="flex flex-col gap-5">
                            <h3 className="text-white text-xl font-headline uppercase flex items-center gap-2">
                                <span className="text-base text-black font-label bg-tertiary pr-3 pl-3">02</span>
                                cold-extraction protocol
                            </h3>
                            <p className="text-primary-light">
                                Traditional boiling destroys nuance. Our cold-extraction maintains the complex flavor volatile compounds while concentrating the Scoville intensity to lethal levels.
                            </p>
                        </div>

                        <hr className="border-primary" />

                        <div className="flex flex-col gap-5">
                            <h3 className="text-white text-xl font-headline uppercase flex items-center gap-2">
                                <span className="text-base text-black font-label bg-tertiary pr-3 pl-3">03</span>
                                barrel-aged stabilization
                            </h3>
                            <p className="text-primary-light">
                                Final blends are aged in charred oak for exactly 90 days, allowing the aggression of the peppers to marry with the deep, smoky undertones of the wood.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-10 p-5 max-w-240">
                    <div className="flex justify-between items-end gap-5">
                        <h2 className="text-white text-4xl uppercase font-headline flex flex-col">
                            <span className="text-base text-primary-light font-label">ordnance catalog</span>
                            featured blends
                        </h2>

                        <p className="text-primary-light uppercase font-label">current inventory: 3 variants</p>
                    </div>

                    <div className="flex justify-between gap-10">
                        <div className="flex flex-col justify-between gap-10 border border-primary p-5 w-70">
                            <div className="flex justify-between">
                                <p></p>
                                <p className="text-white text-xs uppercase font-label bg-primary border border-primary-light pt-1 pb-1 pr-2 pl-2">level: lethal</p>
                            </div>

                            <div className="h-30 bg-black">

                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl text-primary-light uppercase font-headline">carolina reaper red</h3>
                                    
                                    <p className="text-sm text-primary-light">
                                        The definitive extraction. Pure, unadulterated heat balanced with dark cherry and blood orange.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                        <p className="text-white text-xs uppercase font-label">scoville units</p>
                                        <p className="text-primary-light text-sm font-label">2,200,000+</p>
                                    </div>

                                    <div className="bg-primary-light h-2 shadow-[0_0_10px] shadow-primary-light"></div>
                                </div>

                                <button className="text-primary-light uppercase font-bold border-2 border-primary-light p-3">
                                    acquire asset
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between gap-10 border border-primary p-5 w-70">
                            <div className="flex justify-between">
                                <p></p>
                                <p className="text-white text-xs uppercase font-label bg-tertiary border border-primary-light pt-1 pb-1 pr-2 pl-2">level: tactical</p>
                            </div>

                            <div className="h-30 bg-black">

                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl text-tertiary uppercase font-headline">habanero gold</h3>
                                    
                                    <p className="text-sm text-primary-light">
                                        Precision heat with a floral, citrus-forward vanguard. Engineered for versatility without compromise.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                        <p className="text-white text-xs uppercase font-label">scoville units</p>
                                        <p className="text-tertiary text-sm font-label">350,000</p>
                                    </div>

                                    <div className="bg-tertiary h-2 shadow-[0_0_10px] shadow-tertiary"></div>
                                </div>

                                <button className="text-tertiary uppercase font-bold border-2 border-tertiary p-3">
                                    acquire asset
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between gap-10 border border-primary p-5 w-70">
                            <div className="flex justify-between">
                                <p></p>
                                <p className="text-white text-xs uppercase font-label bg-secondary border border-primary-light pt-1 pb-1 pr-2 pl-2">level: stealth</p>
                            </div>

                            <div className="h-30 bg-black">

                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl text-secondary uppercase font-headline">smoky ghost</h3>
                                    
                                    <p className="text-sm text-primary-light">
                                        The definitive extraction. Pure, unadulterated heat balanced with dark cherry and blood orange.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                        <p className="text-white text-xs uppercase font-label">scoville units</p>
                                        <p className="text-primary-light text-sm font-label">2,200,000+</p>
                                    </div>

                                    <div className="bg-secondary h-2 shadow-[0_0_10px] shadow-secondary"></div>
                                </div>

                                <button className="text-secondary uppercase font-bold border-2 border-seondary p-3">
                                    acquire asset
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col justify-center items-center gap-10 pt-20 pb-20 pr-5 pl-5 border-t-2 border-b-2 border-primary bg-neutral-light w-full">
                    <h2 className="text-white text-4xl uppercase font-headline">join the unit</h2>
                    
                    <p className="text-center text-primary-light w-180">
                        Operatives receive priority access to limited experimental extractions, tactical culinary training, and classified heat protocols. Loyalty has its consequences.
                    </p>

                    <div className="flex justify-between gap-5">
                        <input className="text-gray-500 font-label bg-neutral pt-3 pb-3 pr-4 pl-4 focus:outline-none placeholder:text-gray-500 placeholder:uppercase placeholder:font-label w-100 border border-primary" type="text" placeholder="enter operative email..." />

                        <button className="text-xl text-primary uppercase font-headline bg-primary-light shadow-[5px_5px] w-40 shadow-primary">
                            enlist now
                        </button>
                    </div>

                    <div className="flex justify-between gap-10">
                        <div className="flex gap-2">
                            <svg className="stroke-gray-300 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>

                            <p className="text-gray-300 text-sm uppercase font-label font-extrabold">secure comms</p>
                        </div>

                        <div className="flex gap-2">
                            <svg className="stroke-gray-300 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>

                            <p className="text-gray-300 text-sm uppercase font-label font-extrabold">global deployment</p>
                        </div>

                        <div className="flex gap-2">
                            <svg className="stroke-gray-300 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                            </svg>

                            <p className="text-gray-300 text-sm uppercase font-label font-extrabold">lab certified</p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}