import React, {useEffect} from 'react'
import Layout from './Layout'
import DropdownDashboard from '../form/Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state=> state.auth));

  useEffect(() => {
      dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
      if(isError){
        navigate("/");
      }
  }, [isError, navigate]);

    
  return (
    <Layout>
      <DropdownDashboard />
    <div>
      Mantap
    </div>
    </Layout>
  )
  }

export default Dashboard
