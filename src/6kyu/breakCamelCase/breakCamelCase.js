const breakCamelCase = (string) => {
	let regex=new RegExp('[A-Z]', 'g');
	return string.replace(regex, ' $&');
}

module.exports={
	breakCamelCase,
};