//your JS code here. If required.
function myPromise(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000);
	})
}
let outputDiv = document.getElementById("output");
myPromise().then((res)=>{
	outputDiv.innerHTML = res;
})
