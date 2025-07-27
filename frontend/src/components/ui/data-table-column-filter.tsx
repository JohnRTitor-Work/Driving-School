import { type Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FilterIcon } from "lucide-react";

interface DataTableColumnFilterProps<TData> {
  table: Table<TData>;
  columnKey: string;
  title: string;
  placeholder?: string;
}

export function DataTableColumnFilter<TData>({
  table,
  columnKey,
  title,
  placeholder,
}: DataTableColumnFilterProps<TData>) {
  const column = table.getColumn(columnKey);

  if (!column) return null;

  const uniqueValues = Array.from(
    new Set(
      table
        .getPreFilteredRowModel()
        .rows.map((row) => {
          const value = row.getValue(columnKey);
          return value?.toString() || "";
        })
        .filter(Boolean),
    ),
  ).sort();

  const selectedValues = new Set((column.getFilterValue() as string[]) || []);
  const isFiltered = selectedValues.size > 0;

  const handleFilterChange = (value: string, checked: boolean) => {
    const newSelectedValues = new Set(selectedValues);

    if (checked) {
      newSelectedValues.add(value);
    } else {
      newSelectedValues.delete(value);
    }

    column.setFilterValue(
      newSelectedValues.size > 0 ? Array.from(newSelectedValues) : undefined,
    );
  };

  const clearFilters = () => {
    column.setFilterValue(undefined);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={isFiltered ? "border-primary" : ""}
        >
          <FilterIcon className="mr-2 h-4 w-4" />
          {title}
          {isFiltered && (
            <span className="ml-2 rounded bg-primary px-1 py-0.5 text-xs text-primary-foreground">
              {selectedValues.size}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuLabel>
          {placeholder || `Filter by ${title}`}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {uniqueValues.map((value) => (
          <DropdownMenuCheckboxItem
            key={value}
            checked={selectedValues.has(value)}
            onCheckedChange={(checked) => handleFilterChange(value, checked)}
          >
            {value}
          </DropdownMenuCheckboxItem>
        ))}
        {isFiltered && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              onSelect={clearFilters}
              className="justify-center text-sm"
            >
              Clear filters
            </DropdownMenuCheckboxItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
