<p align="center">
  <img src="https://app.landingpage.com.br/construtor/assets/imagens/By.png" width="350" title="hover text">
</p>

# Informações sobre o teste :)

Temos uma api que te fornece os dados de um produto de um ecommerce.
Esse produto possui varias variantes (como cor e tamanho)
O objetivo deste trabalho é validar se a combinação das variantes possui estoque para realizar a compra.

Então o usuário deve poder selecionar as variantes, e habilitar o botão de compra se tiver estoque.
Se tiver estoque o botão de compra deve enviar o pedido para a Api de compra

Acreditamos que não exista certo ou errado quando falamos de tecnologia, então não se preocupe: não estamos aqui para julgar nada! Queremos apenas entender a sua linha de raciocínio e criatividade.

## Rodando o projeto

Para agilizar o desenvolvimento, o teste já vem com uma estrutura e um servidor do webpack.

## Requisitos
Precisamos que tenha algumas coisas para poder rodar:
- Computador
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Como usar

Na raiz do projeto use:
```
npm install ou yarn
```

E para usar o servidor ([webpack](https://webpack.js.org/))

```
npm run server ou yarn server
```
## APIs

### Lista

- O produto é obtido através de uma requisição `get`
- [Exemplo de Endpoint](https://app.landingpage.com.br/ajax/buscarDetalhesProdutoNuvemshop/LPLG4d/127809233)


Exemplo de resposta (Quantidade de propriedades foi reduzida para apenas o que será usado):

````javascript
{
    "id": 127809233,
    "title": "Camisa Prime - Podcast",
    "options": ["Cor","Tamanho"],
    "values": [["Preto"],["P", "M"]],
    "variants": [
        {
            "id": 499249469,
            "product_id": 127809233,
            "price": "50.00",
            "values": [ "Preto", "P"],
            "image_id": 347611168,
            "inventory_quantity": 20,
            "image_url": "https://d2r9epyceweg5n.cloudfront.net/stores/002/260/878/products/php1aciy61-8cc5b53686d728f5c516589604020929-1024-1024.png"
        }
    ],
    // imagem principal do produto
    "image_url": "https://d2r9epyceweg5n.cloudfront.net/stores/002/260/878/products/php1aciy61-8cc5b53686d728f5c516589604020929-1024-1024.png",
    // imagens das variantes
    "images": [
        {
            "id": 347611168,
            "product_id": 127809233,
            "src": "https://d2r9epyceweg5n.cloudfront.net/stores/002/260/878/products/php1aciy61-8cc5b53686d728f5c516589604020929-1024-1024.png"
        }
    ]
}
````
## API de Retorno

- O produto é enviado através do método `post`
- [Exemplo de Endpoint](https://app.landingpage.com.br/api/checkoutloja/LPLG4d/5d87eb644e5631bc6a03f1e43a804e1c)

O formato de envio é um array com um objeto seguindo a seguinte estrutura:
````javascript
[{
  values: ["Preto", "p"],
  quantity: 1,
  product_id: 1,
  variant_id: 1,
}]
````
