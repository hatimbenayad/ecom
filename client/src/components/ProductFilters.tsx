import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterGroup {
  id: string;
  title: string;
  options: FilterOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

interface ProductFiltersProps {
  filterGroups: FilterGroup[];
  activeFiltersCount: number;
  onClearAll: () => void;
  className?: string;
}

function FilterGroupComponent({ group }: { group: FilterGroup }) {
  const handleOptionChange = (optionId: string, checked: boolean) => {
    if (checked) {
      group.onChange([...group.selectedValues, optionId]);
    } else {
      group.onChange(group.selectedValues.filter(id => id !== optionId));
    }
  };

  return (
    <div>
      <h4 className="font-medium mb-3">{group.title}</h4>
      <div className="space-y-2">
        {group.options.map(option => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox
              id={`${group.id}-${option.id}`}
              checked={group.selectedValues.includes(option.id)}
              onCheckedChange={(checked) => handleOptionChange(option.id, checked as boolean)}
            />
            <label 
              htmlFor={`${group.id}-${option.id}`} 
              className="text-sm flex-1 cursor-pointer flex items-center justify-between"
            >
              <span>{option.label}</span>
              {option.count && (
                <span className="text-muted-foreground text-xs">({option.count})</span>
              )}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

function FilterContent({ filterGroups, activeFiltersCount, onClearAll }: Omit<ProductFiltersProps, 'className'>) {
  return (
    <div className="space-y-6">
      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{activeFiltersCount} filtros activos</span>
          <Button variant="ghost" size="sm" onClick={onClearAll}>
            Limpiar todo
          </Button>
        </div>
      )}

      {/* Filter Groups */}
      {filterGroups.map(group => (
        <FilterGroupComponent key={group.id} group={group} />
      ))}
    </div>
  );
}

export default function ProductFilters({ 
  filterGroups, 
  activeFiltersCount, 
  onClearAll, 
  className = "" 
}: ProductFiltersProps) {
  return (
    <>
      {/* Mobile Filter Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className={`lg:hidden ${className}`}>
            <Filter className="h-4 w-4 mr-2" />
            Filtros
            {activeFiltersCount > 0 && (
              <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 text-xs flex items-center justify-center">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle>Filtros</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <FilterContent 
              filterGroups={filterGroups}
              activeFiltersCount={activeFiltersCount}
              onClearAll={onClearAll}
            />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Filter Sidebar */}
      <div className="hidden lg:block">
        <div className="sticky top-24 bg-card border border-card-border rounded-lg p-6">
          <h3 className="font-bold mb-6 uppercase text-sm">Filtros</h3>
          <FilterContent 
            filterGroups={filterGroups}
            activeFiltersCount={activeFiltersCount}
            onClearAll={onClearAll}
          />
        </div>
      </div>
    </>
  );
}

// Active Filter Badges Component
interface ActiveFilterBadgesProps {
  filters: Array<{
    id: string;
    label: string;
    onRemove: () => void;
  }>;
  className?: string;
}

export function ActiveFilterBadges({ filters, className = "" }: ActiveFilterBadgesProps) {
  if (filters.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {filters.map(filter => (
        <Badge key={filter.id} variant="secondary" className="gap-1 pr-1">
          {filter.label}
          <button 
            onClick={filter.onRemove}
            className="ml-1 hover:text-destructive rounded-sm p-0.5 hover:bg-destructive/10"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
    </div>
  );
}