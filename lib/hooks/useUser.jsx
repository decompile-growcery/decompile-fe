import Cookies from "js-cookie";

export default function useUser() {
    return Cookies.get('token') ? Cookies.get('token') : false;
}
