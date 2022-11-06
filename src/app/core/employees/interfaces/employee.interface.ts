export interface IEmployeeResponse {
  id: string;
  name: string;
  username: string;
  lastname: string;
  contact: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export type IRegisterEmployee = Partial<IEmployeeResponse>