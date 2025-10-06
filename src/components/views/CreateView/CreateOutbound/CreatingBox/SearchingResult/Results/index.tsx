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
      setResults(
        FAKE_CONSTANTS_ALL.filter((result) => result.includes(keyword))
      );
    } else {
      setResults(
        FAKE_CONSTANTS_PURCHASE_HISTORY.filter((result) =>
          result.includes(keyword)
        )
      );
    }
  }, [currentTab, keyword]);

  return (
    <ul className="flex flex-col overflow-y-auto border-1 border-primary/10 rounded-md h-160 divide-y-1 divide-primary/10">
      {results.map((result) => (
        <li key={result} className="text-paragraph text-center py-2 hover:bg-primary/10 cursor-pointer">
          {result}
        </li>
      ))}
    </ul>
  );
};

export default Results;
