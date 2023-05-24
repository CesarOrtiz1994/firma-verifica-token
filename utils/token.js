// Variables de entorno 
import * as dotenv from "dotenv";
dotenv.config();

export const signToken = (user) => {
  const payload = {
    // TODO: Construir payloand
  };

  // TODO: Devolver token firmado
  return null;
};

export const verifyToken = (token) => {
  return null;
};

export const validateExpiration = (payload) => {
  if (Date.now() > payload.exp) {
    throw new Error("Token caducado");
  }
};
