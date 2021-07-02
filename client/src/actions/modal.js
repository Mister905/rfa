import { TOGGLE_MODAL  } from "./types";
import axios from "axios";

export const toggle_modal = () => async dispatch => {

    try {
        // const res = await axios.get("/api/planets");
        
        // console.log(res.data);
        // dispatch({
        //     type: LOGIN_USER,
        //     payload: res.data
        // });
        // history.push("/");
        // dispatch(create_alert("success", "Welcome Back"));
        console.log("TOGGLE");
    } catch (error) {
        console.log(error);
        // dispatch(create_alert("error", "Login Error"));
    }
};