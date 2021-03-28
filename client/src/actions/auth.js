import { LOGIN_USER, REGISTER_USER } from "./types";
import axios from "axios";

export const login_user = (form_data, history) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    let request_body = JSON.stringify(form_data);

    // console.log(request_body);

    try {
        const res = await axios.post("/api/auth/login", request_body, config);
        
        console.log(res.data);
        // dispatch({
        //     type: LOGIN_USER,
        //     payload: res.data
        // });
        // history.push("/");
        // dispatch(create_alert("success", "Welcome Back"));
    } catch (error) {
        console.log(error);
        // dispatch(create_alert("error", "Login Error"));
    }
};

export const register_user = (form_data, history) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    let request_body = JSON.stringify(form_data);

    // console.log(request_body);

    try {
        const res = await axios.post("/api/auth/register", request_body, config);
        
        console.log(res.data);
        // dispatch({
        //     type: LOGIN_USER,
        //     payload: res.data
        // });
        // history.push("/");
        // dispatch(create_alert("success", "Welcome Back"));
    } catch (error) {
        console.log(error);
        // dispatch(create_alert("error", "Login Error"));
    }
};