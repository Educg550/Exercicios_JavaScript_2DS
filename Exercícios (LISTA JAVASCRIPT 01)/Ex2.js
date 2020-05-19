var nums = [0, 0, 0, 0, 0];

for (var i = 0; i < 5; i++)
{
	nums[i] = prompt ("Digite um numero (" + (i + 1) + "/5): ");
}

for (var i = 0; i < 5; i++)
{
	alert ("O valor " + nums[i] + " ao quadrado eh: " + Math.pow (nums[i], 2));
}