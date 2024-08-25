export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface IProductListProps {
  products: IProduct[];
}

export interface IProductCardProps {
  product: IProduct;
  remove?: () => void;
}

export interface ICategory {
  name: string;
}

export interface ICredentials {
  password: string;
  id: number;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  password: string;
  phone: string;
  dni: number;
  email: string;
  orders?: IOrderResponse[];
}

export interface IUserResponse {
  login: boolean;
  user: Partial<IUser> | null;
  token: string;
}
export interface ILoginUser {
  email: string;
  password: string;
}

export interface LoginErrorProps {
  email?: string;
  password?: string;
}

export interface IRegisterUser {
  name: string;
  username: string;
  password: string;
  phone: number;
  dni: number;
  email: string;
}

export interface IRegisterUserResponse {
  name: string;
  username: string;
  password: string;
  phone: number;
  dni: number;
  email: string;
  role: string;
  credential: ICredentials;
}

export interface RegisterPropsResponse {
  name: string;
  phone: number;
  email: string;
  password: string;
  role: string;
  credential: ICredentials;
}

export interface RegisterErrorProps {
  name?: string;
  username?: string;
  phone?: string;
  email?: string;
  password?: string;
  role?: string;
}

export interface IUsercontextType {
  user: Partial<IUserResponse> | null;
  setUser: React.Dispatch<React.SetStateAction<Partial<IUserResponse> | null>>;
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  signIn: (credentials: ILoginUser) => Promise<boolean>;
  signUp: (user: Omit<IUser, "id">) => Promise<boolean>;
  getOrders: () => void;
  orders: IOrderResponse[] | [];
  logout: () => void;
}

export interface ICartContextType {
  cartItems: IProduct[];
  addToCart: (product: number) => void;
  removeFromCart: (product: number) => void;
  total: number;
  proceedtoCheckout: () => void;
}

export interface IOrderProps {
  order: IOrderResponse;
}

export interface IOrderResponse {
  id: number;
  status: string;
  date: string;
  user: IUser;
  products: IProduct[];
}

export interface ICreateOrder {
  userId: number;
  products: number;
}
