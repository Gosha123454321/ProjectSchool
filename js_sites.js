function RandChisl() {
	let k = [1, 2, 4];
	let K = k[Math.floor(Math.random() * k.length)];

	let f = [2, 4, 8, 16, 32, 64];
	let F = f[Math.floor(Math.random() * f.length)];

	let l = [2, 4, 8, 16, 24, 32, 48, 64, 72, 96];
	let L = l[Math.floor(Math.random() * l.length)];

	let t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let T = t[Math.floor(Math.random() * t.length)];
	return {
		T: T,
		F: F,
		L: L,
		K: K
	}
}	

function generateText(data){
	return `Звукозапись с количеством каналов записи ${data.K} с частотой дискретизации ${data.F} и ${data.L} разрешением  велась в течение ${data.T}. Сжатие данных не производилось. Чему равен размер файла.`
}


document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('diapazon').addEventListener('submit', function (e) {
		e.preventDefault();
			let n = document.getElementById('text1.1').value;
			console.log(n);
	})
})

/*
	function RandChisl(){
		let k = [1, 2, 4];
		let K = k[Math.floor(Math.random() * k.length)];

		let f = [2, 4, 8, 16, 32, 64];
		let F = f[Math.floor(Math.random() * f.length)];

		let l = [2, 4, 8, 16, 24, 32, 48, 64, 72, 96];
		let L = l[Math.floor(Math.random() * l.length)];

		let t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		let T = t[Math.floor(Math.random() * t.length)];
	}	
	function generateText(data){
 		return `Звукозапись с количеством каналов записи ${data.K} с частотой дискретизации ${data.F} и ${data.L} разрешением  велась в течение ${data.T}. Сжатие данных не производилось. Чему равен размер файла.`
 	}
}

document.getElementById('btn2').onClick = function{

}

})




function RandChisl(){
	let k = [1, 2, 4];
	let K = k[Math.floor(Math.random() * k.length)];

	let f = [2, 4, 8, 16, 32, 64];
	let F = f[Math.floor(Math.random() * f.length)];

	let l = [2, 4, 8, 16, 24, 32, 48, 64, 72, 96];
	let L = l[Math.floor(Math.random() * l.length)];

	let t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let T = t[Math.floor(Math.random() * t.length)];

	console.log(K)
	console.log(F)
	console.log(L)
	console.log(T)
}

RandChisl()
RandChisl()
RandChisl()
RandChisl()
RandChisl()





function randAB(a, b){
	return Math.floor(Math.random() * (b - a + 1)) + a;
} функция рандомного числа из отрезка




let p = Math.floor(Math.random() * 10) % ((10 - 2) + 3) рандомное число степени двойки
*/