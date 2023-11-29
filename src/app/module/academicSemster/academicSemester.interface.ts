export type TMonths =
  | 'january'
  | 'february'
  | 'march'
  | 'april'
  | 'may'
  | 'jun'
  | 'july'
  | 'august'
  | 'september'
  | 'october'
  | 'november'
  | 'december';

export type TAcademicSemesterName = 'Autumn' | 'Summer' | 'Fall';
export type TAcademicSemesterCode = '01' | '02' | '03';

export type TAcademicSemester = {
  name: TAcademicSemesterName;
  code: TAcademicSemesterCode;
  year: Date;
  startMonth: TMonths;
  endMonth: TMonths;
};
