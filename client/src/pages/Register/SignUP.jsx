import React from 'react';
import axios from "axios";
import { useState, useContext } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./SignUP.scss"
import swal from 'sweetalert';
import ReagisterPageContexts from '../../components/AllContexts/contexts/ReagisterPageContexts';

const SignUP = () => {

  const {ReagisterState, ReagisterDispatch} = useContext(ReagisterPageContexts);


  // Create Alart toast
  const submitAlart = (msg, type) => {
    return type ? toast.warning(msg) : toast.success(msg); 
  }
  const [msg, setMsg] = useState({
    type  : '',
    msg   : "",
    status : false
  });

  // use State
  const [ input, setInput] = useState({
    name : "",
    surname : "",
    log_type : "",
    password : "",
    day : "",
    month : "",
    year  : "",
    gender : ""
  });

  // Hendel input
  const hendleInput = (e) => {
    setInput((prev) => ({...prev, [e.target.name] : e.target.value}));
  }

    // Chack User login methord 
    const numberPattan = /^(01|8801|\+8801)[0-9]{9}$/;
    const emailPattan = /^[a-z0-9._]{4,30}@[a-z0-9-]{3,20}\.[a-z]{2,9}$/;



  const userRegisterHendle = async(e) => {
    e.preventDefault();

    try {

      if( !input.log_type || !input.name || !input.surname || !input.password || !input.day || !input.month || !input.year || !input.gender ){
        submitAlart('All fields are required', true);
      }else{
        if(numberPattan.test(input.log_type)){
          await axios.post('http://localhost:5050/api/user/register', { 
            cell : input.log_type,
            email  : "",
            name : `${input.name} ${input.surname}`,
            gender : input.gender,
            age : `${input.day}/${input.month}/${input.year}`,
            password : input.password 
           })
          .then( res =>{
            swal('Account created successfully', { icon: "success"});
            setMsg({
              type  : 'success',
              msg   : "Chack Your Phone for account verify opt",
              status : true
            });
            setInput({
              name : "",
              surname : "",
              log_type : "",
              password : "",
              day : "",
              month : "",
              year  : "",
              gender : ""
            })
    
          })
          .catch( error =>{
            setMsg({
              type  : 'danger',
              msg   : error.response.data.message,
              status : true
            });
    
          });
    
    
    
        }else if(emailPattan.test(input.log_type)){
    
          await axios.post('http://localhost:5050/api/user/register', {
            cell : "",
            email  : input.log_type,
            name : `${input.name} ${input.surname}`,
            gender : input.gender,
            age : `${input.day}/${input.month}/${input.year}`,
            password : input.password 
           })
            .then( res =>{
              swal('Account created successfully', { icon: "success"});
              setMsg({
                type  : 'success',
                msg   : "Chack Your email for account verify link",
                status : true
              });
              setInput({
                name : "",
                surname : "",
                log_type : "",
                password : "",
                day : "",
                month : "",
                year  : "",
                gender : ""
              })
      
            })
            .catch( error =>{
              setMsg({
                type  : 'danger',
                msg   : error.response.data.message,
                status : true
              });
      
            });
    
        }else{
          swal('Enter a Phone number or Email address', { icon: "warning"});
        }
      }

          

  
      
    } catch (error) {
      console.log(error.response);
    }

  }


  const hendelRegisterHide = () =>{
    ReagisterDispatch({type : "HIDE_PAGE", payload: false});
  }

  return (
      <div className="register_container"  >
      <div className="register_warap">
        <div className="signup_top_tex">
          <div className="top_text">
            <h1>Sign Up</h1>
            <span>It's quick and easy.</span>
          </div>
          <div className="close_button">
          <button onClick={hendelRegisterHide}>&times;</button>
          </div>
        </div>
        <hr />
        <div className="signup_form">
          <form action="" onSubmit={userRegisterHendle}>
            <div className="form-group my-3 signup_name">
              <input value={input.name} onChange={hendleInput} name="name" className="form-control" type="text"  placeholder="First Name" />
              <input value={input.surname} onChange={hendleInput} name="surname" className="form-control" type="text" placeholder="Surname"/>
            </div>
            <div className="form-group my-3 ">
              <input value={input.log_type} onChange={hendleInput} name="log_type" className='form-control' type="text"  placeholder="Mobile number or email address" />
            </div>
            <div className="form-group my-3 ">
              <input value={input.password} onChange={hendleInput} name="password" className='form-control' type="password"  placeholder="New Password" />
            </div>
            <span>Date of birth</span>
            <div className="form-group age mb-3 ">
                <select value={input.day} onChange={hendleInput}  className="" name="day" id="">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                  <option value={15}>15</option>
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>
                  <option value={19}>19</option>
                  <option value={20}>20</option>
                  <option value={21}>21</option>
                  <option value={22}>22</option>
                  <option value={23}>23</option>
                  <option value={24}>24</option>
                  <option value={25}>25</option>
                  <option value={26}>26</option>
                  <option value={27}>27</option>
                  <option value={28}>28</option>
                  <option value={29}>29</option>
                  <option value={30}>30</option>
                  <option value={31}>31</option>
                </select>
                <select value={input.month} onChange={hendleInput} name="month" id="">
                  <option value="Jan">Jan</option>
                  <option value="Feb">Feb</option>
                  <option value="Mar">Mar</option>
                  <option value="Apr">Apr</option>
                  <option value="May">May</option>
                  <option value="Jun">Jun</option>
                  <option value="Jul">Jul</option>
                  <option value="Aug">Aug</option>
                  <option value="Sept">Sept</option>
                  <option value="Oct">Oct</option>
                  <option value="Nov">Nov</option>
                  <option value="Dec">Dec</option>
                </select>
                <select value={input.year} onChange={hendleInput} name="year" id="">
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                </select>
            </div>
            <span>Gender</span>
            <div className="form-group gender mb-3">
              <label className="custom-control custom-radio">Female
                <input value="Female"  onChange={hendleInput} type="radio" name="gender" id="" className="custom-control-input"/>
              </label>
              <label className="custom-control custom-radio">Male
                <input value="male"  onChange={hendleInput} type="radio" name="gender" className="custom-control-input"/>
              </label>
              <label className="custom-control custom-radio">Custom
                <input value="Custom"  onChange={hendleInput} type="radio" name="gender" className="custom-control-input"/>
              </label>
            </div>
            <div className="form-bottom-text">
              <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
              <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
            </div>
            <div className="form-group my-3 text-center">
              <button className='sign_up_btn' type='submit'>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
};

export default SignUP;