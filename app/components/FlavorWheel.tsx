"use client";

import {
  JSX,
  useState,
  useRef,
  MouseEvent,
  TouchEvent,
  useEffect,
} from "react";
import { flavorWheelData } from "../data/flavors";
import { Flavor, FlavorLevel2, FlavorLevel3 } from "../data/types";

interface FlavorWheelProps {
  onFlavorSelect: (
    flavor: Flavor | FlavorLevel2 | FlavorLevel3,
    level: 1 | 2 | 3
  ) => void;
  selectedFlavors: Set<string>;
  /** Scale factor for SVG width relative to container. Default: 1 (100%). E.g., 0.5 = 50%, 1.5 = 150% */
  scale?: number;
  /** Translate X position as a multiple of the scaled SVG element width. Default: 0. E.g., -0.5 moves left by half the SVG width */
  translateX?: number;
  /** Translate Y position as a multiple of the scaled SVG element width. Default: 0. E.g., -0.5 moves up by half the SVG width */
  translateY?: number;
  /** Whether the container should hide overflow. Default: false */
  isOverflowHidden?: boolean;
}

const FlavorWheel = ({
  onFlavorSelect,
  selectedFlavors,
  scale = 1,
  translateX = 0,
  translateY = 0,
  isOverflowHidden = false,
}: FlavorWheelProps) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const isDraggingRef = useRef(false);
  const previousAngleRef = useRef(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const startTouchRef = useRef<{ x: number; y: number } | null>(null);
  const isHorizontalDragRef = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getAngle = (x: number, y: number) => {
    if (!svgRef.current) return 0;
    const rect = svgRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
  };

  useEffect(() => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const handleTouchMoveListener = (e: Event) => {
      const touchEvent = e as unknown as TouchEvent;
      if (!isDraggingRef.current || !startTouchRef.current) return;

      const currentX = touchEvent.touches[0].clientX;
      const currentY = touchEvent.touches[0].clientY;
      const deltaX = currentX - startTouchRef.current.x;
      const deltaY = currentY - startTouchRef.current.y;

      // Determine if this is a horizontal or vertical swipe
      if (!isHorizontalDragRef.current && Math.abs(deltaX) + Math.abs(deltaY) > 5) {
        isHorizontalDragRef.current = Math.abs(deltaX) > Math.abs(deltaY);
      }

      // Only rotate if it's a horizontal drag, otherwise let browser scroll
      if (!isHorizontalDragRef.current) {
        return;
      }

      touchEvent.preventDefault();
      const currentAngle = getAngle(currentX, currentY);
      const delta = currentAngle - previousAngleRef.current;
      setRotationAngle((prev) => prev + delta);
      previousAngleRef.current = currentAngle;
    };

    svgElement.addEventListener("touchmove", handleTouchMoveListener, { passive: false });
    return () => {
      svgElement.removeEventListener("touchmove", handleTouchMoveListener);
    };
  }, []);

  const handleMouseDown = (e: MouseEvent<SVGSVGElement>) => {
    isDraggingRef.current = true;
    previousAngleRef.current = getAngle(e.clientX, e.clientY);
    svgRef.current?.classList.add("grabbing");
  };

  const handleMouseMove = (e: MouseEvent<SVGSVGElement>) => {
    if (!isDraggingRef.current) return;
    const currentAngle = getAngle(e.clientX, e.clientY);
    const delta = currentAngle - previousAngleRef.current;
    setRotationAngle((prev) => prev + delta);
    previousAngleRef.current = currentAngle;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    svgRef.current?.classList.remove("grabbing");
  };

  const handleTouchStart = (e: TouchEvent<SVGSVGElement>) => {
    isDraggingRef.current = true;
    isHorizontalDragRef.current = false; // Reset on new touch
    startTouchRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    previousAngleRef.current = getAngle(
      e.touches[0].clientX,
      e.touches[0].clientY
    );
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  const centerX = 65;
  const centerY = 65;
  const radiusLevel1 = 30;
  const radiusLevel2 = 50;
  const radiusLevel3 = 55;
  const innerRadiusLevel1 = 10;

  const renderSlice = (
    outerRadius: number,
    innerRadius: number,
    startAngle: number,
    endAngle: number,
    color: string,
    label: string,
    onClick: () => void,
    isSelected: boolean,
    level: number,
    textRadius: number
  ) => {
    const startXOuter =
      centerX + outerRadius * Math.cos((startAngle * Math.PI) / 180);
    const startYOuter =
      centerY + outerRadius * Math.sin((startAngle * Math.PI) / 180);
    const endXOuter =
      centerX + outerRadius * Math.cos((endAngle * Math.PI) / 180);
    const endYOuter =
      centerY + outerRadius * Math.sin((endAngle * Math.PI) / 180);

    const startXInner =
      centerX + innerRadius * Math.cos((startAngle * Math.PI) / 180);
    const startYInner =
      centerY + innerRadius * Math.sin((startAngle * Math.PI) / 180);
    const endXInner =
      centerX + innerRadius * Math.cos((endAngle * Math.PI) / 180);
    const endYInner =
      centerY + innerRadius * Math.sin((endAngle * Math.PI) / 180);

    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    const pathData = `
      M ${startXInner},${startYInner}
      L ${startXOuter},${startYOuter}
      A ${outerRadius},${outerRadius} 0 ${largeArcFlag} 1 ${endXOuter},${endYOuter}
      L ${endXInner},${endYInner}
      A ${innerRadius},${innerRadius} 0 ${largeArcFlag} 0 ${startXInner},${startYInner}
      Z
    `;

    const textAngle = startAngle + (endAngle - startAngle) / 2;
    const textX = centerX + textRadius * Math.cos((textAngle * Math.PI) / 180);
    const textY = centerY + textRadius * Math.sin((textAngle * Math.PI) / 180);

    let textRotation = textAngle;
    let textAnchor: "start" | "end" = "start";
    if (textAngle > 90 && textAngle < 270) {
      textRotation -= 180;
      textAnchor = "end";
    }

    return (
      <g
        key={`${level}-${label}`}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <path
          d={pathData}
          fill={isSelected ? "#a7c7e7" : color}
          stroke="#fff"
          strokeWidth="0.2"
        />
        <text
          x={textX}
          y={textY}
          transform={`rotate(${textRotation}, ${textX}, ${textY})`}
          textAnchor={textAnchor}
          dominantBaseline="middle"
          fontSize={level === 3 ? "1.8" : "2"}
          fill={level === 3 ? color : isSelected ? "#000" : "#fff"}
          style={{ pointerEvents: "none", userSelect: "none" }}
        >
          {label}
        </text>
      </g>
    );
  };

  const categories = flavorWheelData.categories;
  const totalLevel3Flavors = categories.reduce(
    (acc, cat) =>
      acc +
      cat.children.reduce((cAcc, child) => cAcc + child.children.length, 0),
    0
  );
  const anglePerLevel3 = 360 / totalLevel3Flavors;

  let currentAngle = 0;

  const svgScale = scale * 100;
  const svgTranslateXPercent = translateX * 100;
  const svgTranslateYPercent = translateY * 100;

  return (
    <div className={`w-full md:w-auto md:h-auto ${isOverflowHidden ? 'overflow-hidden' : ''}`}>
      <svg
        viewBox="-10 -10 150 150"
        className="h-auto"
        ref={svgRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ 
          cursor: isDraggingRef.current ? "grabbing" : "grab",
          width: `${svgScale}%`,
          transform: `translate(${svgTranslateXPercent}%, ${svgTranslateYPercent}%)`,
          transformOrigin: 'top left'
        }}
      >
        <g transform={`rotate(${rotationAngle}, ${centerX}, ${centerY})`}>
          {categories.map((level1) => {
            const level1ChildrenCount = level1.children.reduce(
              (acc, child) => acc + child.children.length,
              0
            );
            const startAngle1 = currentAngle;
            const angle1 = level1ChildrenCount * anglePerLevel3;
            const endAngle1 = startAngle1 + angle1;
            const isLevel1Selected = level1.children
              .flatMap((c) => c.children)
              .every((c3) => selectedFlavors.has(c3.id));

            let level2AngleTracker = startAngle1;

            const level1Slice = renderSlice(
              radiusLevel1,
              innerRadiusLevel1,
              startAngle1,
              endAngle1,
              level1.colorHex,
              level1.name,
              () => onFlavorSelect(level1, 1),
              isLevel1Selected,
              1,
              innerRadiusLevel1 + 2
            );

            const level2Slices = level1.children.map((level2) => {
              const level2ChildrenCount = level2.children.length;
              const startAngle2 = level2AngleTracker;
              const angle2 = level2ChildrenCount * anglePerLevel3;
              const endAngle2 = startAngle2 + angle2;
              const isLevel2Selected = level2.children.every((c3) =>
                selectedFlavors.has(c3.id)
              );

              let level3AngleTracker = startAngle2;

              const level2Slice = renderSlice(
                radiusLevel2,
                radiusLevel1,
                startAngle2,
                endAngle2,
                level2.colorHex,
                level2.name,
                () => onFlavorSelect(level2, 2),
                isLevel2Selected,
                2,
                radiusLevel1 + 2
              );

              let level3Slices: JSX.Element[] = [];
              if (
                !(
                  level2.children.length === 1 &&
                  level2.children[0].name === level2.name
                )
              ) {
                level3Slices = level2.children.map((level3) => {
                  const startAngle3 = level3AngleTracker;
                  const endAngle3 = startAngle3 + anglePerLevel3;
                  const isLevel3Selected = selectedFlavors.has(level3.id);

                  level3AngleTracker = endAngle3;

                  return renderSlice(
                    radiusLevel3,
                    radiusLevel2,
                    startAngle3,
                    endAngle3,
                    level3.colorHex,
                    level3.name,
                    () => onFlavorSelect(level3, 3),
                    isLevel3Selected,
                    3,
                    radiusLevel3 + 2
                  );
                });
              } else {
                level3AngleTracker = endAngle2;
              }

              level2AngleTracker = endAngle2;
              return [level2Slice, ...level3Slices];
            });

            currentAngle = endAngle1;

            return (
              <g key={level1.id}>
                {level1Slice}
                {level2Slices}
              </g>
            );
          })}
          <circle cx="65" cy="65" r="10" fill="white" />
        </g>
      </svg>
    </div>
  );
};

export default FlavorWheel;
