import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

const SearchBar = ({
    value,
    onChange
}: SearchBarProps) => {
    return (
        <div className="relative">
            <FiSearch className="absolute left-2 top-3"/>
            <Input
                className={`pl-8 focus-visible:ring focus-visible:ring-slate-400 focus-visible:ring-offset-0 md:w-96`}
                type="text"
                placeholder="Buscar"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>

    )
}

export default SearchBar