export class Response<T> {
  code: number = 0;
  messages: string[] = [];
  data!: T;
};

export class BasicUserData {
  user_type_id: number = 0;
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone_number: string = '';
  passwd: string = '';
}

export class SignUp extends BasicUserData {
  id: number = 0;
  is_active: number = 0;
  session_token: string = '';
};

export class Service {
  id: number = 0;
  service_name: string = '';
  cost: number = 0;
  service_description: string = '';
  short_description: string = '';
  service_duration: number = 0;
  is_active: number = 0;
}
