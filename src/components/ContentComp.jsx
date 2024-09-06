import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchContent } from '../redux/contentSlice';

export const ContentComp = () => {
    const dispatch = useDispatch();
  return (
    <div>
            <button onClick={()=>dispatch(fetchContent())}>Fetch Content</button>
    </div>
  )
}
