import { useEffect, useState } from "react";
import {
  FAKE_CONSTANTS_ALL,
  FAKE_CONSTANTS_PURCHASE_HISTORY,
} from "./FAKE_CONSTANTS";
type ResultsProps = {
  currentTab: "all" | "purchaseHistory";
  keyword: string;
};

const Results = ({ currentTab, keyword }: ResultsProps) => {
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (currentTab === "all") {
      setResults(FAKE_CONSTANTS_ALL.filter((result) => result.includes(keyword)));
    } else {
      setResults(FAKE_CONSTANTS_PURCHASE_HISTORY.filter((result) => result.includes(keyword)));
    }
  }, [currentTab, keyword]);

  return (
    <div
      className="grid grid-cols-1 overflow-y-auto h-full border-1 border-primary/10 rounded-md divide-y-1 divide-primary/10"
    >
      {results.map((result) => (
        <h4 key={result} className="text-h4 text-center py-2">
          {result}
        </h4>
      ))}
    </div>
  );
};

export default Results;
