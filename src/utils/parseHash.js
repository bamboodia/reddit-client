import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setUserState } from "../store/userSlice";

export const ParseHash = (hash) => {
	const dispatch = useDispatch();
	hash = hash.substring(1, hash.length);
	let hashArr = [];
	const params = hash.split("&");
	params.forEach((e) => hashArr.push(e.split("=")));
	console.log(hashArr);
	const hashObj = Object.fromEntries(hashArr);
	console.log(hashObj);
	dispatch(setAccessToken(hashArr[0][1]));
	dispatch(setUserState(hashArr[2][1]));
	removeHash();
};
function removeHash() {
	// eslint-disable-next-line no-restricted-globals
	history.pushState("", document.title, window.location.pathname + window.location.search);
}
