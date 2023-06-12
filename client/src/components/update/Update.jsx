import React, { useEffect, useState } from "react";
import "./update.scss";
import { makeRequest } from "../../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Update = ({ setOpenUpdate, user }) => {
  const [conver, setConver] = useState(null);
  const [profile, setProfile] = useState(null);
  const [texts, setTexts] = useState({
    name: "",
    city: "",
    website: "",
  });

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const update = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (user) => {
      return makeRequest.put("/users", user);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    let converUrl;
    let profileUrl;

    converUrl = conver ? await update(conver) : user.converPic;
    profileUrl = conver ? await update(profile) : user.profilePic;

    mutation.mutate({ ...texts, converPic: converUrl, profilePic: profileUrl });
    setOpenUpdate(false);
  };

  return (
    <div className="update">
      Update
      <form>
        <input type="file" onChange={(e) => setConver(e.target.files[0])} />
        <input type="file" onChange={(e) => setProfile(e.target.files[0])} />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Fullname"
          value={texts.name}
        />
        <input
          type="text"
          name="city"
          onChange={handleChange}
          placeholder="City"
          value={texts.city}
        />
        <input
          type="text"
          name="website"
          onChange={handleChange}
          placeholder="website"
          value={texts.website}
        />
        <button onClick={handleSubmit}>Update</button>
      </form>
      <button onClick={() => setOpenUpdate(false)}>X</button>
    </div>
  );
};

export default Update;
