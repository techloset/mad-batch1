import React, { useState } from "react";
import axios from "../config/axios.config";


const useGetFollowers = () => {
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState([]);

  const handleSubmit = async () => {
    try {
      const { data } = await axios.get(`/users/${username}/followers`);
      console.log("data", data);
      setFollowers(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return {
    username,
    setUsername,
    followers,
    setFollowers,
    handleSubmit
  }

};

export default useGetFollowers;
