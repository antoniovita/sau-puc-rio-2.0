export type ClassSchedule = {
  time: string;
  subject: string;
  code: string;
  room: string;
  highlighted?: boolean;
};

export type ScheduleData = {
  [key: string]: ClassSchedule[];
};


export type AttendanceItem = {
  subject: string;
  totalAbsences: number;
  maxAllowed: number;
  date: string;
};