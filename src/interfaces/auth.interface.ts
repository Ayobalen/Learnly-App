export interface IUserAuth {
  email: string;
  user: string;
  phone_number: string;
  password: string;
  login_Date?: Date;
}

export interface IUserToken {
  user: string;
  access_token: string;
  refresh_token: string;
}

export interface ITokenPayload {
  user?: string;
  email: string;
  phone_number: string;
  user_type?: string;
  login_Date?: Date;
}

export interface IAuth {
  access_token: string;
  refresh_token: string;
  user: string;
}
