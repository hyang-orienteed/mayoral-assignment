import { Button } from "@/components/ui/button";
import { TfiMinus } from "react-icons/tfi";
import { TfiPlus } from "react-icons/tfi";

type Size = "big" | "small";
interface SizeModifierProps {
    value: Size;
    onChange: (value: Size) => void;
}

const SizeModifier = ({
    // value,
    onChange
}: SizeModifierProps) => {
    const iconSize = 40;
    const iconClass = "stroke-2 stroke-slate-300";
    return (
        <div className="flex">
            <Button
                variant="ghost"
                onClick={() => onChange("small")}
            >
                <TfiMinus className={iconClass} size={iconSize} />
            </Button>
            <Button
                variant="ghost"
                onClick={() => onChange("big")}
            >
                <TfiPlus className={iconClass} size={iconSize} />
            </Button>
        </div>

    )
}

export default SizeModifier