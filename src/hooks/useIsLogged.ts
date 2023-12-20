import { UsersServices } from "@services/api";

const _UsersServices = new UsersServices();

export const useIsLogged = async (): Promise<boolean> => {
  const user = await _UsersServices.me();

  if (user) {
    return true;
  }

  return false;
};
