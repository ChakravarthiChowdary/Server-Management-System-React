export interface DataState {
  loading: boolean;
  error: null | { message: string; code: number };
}
