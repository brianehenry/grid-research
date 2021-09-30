export class RowModel {
  public name: string;
  public field1: string;
  public field2: string;
  public field3: string;
  public groupField1: string;
  public groupField2: string;
  public dateField: Date;
  public tempField1: number;
  public tempField2: number;
  public booleanField1: boolean;
  public booleanField2: boolean;
  public enumField: RowEnum;
}

export enum RowEnum {
  Yep,
  Nope,
  YepNope
}
