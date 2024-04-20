"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IComboBoxOpt } from "@/types";
import { cn, getIcon } from "@/lib/utils";

const Combobox = ({
  options,
  selectedVal,
  handleChange,
}: {
  options: IComboBoxOpt[];
  selectedVal?: string;
  handleChange: (optionId: string) => void;
}) => {
  const [open, setOpen] = React.useState(false);
  const [currentVal, setCurrentVal] = React.useState<string | undefined>(
    selectedVal
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {currentVal
            ? options.find((option) => option.value === currentVal)?.label
            : "Select option..."}
          <span className="text-lg">{getIcon("up-down")}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search option..." />
          <CommandEmpty>No option found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(value) => {
                  setCurrentVal(value);
                  handleChange(value);
                  setOpen(false);
                }}
              >
                <span
                  className={cn(
                    "mr-2 h-4 w-4",
                    currentVal === option.value ? "opacity-100" : "opacity-0"
                  )}
                >
                  {getIcon("check")}
                </span>
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
