<generic-url>
	le document
	<input class="source" required type="url" placeholder="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000030021309&cidTexte=LEGITEXT000006069577&categorieLien=id&dateTexte=20151231" value={ url }>

	<style scoped>
		input {
			display: block;
		}

		input[type="url"] {
			width: 100%;
		}
	</style>

	<script>
		setValue() {
			fetch({ url })
				.then(function(response) {
					if (this.response.ok)
						this.root.value = this.url;
					this.update();
				}.bind(this), console.error.bind(console));
		}
	</script>
</generic-url>
