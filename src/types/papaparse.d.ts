declare module "papaparse" {
  export interface ParseConfig<T> {
    header?: boolean;
    dynamicTyping?: boolean;
    skipEmptyLines?: boolean | "greedy";
    complete?: (results: { data: T[] }) => void;
    error?: (error: unknown) => void;
  }
  export function parse<T = any>(input: string, config?: ParseConfig<T>): void;
}


