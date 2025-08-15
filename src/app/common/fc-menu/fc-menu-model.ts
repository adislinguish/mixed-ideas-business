
export interface FcMenuList {
  id: string;
  type?: string;
  title: string;
  url?: string;
  children?: FcMenuList[];
}