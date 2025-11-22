export interface NavItem {
    label: string;
    href: string;
  }
  
  export enum GenerationStatus {
    IDLE = 'IDLE',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
  }