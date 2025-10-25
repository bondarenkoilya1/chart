import { Progress } from "@/components/ui/progress.js";
import * as React from "react";

const STATUS_VARIANTS = {
  good: {
    label: "All Systems Normal",
    progress: 100,
    color: "bg-green-500"
  },
  medium: {
    label: "Partial Outage",
    progress: 66,
    color: "bg-yellow-500"
  },
  bad: {
    label: "Major Outage",
    progress: 33,
    color: "bg-red-500"
  }
} as const;

type StatusType = keyof typeof STATUS_VARIANTS;

interface StatusCardProps {
  status?: StatusType;
}

export const StatusCard = ({ status = "good" }: StatusCardProps) => {
  const [progress, setProgress] = React.useState(0);
  const variant = STATUS_VARIANTS[status];

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(variant.progress), 50);
    return () => clearTimeout(timer);
  }, [variant.progress]);

  return (
    <div>
      <h2 className="font-medium">{variant.label}</h2>
      <div className="mt-2 flex items-center">
        <Progress value={progress} indicatorClassName={`${variant.color} duration-700 ease-out`} />
        <span className="ml-2">{variant.progress}%</span>
      </div>
    </div>
  );
};
