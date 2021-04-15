document.addEventListener('DOMContentLoaded',
function(){
	let form = document.getElementById('form')
	form.addEventListener('submit',
	function(event){
		event.preventDefault()
		let n1 = document.getElementById('n1').value
		let n2 = document.getElementById('n2').value
		console.log(n1, n2)
		n1 = Number.parseInt(n1)
		n2 = Number.parseInt(n2)
		console.log(n1, n2)
		for (int i = n1; i <= n2; i++){
			if(i % 2 === 0){
				console.log(i)
			}
		}
	})
})