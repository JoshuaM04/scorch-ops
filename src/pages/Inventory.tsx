import SearchBar from '../components/SearchBar';

export default function Inventory() {
    return (
        <div className="inventory-component flex flex-col gap-30 min-h-dvh w-full">
            <SearchBar />
        </div>
    );
}