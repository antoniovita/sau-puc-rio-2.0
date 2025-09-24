//types
import { ScheduleData } from "@/types/homeType";

//components
import { ClassCard } from "./ClassCard";
import { EmptySchedule } from "./EmptySchedule";

export const ScheduleList = ({ schedule, selectedDay }: {
  schedule: ScheduleData;
  selectedDay: string;
}) => (
  <div className="space-y-3 mb-8">
    {schedule[selectedDay]?.map((classItem, index) => (
      <ClassCard key={index} classItem={classItem} />
    )) || <EmptySchedule selectedDay={selectedDay} />}
  </div>
);