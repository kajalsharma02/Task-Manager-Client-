import { BACKEND_URL } from "../utils/constant";
import axios from "axios";
import toast from "react-hot-toast";

// User registration
export const register = async ({ name, email, password }) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/auth/register`,
      {
        name,
        email,
        password
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
    return response;
  } catch (error) {
    toast.error("User Already Exists!!!");
    throw new Error(error.response.data.message);
  }
};

// User login
export const login = async ({ name, email, password }) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/auth/login`,
      {
        name,
        email,
        password
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Update password
export const updatePassword = async ({ email, oldPassword, newPassword }) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/auth/update-password`,
      {
        email,
        oldPassword,
        newPassword
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
    toast.success("Password updated successfully!");
    return response;
  } catch (error) {
    toast.error("Failed to update password.");
    throw new Error(error.response.data.message);
  }
};
