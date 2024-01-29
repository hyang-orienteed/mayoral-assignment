import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PiSortAscendingFill } from "react-icons/pi";
import { PiSortDescendingFill } from "react-icons/pi";

type SortDirection = "asc" | "desc";
interface OrderByProps {
    sortDir: SortDirection;
    onChange: (sortDir: SortDirection) => void;
}

const OrderBy = ({
    sortDir,
    onChange
}: OrderByProps) => {
    return (
        <DropdownMenu        >
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className={`focus-visible:ring-transparent focus-visible:ring-offset-0`}
                >
                    {sortDir === "asc" ? <PiSortAscendingFill /> : <PiSortDescendingFill />}
                    <span className="ml-2">
                        Precio
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={sortDir} onValueChange={onChange}>
                    <DropdownMenuRadioItem value="asc">Precio mas bajo</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="desc">Precio mas alto</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default OrderBy