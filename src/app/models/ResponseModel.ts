export interface ResponseModel<T = void> {
    status: 'success' | 'error' | 'warning';
    message: string;
    data?: T;
  }