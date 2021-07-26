const fs = require('fs');
const colors = require('colors');

const crearArchivoMultiplicar = async (base = 5, listar = false, hasta = 10) => {
	try {
		let salida = '';
		let consola = '';

		for (let i = 1; i <= hasta; i++) {
			consola += `${colors.brightRed(base)} ${colors.magenta('x').trap} ${colors.brightBlue(i)} ${colors.green(
				'='
			)} ${colors.brightCyan(base * i).underline} \n`;
			salida += `${base} x ${i} = ${base * i} \n`;
		}
		if (listar) {
			console.log(colors.america('================'));
			console.log(colors.brightBlue('Tabla del'), colors.green(base));
			console.log(colors.america('================'));
			console.log(consola);
		}

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
		return `tabla-${base}.txt`;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	crearArchivoMultiplicar,
};
