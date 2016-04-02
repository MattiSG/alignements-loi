<calculette-impot>
	<p>la variable
	<input required type="text" name="query" placeholder="V_0CF" value={ opts.value } onkeyup={ getDescription }>
	dans le calculateur des impôts ({ description })</p>

	<script>
		getDescription() {
			fetch('http://163.172.140.176/variables/' + this.query.value)
				.then(function(response) { return response.json() })
				.then(function(json) {
					this.description = json.description;
					this.root.value = 'https://git.framasoft.org/openfisca/calculette-impots-m-source-code/blob/master/src/tgvH.m#L' + json.tgvh_linecol[0][0];
					this.update();
				}.bind(this), console.error.bind(console));
		}
	</script>
</calculette-impot>
