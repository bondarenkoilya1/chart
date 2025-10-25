import { ChartContainer } from "@/components/ui/chart.js";
import { chartConfig } from "@/components/StatusChart/config.js";
import { AreaChart, Area } from "recharts";
import { chartData } from "@/components/StatusChart/data.js";

export const StatusChart = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <AreaChart accessibilityLayer data={chartData}>
        <Area dataKey="desktop" fill="var(--color-desktop)" type="natural" fillOpacity={0.4} />
        <Area dataKey="mobile" fill="var(--color-mobile)" type="natural" fillOpacity={0.4} />
      </AreaChart>
    </ChartContainer>
  );
};
