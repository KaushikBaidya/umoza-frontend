import axios from "axios";

const client = axios.create({ baseURL: process.env.API_URL });

export const request = async ({ ...options }) => {
	const res = await client(options);
	return res;
};
