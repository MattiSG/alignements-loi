<calculette-impot>
	<input type="text" name="query" placeholder="RSOC10" onchange={ getDescription }>
	<p class="description">{ description }</p>

	<script>
		getDescription() {
			fetch('http://163.172.140.176/variables/' + this.query.value)
				.then(function(response) { return response.json() })
				.then(function(json) {
					this.description = json.description;
					this.update();
				}.bind(this), console.error.bind(console));
		}
	</script>
</calculette-impot>
