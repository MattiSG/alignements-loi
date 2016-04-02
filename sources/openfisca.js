<openfisca>
	<p>la variable
	<input required type="text" name="query" placeholder="al.R1.taux1" value={ opts.value } onchange={ getDescription }>
	dans Openfisca ({ description })</p>

	<script>
		getDescription() {
			var url = 'http://api.openfisca.fr/api/1/parameters?name=' + this.query.value;
			fetch(url)
				.then(function(response) { return response.json() })
				.then(function(json) {
					this.description = json.parameters[0].description;
					this.root.value = url;
					this.update();
				}.bind(this), console.error.bind(console));
		}
	</script>
</openfisca>
