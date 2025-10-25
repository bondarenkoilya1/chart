import { StatusChart } from "@/components/StatusChart/StatusChart.js";

export const App = () => {
  return (
    <section className="">
      <h1 className="text-7xl font-bold text-center mt-4">App</h1>
      <div className="w-1/2 flex justify-center mx-auto border border-gray-200 mt-4">
        <StatusChart />
      </div>
    </section>
  );
};
