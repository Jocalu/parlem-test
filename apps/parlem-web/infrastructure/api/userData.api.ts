import { UserData } from "~~/@types/userData";

const factory = () => {
  const getUserData = async (userId: string): Promise<UserData> => {
    const response = await fetch(`http://localhost:8000/api/user/${userId}`);
    const userData = await response.json();

    return userData;
  };

  return {
    getUserData,
  };
};

export default factory();
