function subtracao()
{
	var min = prompt ("Digite o minuendo (primeiro valor): ");

	var sub = prompt ("Digite o subtraendo (segundo valor): ");

	return (min + " - " + sub + " = " + (min - sub));
}

function divisao()
{
	var divisor = prompt ("Digite o divisor (primeiro valor): ");

	var dividendo = prompt ("Digite o dividendo (segundo valor): ");

	if (divisor % dividendo == 0)
	{
		return (divisor + " / " + dividendo + " = " + (divisor / dividendo));
	}
	else
	{
		return (divisor + " / " + dividendo + " = " + (divisor / dividendo) + " (Resto = " + (divisor % dividendo) + ")");
	}
}

function potenciacao()
{
	var base = prompt ("Digite a base: ");

	var expoente = prompt ("Digite o expoente: ");

	return (base + "^" + expoente + " = " + (Math.pow (base, expoente)));
}

var opcao = prompt ("Digite 'S' para subtracao, 'D' para divisao ou 'P' para potenciacao (em letra maiuscula): ");

switch (opcao)
{
	case 'S':
		alert (subtracao());
		break;

	case 'D':
		alert (divisao());
		break;

	case 'P':
		alert (potenciacao());
		break;

	default:
		alert ("Letra invalida!");			
}