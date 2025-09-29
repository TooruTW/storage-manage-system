import ExampleTable from "../ExampleTable";

const CenterSection = () => {
  return (
    <div className="rounded-xl border border-primary/10 shadow-md w-full p-6">
      <div className=" flex justify-between items-center">
        <h2 className="text-h2 font-normal">Table Name</h2>{" "}
        <div>
          <input type="Search" />
        </div>
      </div>
      <ExampleTable />
    </div>
  );
};

export default CenterSection;
