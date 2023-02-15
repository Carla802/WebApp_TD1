import {fail, redirect} from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const user = {
			username: data.get('username'),
			password: data.get('password')
		};

		const body = await fetch('https://web-app-back.onrender.com/users/login',{
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify(user)
		}).then(res => {
			if(res.ok) {
				return res.json();
			}
			else {
				return res;
			}
		});
		if (body.status && body.status != 201) {
			return fail(body.status, { err: body.statusText});
		}
		const value = body.jwt;
		cookies.set('jwt', value, { path: '/' });
		throw redirect(307, '/');
	}
};
