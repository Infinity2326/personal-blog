"use strict"

document.addEventListener('DOMContentLoaded', function(){
	const openTextareaButton = document.querySelector('.open-textarea');
	const mainForm = document.forms.createPost;
	const submitButton = document.querySelector(".submit-button");
	const textarea = mainForm.elements.formInput;
	const remainSymbols = document.querySelector(".remain-symbols");
	const posts = document.querySelector('.posts');
	openTextareaButton.addEventListener("click", function(event){
		event.preventDefault();
		mainForm.classList.toggle('active');
		mainForm.classList.toggle('hidden');
	});
	submitButton.addEventListener("click", function(event){
		event.preventDefault();
		posts.insertAdjacentHTML("beforeend",
		`<div class="post">${textarea.value}</div>`);
		mainForm.classList.toggle('active');
		mainForm.classList.toggle('hidden');
		textarea.value = "";
		remainSymbols.innerHTML = 200;
	});
	textarea.addEventListener("input", function(event){
		remainSymbols.innerHTML = textarea.getAttribute('maxlength') - textarea.value.length;
	})
})