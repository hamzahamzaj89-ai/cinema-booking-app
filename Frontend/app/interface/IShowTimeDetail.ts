export interface IScreenShowTime {
  _id: string;
  startTime: Date;
  endTime: Date;
  format: string;
  language: string;
}

export interface IScreen {
  _id: string;
  name: string;
  screenNumber: number;
  screenType: string;
}

export interface IScreenShowTimes {
  screen: IScreen;
  showTimes: IScreenShowTime[];
}

export interface IShowTimeByDate {
  date: Date;
  screens: IScreenShowTimes[];
}