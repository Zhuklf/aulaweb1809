```js
# Programa para verificar a situação do voto de acordo com a idade

idade = int(input("Digite sua idade: "))

if idade < 16:
    print("Não pode votar.")
elif 16 <= idade < 18 or idade > 65:
    print("Voto facultativo.")
else:
    print("Voto obrigatório.")
```
