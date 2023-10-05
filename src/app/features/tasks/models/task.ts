export interface Task extends Record<string, any> {
  id: string;
  title: string;
  description: string;
  due: Date;
  status: Status;
}

export enum Status {
  IN_PROGRESS = 'In progress',
  COMPLETED = 'Completed',
  OPEN = 'Open',
}
