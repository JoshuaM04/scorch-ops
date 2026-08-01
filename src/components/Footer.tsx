export default function Footer() {
    return (
        <div className="flex flex-col gap-5 pt-10 pb-10 pr-5 pl-5 bg-neutral-dark -mt-30">
            <div className="flex justify-between items-center gap-10">
                <h3 className="text-xl text-white uppercase font-headline">scorch ops</h3>
                
                <div className="text-primary-light text-xs capitalize font-label">
                    <ul className="flex gap-5">
                        <li>terms & policies</li>
                        <li>safety protocols</li>
                        <li>extraction methods</li>
                        <li>contact ops</li>
                    </ul>
                </div>
            </div>

            <div>
                <p className="text-primary-light text-xs font-label w-fit">©2024 SCORCH OPS. BREACH AT YOUR OWN RISK.</p>
            </div>
        </div>
    );
}