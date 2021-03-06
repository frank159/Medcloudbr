import * as jwt from 'jsonwebtoken';

type AuthenticationData = {
    id: string,
  }

const expiresIn = "5min";

export const generateToken = (input: AuthenticationData): string => {
      const token = jwt.sign({id: input.id},process.env.JWT_KEY as string,{expiresIn});
      return token;
};

export const getTokenData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY! as string) as any;
    const result = {
      id: payload.id
    };
    return result;
  };