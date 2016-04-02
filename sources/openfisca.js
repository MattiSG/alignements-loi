<openfisca>
	<p>la variable
	<input required type="text" name="query" placeholder="nb_pac" value={ opts.value } onkeyup={ getDescription }>
	dans Openfisca ({ description })</p>

	<script>
		getDescription() {
			var url = 'http://api.openfisca.fr/api/1/variables?name=' + this.query.value;
			fetch(url)
				.then(function(response) { return response.json() })
				.then(function(json) {
					this.description = json.variables[0].label;
					this.root.value = url;
					this.update();
				}.bind(this), console.error.bind(console));
		}
	</script>
</openfisca>
