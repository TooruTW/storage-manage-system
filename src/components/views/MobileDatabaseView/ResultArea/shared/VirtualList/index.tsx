import React from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";

type VirtualListProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  estimateSize?: number;
  overscan?: number;
  getItemKey?: (item: T, index: number) => string | number;
};

const VirtualList = <T,>({
  data,
  renderItem,
  estimateSize = 90,
  overscan = 5,
  getItemKey,
}: VirtualListProps<T>) => {
  const rowVirtualizer = useWindowVirtualizer({
    count: data.length,
    estimateSize: () => estimateSize,
    overscan,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();

  return (
    <ul
      className="w-full flex flex-col gap-2"
      style={{
        height: `${rowVirtualizer.getTotalSize()}px`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
        }}
      >
        {virtualItems.length > 0 &&
          virtualItems.map((virtualItem) => {
            const item = data[virtualItem.index];
            const key = getItemKey
              ? getItemKey(item, virtualItem.index)
              : virtualItem.key;

            return (
              <li key={key} className="w-full">
                {renderItem(item, virtualItem.index)}
              </li>
            );
          })}
      </div>
    </ul>
  );
};

export default VirtualList;

