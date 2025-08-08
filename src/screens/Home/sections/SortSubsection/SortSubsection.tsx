import { Button } from "../../../../components/ui/button";

export const SortSubsection = (): JSX.Element => {
  return (
    <div className="w-full space-y-2 py-2">
      {/* First row: Filter, Sort By, Pure Veg, Rating 4.0+ */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          className="h-8 rounded-full border border-gray-300 bg-white px-3 py-1 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all"
        >
          <div className="relative mr-1 h-[11px] w-[14px]">
            <div className="absolute left-0.5 top-0 h-[6px] w-3">
              <img
                className="absolute left-0 top-1 h-px w-[7px] object-cover"
                alt="Vector"
                src="/vector-4-1.svg"
              />
              <div className="absolute left-1.5 top-0 h-[6px] w-[6px] rounded-[3px] border border-solid border-[#000000]" />
            </div>
            <div className="absolute left-0 top-1 h-[6px] w-3">
              <img
                className="absolute left-1 top-1 h-px w-[7px] object-cover"
                alt="Vector"
                src="/vector-5-1.svg"
              />
              <div className="absolute left-0 top-0 h-[6px] w-[6px] rotate-180 rounded-[3px] border border-solid border-[#000000]" />
            </div>
          </div>
          <span className="font-medium text-xs text-gray-700">Filter</span>
        </Button>

        <Button
          variant="outline"
          className="h-8 rounded-full border border-gray-300 bg-white px-3 py-1 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all"
        >
          <span className="font-medium text-xs text-gray-700">Sort By</span>
          <img
            className="ml-1 h-1 w-[6px] object-cover"
            alt="Arrow"
            src="/arrow-1.svg"
          />
        </Button>

        <Button
          variant="outline"
          className="h-8 rounded-full border border-gray-300 bg-white px-3 py-1 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all"
        >
          <span className="font-medium text-xs text-gray-700">Pure Veg</span>
        </Button>

        <Button
          variant="outline"
          className="h-8 rounded-full border border-gray-300 bg-white px-3 py-1 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all"
        >
          <span className="font-medium text-xs text-gray-700">Rating 4.0+</span>
        </Button>
      </div>

      {/* Second row: Cuisine, Rewards, Near and Quick */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          className="h-8 rounded-full border border-gray-300 bg-white px-3 py-1 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all"
        >
          <div className="relative mr-1 h-[14px] w-3 rotate-[0.51deg]">
            <img
              className="absolute left-px top-1.5 h-[4px] w-[9px] rotate-[-0.51deg]"
              alt="Ellipse"
              src="/ellipse-55.svg"
            />
            <img
              className="absolute left-[7px] top-[2px] h-1 w-0.5 rotate-[-0.51deg]"
              alt="Vector"
              src="/vector-37.svg"
            />
            <img
              className="absolute left-1 top-0 h-[4px] w-0.5 rotate-[-0.51deg]"
              alt="Vector"
              src="/vector-36.svg"
            />
            <img
              className="absolute left-[2px] top-0.5 h-1 w-0.5 rotate-[-0.51deg]"
              alt="Vector"
              src="/vector-35.svg"
            />
            <div className="absolute left-1 top-1 h-px w-0.5 rounded-[0.87px/0.72px] bg-[#e50300]" />
            <div className="absolute left-0 top-[11px] h-0.5 w-3 rounded-[1.8px] bg-[#e50300]" />
          </div>
          <span className="font-medium text-xs text-gray-700">Cuisine</span>
        </Button>

        <Button
          variant="outline"
          className="h-8 rounded-full border border-gray-300 bg-white px-3 py-1 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all"
        >
          <img className="mr-1 h-[15px] w-[15px]" alt="Icon" src="/icon.svg" />
          <span className="font-medium text-xs text-gray-700">Rewards</span>
        </Button>

        <Button
          variant="outline"
          className="h-8 rounded-full border border-gray-300 bg-white px-3 py-1 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all"
        >
          <img
            className="mr-1 h-2.5 w-1.5"
            alt="Vector stroke"
            src="/vector-295--stroke-.svg"
          />
          <span className="font-medium text-xs text-gray-700">Near and Quick</span>
        </Button>
      </div>
    </div>
  );
};
