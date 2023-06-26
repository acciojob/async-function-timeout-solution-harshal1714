const url = "https://jsonplaceholder.typicode.com/posts/1";
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');


const fetchData = async() => {
	const res = await fetch(url);
	const data = await res.json();
	output.innerText = data.title;
}

btn.addEventListener('click', fetchData);