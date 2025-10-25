import { ChartContainer } from "@/components/ui/chart.js";
import { chartConfig } from "@/components/StatusChart/config.js";
import { AreaChart, Area, CartesianGrid, XAxis } from "recharts";
import { chartData } from "@/components/StatusChart/data.js";

export const StatusChart = () => {
  const dataKeys = ["desktop", "mobile"];

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <AreaChart accessibilityLayer data={chartData}>
        <GridAndAxis />
        {dataKeys.map((key) => (
          <Area dataKey={key} fill={`var(--color-${key})`} type="natural" fillOpacity={0.4} />
        ))}
      </AreaChart>
    </ChartContainer>
  );
};

function GridAndAxis() {
  return (
    <>
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value) => value.slice(0, 3)}
      />
    </>
  );
}
