<script>
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';

	export let errors;
</script>

<div class="editor-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-10 offset-md-1 col-xs-12">
				<ListErrors {errors} />

				<form use:enhance method="POST">
					<fieldset class="form-group">
						<label> Film Name </label>
						<input
								name="filmName"
								class="form-control"
								placeholder="Film Name"
						/>
					</fieldset>
					<fieldset class="form-group">
						<label> Address </label>
						<input
								name="address"
								class="form-control"
								placeholder="Address"
						/>
					</fieldset>
					<fieldset class="form-group">
						<label> District </label>
						<input
								name="district"
								class="form-control"
								placeholder="District"
						/>
					</fieldset>
					<fieldset class="form-group">
						<label> Film Director </label>
						<input
								name="filmDirectorName"
								class="form-control"
								placeholder="Film Director"
						/>
					</fieldset>
					<fieldset class="form-group">
						<label> Film Producer </label>
						<input
								name="filmProducerName"
								class="form-control"
								placeholder="Film Producer"
						/>
					</fieldset>
					<fieldset class="form-group">
						<label> Film Type </label>
						<input
								name="filmType"
								class="form-control"
								placeholder="Film Type"
						/>
					</fieldset>
					<fieldset class="form-group">
						<label> Source Location ID </label>
						<input
								name="sourceLocationId"
								class="form-control"
								placeholder="Source Location ID"
						/>
					</fieldset>
					<fieldset class="form-group">
						<label> Start Date </label>
						<input
								name="startDate"
								class="form-control"
								placeholder="Start Date"
						/>
					</fieldset>
					<fieldset class="form-group">
						<label> End Date </label>
						<input
								name="endDate"
								class="form-control"
								placeholder="End Date"
						/>
					</fieldset>
					<fieldset class="form-group">
						<label> Year </label>
						<input
								name="year"
								class="form-control"
								placeholder="Year"
						/>
					</fieldset>

					<button class="btn btn-lg pull-xs-right btn-primary">Add</button>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	label {
		font-size: large;
	}
</style>

