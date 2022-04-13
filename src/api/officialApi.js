const makeId = () => {
	var result = "";
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;
	for (var i = 0; i < 16; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};
const id = makeId();
const redirectUri = "https://bam-reddit-client.netlify.app";
const clientId = "Ly93eqQOLyeChSWpzcUJXw";
const secret = "GQPdWAFDUzp_sUsZH9-HneXsQNtEjw";
const authPath = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=token&state=${id}&redirect_uri=${redirectUri}&scope=edit,history,identity,mysubreddits,read,subscribe,vote`;

export const auth = () => {
	window.location.href = authPath;    
};

export const login = (code) => {
    console.log(id)
	const fd = new FormData();
	fd.append("code", code);
	fd.append("grant_type", "authorization_code");
	fd.append("redirect_uri", redirectUri);

	fetch("https://www.reddit.com/api/v1/access_token", {
		headers: {
			Authorization: "Basic " + btoa(unescape(encodeURIComponent(clientId + ":" + ""))),
		},
		method: "POST",
		body: fd,
	});
};
