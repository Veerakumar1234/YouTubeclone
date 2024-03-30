import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../../actions/currentUser";
import "./Auth.css";
import { MdLogout } from "react-icons/md";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
function Auth({ User, setAuthBtn,setEditCreateChanelBtn }) {
  const dispatch = useDispatch();

  const onLogOutSuccess = () => {
    dispatch(setCurrentUser(null));
    alert("Log Out SuccessFully");
  };
  
  return (
    <div className="Auth_container" onClick={() => setAuthBtn(false)}>
      <div className="Auth_container2">
        <p className="User_Details">
          <div className="Chanel_logo_App">
            <p className="fstChar_logo_App">
            <span> <i class="fa-solid fa-user" style={{color: '#1006a2'}}></i></span>

              {User?.result.name ? (
                <>{User?.result.name.charAt(0).toUpperCase()} </>
              ) : (
                <>{User?.result.email.charAt(0).toUpperCase()} </>
              )}
            </p>
          </div>
          <div className="email_Auth">{User?.result.email}</div>
        </p>
        <div className="btns_Auth">
          {User?.result.name ? (
            <>
              {
                <div className="btn_Auth">
                  Your Chanel
                </div>
              }
            </>
          ) : (
            <>
            <Link to={`/chanel/${User?.result._id}`}>
              <input
                type="submit"
                className="btn_Auth"
                value="Your Chanel"
                onClick={()=>setEditCreateChanelBtn(true)}
              />
              </Link>
            </>
          )}

          <div>
            <googleLogout

              clientId={
                "565866976001-kogc3n05n90ug8i92r0t40tl8co0fhse.apps.googleusercontent.com"
              }
              onLogoutSuccess={onLogOutSuccess}
              render={(renderProps) => (
                <div onClick={renderProps.onClick} className="btn_Auth">
                  <MdLogout size={22}/>
                  Log Out
                </div>
                
              )}
            />
          </div>
          <Link to={'/login'} className="login_link">
            Login
          </Link>
          <Link to={'/videopage/:vid'} className="sub_contain">
            Subscribe Now
          </Link>
          <div>
          
          <GoogleOAuthProvider
           
           clientId={'53943115384-03p11tpuendmh56qsnu2babq30q7kl57.apps.googleusercontent.com' }
            
             ><GoogleLogin    scope='openid profile email'
             discoveryDocs='claims_supported'
             access_type='offline'
             onResolve={({provider,data}) =>{
               console.log(provider,data);
             }}
             onReject={(err)=>{
               console.log(err);
             }}/> </GoogleOAuthProvider>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Auth;
