import { StatusChart } from "@/components/StatusChart/StatusChart.js";
import { StatusCard } from "@/components/StatusCard/StatusCard.js";

export const App = () => {
  return (
    <section className="">
      <h1 className="text-6xl font-bold text-center mt-4">
        Is <span className="text-blue-400">Hackathon</span> down?
      </h1>
      <div className="max-w-[60%] mx-auto mt-24">
        <div className="flex justify-center mx-auto border border-gray-200 mt-4 h-[400px]">
          <StatusChart />
        </div>
        <div className="flex justify-between">
          <div className="w-[30%] border border-gray-200 mt-6 p-6 shadow ">
            <StatusCard status="good" />
          </div>
          <div className="w-[30%] border border-gray-200 mt-6 p-6 shadow ">
            <StatusCard status="medium" />
          </div>
          <div className="w-[30%] border border-gray-200 mt-6 p-6 shadow ">
            <StatusCard status="bad" />
          </div>
        </div>
      </div>
    </section>
  );
};
