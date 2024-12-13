"use client"

import { useEffect } from 'react';
import {ThunkDispatch} from "@reduxjs/toolkit";
import { fetchUser } from '../../store/userSlices';
import { useDispatch, useSelector } from 'react-redux';

export default function Users() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const users = useSelector((state: any) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  },[]);

  return (
    <div>
      <h1>Welcome to User Page</h1>
      {users.userData.length == 0 ? 
          <div> Loading Data...</div> :
          users.userData.map(dt => (
            <li key={dt.id}>{dt.name}</li>
          ))
        }

    </div>
  );
}