"use client";

import { useState, useEffect } from "react";
import { flavorWheelData } from "../data/flavors";
import { Flavor, FlavorLevel2, FlavorLevel3 } from "../data/types";

interface FlatFlavorWheelProps {
  selectedFlavors?: string[];
  onFlavorChange?: (selectedFlavors: string[]) => void;
}

const blockHeight = 120; // Height for all blocks
const level3BlockWidth = 100; // Compact width for level 3 flavors
const gapSize = 8; // Gap between blocks (in pixels, matches gap-2 in Tailwind which is 0.5rem = 8px)
const verticalGapSize = 8; // Vertical gap size (same as horizontal for consistency)

const FlatFlavorWheel = ({
  selectedFlavors: externalSelectedFlavors = [],
  onFlavorChange,
}: FlatFlavorWheelProps) => {
  const [selectedFlavorIds, setSelectedFlavorIds] = useState<string[]>(
    externalSelectedFlavors
  );
  const [internalChanged, setInternalChanged] = useState(false);

  // Update internal state when external selection changes (from parent)
  useEffect(() => {
    if (!internalChanged) {
      setSelectedFlavorIds(externalSelectedFlavors);
    }
    setInternalChanged(false);
  }, [externalSelectedFlavors, internalChanged]);

  // Call parent callback when internal selection changes
  useEffect(() => {
    if (internalChanged) {
      onFlavorChange?.(selectedFlavorIds);
    }
  }, [selectedFlavorIds, internalChanged, onFlavorChange]);

  // Helper function to get all level 3 flavors with their info
  const getAllLevel3Flavors = () => {
    const allFlavors: (FlavorLevel3 & {
      level2Name: string;
      level1Name: string;
    })[] = [];
    flavorWheelData.categories.forEach((level1) => {
      level1.children.forEach((level2) => {
        level2.children.forEach((level3) => {
          allFlavors.push({
            ...level3,
            level2Name: level2.name,
            level1Name: level1.name,
          });
        });
      });
    });
    return allFlavors;
  };

  const handleFlavorClick = (
    flavorId: string,
    level: 1 | 2 | 3,
    flavor: Flavor | FlavorLevel2 | FlavorLevel3
  ) => {
    let newSelection: string[] = [];

    if (level === 1) {
      // Get all descendants
      const allDescendants = (flavor as Flavor).children.flatMap((l2) =>
        l2.children.map((l3) => l3.id)
      );
      // Check if all are currently selected
      const allSelected = allDescendants.every((id) =>
        selectedFlavorIds.includes(id)
      );

      if (allSelected) {
        // Deselect all descendants
        newSelection = selectedFlavorIds.filter(
          (id) => !allDescendants.includes(id)
        );
      } else {
        // Select all descendants - add new batch at front, keep existing order
        const newBatch = allDescendants.filter(
          (id) => !selectedFlavorIds.includes(id)
        );
        const remaining = selectedFlavorIds.filter(
          (id) => !allDescendants.includes(id)
        );
        newSelection = [...newBatch, ...remaining];
      }
    } else if (level === 2) {
      // Get all descendants
      const allDescendants = (flavor as FlavorLevel2).children.map(
        (l3) => l3.id
      );
      // Check if all are currently selected
      const allSelected = allDescendants.every((id) =>
        selectedFlavorIds.includes(id)
      );

      if (allSelected) {
        // Deselect all descendants
        newSelection = selectedFlavorIds.filter(
          (id) => !allDescendants.includes(id)
        );
      } else {
        // Select all descendants - add new batch at front, keep existing order
        const newBatch = allDescendants.filter(
          (id) => !selectedFlavorIds.includes(id)
        );
        const remaining = selectedFlavorIds.filter(
          (id) => !allDescendants.includes(id)
        );
        newSelection = [...newBatch, ...remaining];
      }
    } else {
      // Level 3: toggle this one
      if (selectedFlavorIds.includes(flavorId)) {
        newSelection = selectedFlavorIds.filter((id) => id !== flavorId);
      } else {
        // Add new single flavor at front
        newSelection = [flavorId, ...selectedFlavorIds];
      }
    }

    setInternalChanged(true);
    setSelectedFlavorIds(newSelection);
  };

  const isFlavorSelected = (
    flavorId: string,
    level: 1 | 2 | 3,
    flavor: Flavor | FlavorLevel2 | FlavorLevel3
  ): boolean => {
    if (level === 1) {
      const allDescendants = (flavor as Flavor).children.flatMap((l2) =>
        l2.children.map((l3) => l3.id)
      );
      return allDescendants.every((id) => selectedFlavorIds.includes(id));
    } else if (level === 2) {
      const allDescendants = (flavor as FlavorLevel2).children.map(
        (l3) => l3.id
      );
      return allDescendants.every((id) => selectedFlavorIds.includes(id));
    } else {
      return selectedFlavorIds.includes(flavorId);
    }
  };

  const handleRemoveFlavor = (flavorId: string) => {
    const newSelection = selectedFlavorIds.filter((id) => id !== flavorId);
    setInternalChanged(true);
    setSelectedFlavorIds(newSelection);
  };

  const allLevel3Flavors = getAllLevel3Flavors();

  // Only show level 3 flavors in pills - order is managed by selection logic
  const selectedFlavorDetails = selectedFlavorIds
    .map((id) => allLevel3Flavors.find((f) => f.id === id))
    .filter((f) => f !== undefined) as (FlavorLevel3 & {
    level2Name: string;
    level1Name: string;
  })[];

  // Build the hierarchical structure with calculated widths
  const flavorBlocks = flavorWheelData.categories.map((level1) => {
    // Calculate total width for level 2 blocks
    const level2Widths = level1.children.map((level2) => {
      // Calculate level 2 width based on its level 3 children and gaps between them
      const level2ChildrenCount = level2.children.length;
      const gapsBetweenLevel3 = Math.max(
        0,
        (level2ChildrenCount - 1) * gapSize
      );
      return level2ChildrenCount * level3BlockWidth + gapsBetweenLevel3;
    });

    // Calculate level 1 width: sum of all level 2 widths + gaps between level 2 groups
    const gapsBetweenLevel2 = Math.max(
      0,
      (level1.children.length - 1) * gapSize
    );
    const level1Width =
      level2Widths.reduce((a, b) => a + b, 0) + gapsBetweenLevel2;

    return (
      <div
        key={level1.id}
        className="shrink-0 flex flex-col"
        style={{ gap: verticalGapSize }}
      >
        {/* Level 1 Block */}
        <div
          onClick={() => handleFlavorClick(level1.id, 1, level1)}
          className={`shrink-0 rounded-lg border-2 border-opacity-50 hover:border-opacity-100 transition-all cursor-pointer flex items-center justify-start pl-2 hover:shadow-md ${
            isFlavorSelected(level1.id, 1, level1) ? "ring-gray-800" : ""
          }`}
          style={{
            width: level1Width,
            height: blockHeight,
            backgroundColor: level1.colorHex,
            borderColor: level1.colorHex,
            outline: isFlavorSelected(level1.id, 1, level1)
              ? "1px solid rgb(31, 41, 55)"
              : "none",
            outlineOffset: "2px",
          }}
        >
          <span
            className="text-xs md:text-sm font-semibold text-white drop-shadow shrink-0"
            style={{
              position: "sticky",
              left: 0,
              backgroundColor: level1.colorHex,
              paddingRight: "8px",
            }}
          >
            {level1.name}
          </span>
        </div>

        {/* Level 2 & 3 Blocks Container */}
        <div className="flex" style={{ gap: gapSize }}>
          {level1.children.map((level2, level2Index) => {
            const level2Width = level2Widths[level2Index];

            return (
              <div
                key={level2.id}
                className="shrink-0 flex flex-col"
                style={{ gap: verticalGapSize }}
              >
                {/* Level 2 Block */}
                <div
                  onClick={() => handleFlavorClick(level2.id, 2, level2)}
                  className={`shrink-0 rounded-lg border-2 border-opacity-50 hover:border-opacity-100 transition-all cursor-pointer flex items-center justify-start pl-2 hover:shadow-md ${
                    isFlavorSelected(level2.id, 2, level2)
                      ? "ring-gray-800"
                      : ""
                  }`}
                  style={{
                    width: level2Width,
                    height: (blockHeight - verticalGapSize) / 2,
                    backgroundColor: level2.colorHex,
                    borderColor: level2.colorHex,
                    outline: isFlavorSelected(level2.id, 2, level2)
                      ? "1px solid rgb(31, 41, 55)"
                      : "none",
                    outlineOffset: "2px",
                  }}
                >
                  <span
                    className="text-xs font-semibold text-white drop-shadow shrink-0"
                    style={{
                      position: "sticky",
                      left: 0,
                      backgroundColor: level2.colorHex,
                      paddingRight: "8px",
                    }}
                  >
                    {level2.name}
                  </span>
                </div>

                {/* Level 3 Blocks Row */}
                <div className="flex" style={{ gap: gapSize }}>
                  {level2.children.map((level3) => {
                    const isSelected = isFlavorSelected(level3.id, 3, level3);
                    return (
                      <div
                        key={level3.id}
                        onClick={() => handleFlavorClick(level3.id, 3, level3)}
                        className={`shrink-0 rounded-lg border-2 transition-all cursor-pointer flex items-center justify-center text-center p-1 hover:shadow-md ${
                          isSelected
                            ? "ring-gray-800"
                            : "border-opacity-50 hover:border-opacity-100"
                        }`}
                        style={{
                          width: level3BlockWidth,
                          height: (blockHeight - verticalGapSize) / 2,
                          backgroundColor: level3.colorHex,
                          borderColor: level3.colorHex,
                          outline: isSelected
                            ? "1px solid rgb(31, 41, 55)"
                            : "none",
                          outlineOffset: "2px",
                        }}
                      >
                        <span className="text-xs font-semibold drop-shadow text-white">
                          {level3.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="w-full mx-auto mb-2">
      {/* Single scrolling row - with padding to show borders */}
      <div className="overflow-x-auto pb-2 px-4 py-4">
        <div className="flex gap-2 min-w-min">{flavorBlocks}</div>
      </div>

      {/* Selected Flavors Pills */}
      {selectedFlavorDetails.length > 0 && (
        <div className="px-4 py-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">
            Selected Flavors
          </h3>
          <div className="overflow-x-auto">
            <div className="flex gap-2 min-w-min">
              {selectedFlavorDetails.map((flavor) => (
                <div
                  key={flavor.id}
                  className="shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold text-white transition-all hover:shadow-md"
                  style={{
                    backgroundColor: flavor.colorHex,
                  }}
                >
                  <span>{flavor.name}</span>
                  <button
                    onClick={() => handleRemoveFlavor(flavor.id)}
                    className="ml-1 hover:opacity-80 transition-opacity flex items-center justify-center"
                    title={`Remove ${flavor.name}`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlatFlavorWheel;
