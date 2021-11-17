export interface Response<T> {
  code: number;
  messages: string[];
  data: T;
};

export interface BasicUserData {
  user_type_id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  passwd: string;
}

export interface SignUp extends BasicUserData {
  id: number;
  is_active: number;
  session_token: string;
};
