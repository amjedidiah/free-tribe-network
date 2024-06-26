import { LucideIcon } from "lucide-react";
import { ComponentProps } from "react";

type AutocompleteItemActionProps = {
  icon: LucideIcon;
} & ComponentProps<"button">;

export default function AutocompleteItemAction({
  children,
  icon: Icon,
  ...props
}: AutocompleteItemActionProps) {
  return (
    <button
      className="flex-none text-gray-400/80 transition-colors hover:text-gray-600/80 p-1.5 flex items-center justify-center"
      {...props}
    >
      <Icon className="h-5 w-5 p-px stroke-2" />
    </button>
  );
}
