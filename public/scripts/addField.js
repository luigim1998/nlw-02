document.querySelector("#add-time")
.addEventListener("click", cloneField)

function cloneField(){
	const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true) 
	// a função duplica o campo e o argumento 'true' é para copiar os campos filhos

	const fields = newFieldsContainer.querySelectorAll("input")
	// busca todas as tags 'input'

	fields.forEach(function(field){ // o argumento "field" representa o campo da iteração atual
		field.value = ""
	})
	// fields[0].value = ""
	// fields[1].value = ""
	// limpa os valores para adicionar um novo campo limpo

	document.querySelector("#schedule-items").appendChild(newFieldsContainer)
	// a função coloca o argumento fields dentro do "#schedule-item"
}