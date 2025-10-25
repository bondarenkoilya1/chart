import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart.js";
import { chartConfig } from "@/components/StatusChart/config.js";
import { AreaChart, Area, CartesianGrid, XAxis } from "recharts";
import { chartData } from "@/components/StatusChart/data.js";

export const StatusChart = () => {
  const dataKeys = ["desktop", "mobile"];

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <AreaChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        {dataKeys.map((key) => (
          <Area dataKey={key} fill={`var(--color-${key})`} type="natural" fillOpacity={0.4} />
        ))}
      </AreaChart>
    </ChartContainer>
  );
};
