<script>
	import {enhance} from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Settings • Conduit</title>
</svelte:head>

<div className="settings-page">
	<div className="container page">
		<div className="row">
			<div className="col-md-6 offset-md-3 col-xs-12">
				<h1 className="text-xs-center">Your Settings</h1>

				<ListErrors errors={form?.errors}/>

				<form
						use:enhance={() => {
						return ({ update }) => {
							// don't clear the form when we update the profile
							update({ reset: false });
						};
					}}
					method="POST"
					action="?/save"
				>
					<fieldset>
						<fieldset className="form-group">
							<input
								className="form-control"
								name="image"
								type="text"
								placeholder="URL of profile picture"
								value={data.user.image}
							/>
						</fieldset>

						<fieldset className="form-group">
							<input
								className="form-control form-control-lg"
								name="username"
								type="text"
								placeholder="Username"
								value={data.user.username}
							/>
						</fieldset>

						<fieldset className="form-group">
							<textarea
								className="form-control form-control-lg"
								name="bio"
								rows="8"
								placeholder="Short bio about you"
								value={data.user.bio}
							/>
						</fieldset>

						<fieldset className="form-group">
							<input
								className="form-control form-control-lg"
								name="email"
								type="email"
								placeholder="Email"
								value={data.user.email}
							/>
						</fieldset>

						<fieldset className="form-group">
							<input
								className="form-control form-control-lg"
								name="password"
								type="password"
								placeholder="New Password"
							/>
						</fieldset>

						<button className="btn btn-lg btn-primary pull-xs-right">Update Settings</button>
					</fieldset>
				</form>

				<hr />

				<form use:enhance method="POST" action="?/logout">
					<button className="btn btn-outline-danger">Or click here to logout.</button>
				</form>
			</div>
		</div>
	</div>
</div>