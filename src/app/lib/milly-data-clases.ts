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
  type_name: string = '';
  type_code: string = '';
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

export class Reservation {
  id_reservation: number = 0;
  reservation_date: Date | null = null;
  start_time: number = 0;
  end_time: number = 0;
  service_id: number = 0;
  service_name: string = '';
  cost: number = 0;
  service_short_desc: string = '';
  service_duration: number = 0;
  is_service_active: number = 0;
}

export class ReservationList {
  total_record: number = 0;
  reservations: Reservation[] = [];
}

export class AdminReservation {
  id_reservation: number = 0;
  user_id: number = 0;
  firstname: string = '';
  lastname: string = '';
  reservation_date: Date | null = null;
  start_time: number = 0;
  end_time: number = 0;
  service_id: number = 0;
  service_name: string = '';
  cost: number = 0;
  service_description: string = '';
  service_short_desc: string = '';
  service_duration: number = 0;
  is_service_active: number = 0;
}

export class ServiceList {
  total_record: number = 0;
  services: Service[] = [];
}

export class BlockedTime {
  star_time: number = 0;
  end_time: number = 0;
}

export class DeleteAppointment {
  reservation_id: number = 0;
}
