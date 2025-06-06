# MoisesFerreiraEvangelista.github.io

# Mapa Fácil

Este é um projeto web chamado **Mapa Fácil**, que permite ao usuário buscar endereços, visualizar localizações em um mapa interativo, obter coordenadas geográficas e utilizar reconhecimento de voz para facilitar a busca de endereços.

## Funcionalidades

- **Busca de Endereços:** Informe um endereço ou clique no mapa para obter as coordenadas e o endereço correspondente.
- **Reconhecimento de Voz:** Utilize o botão "Falar" para ditar o endereço usando a API de reconhecimento de voz do navegador.
- **Geolocalização:** O botão "Meu local" utiliza a geolocalização do navegador para encontrar sua posição atual no mapa.
- **PWA (Progressive Web App):** O site pode ser instalado como aplicativo no dispositivo, funcionando offline com Service Worker e manifestos configurados.
- **Interface Responsiva:** Utiliza Bootstrap para garantir uma boa experiência em diferentes dispositivos.
- **Ícones:** Integração com Font Awesome para ícones modernos e acessíveis.

## Estrutura do Projeto

```
.
├── index.html
├── manifest.json
├── offline.manifest
├── service-worker.js
├── SpeechRecognition.js
├── css/
│   └── bootstrap.css
├── font-awesome/
│   ├── css/
│   │   └── font-awesome.css
│   └── fonts/
├── app-images/
│   └── images/
│       └── icons/
├── favicon_package/
│   └── (diversos ícones e manifestos)
└── README.md
```

## Tecnologias Utilizadas

- [Bootstrap](css/bootstrap.css) para layout responsivo.
- [Font Awesome](font-awesome/css/font-awesome.css) para ícones.
- [Leaflet.js](https://leafletjs.com/) para mapas interativos.
- [jQuery](https://jquery.com/) para manipulação do DOM e requisições AJAX.
- [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/start) para conversão de endereços e coordenadas.
- [Web Speech API](SpeechRecognition.js) para reconhecimento de voz.
- Service Worker para funcionamento offline ([service-worker.js](service-worker.js)).
- Manifestos para PWA ([manifest.json](manifest.json), [favicon_package/site.webmanifest](favicon_package/site.webmanifest)).

## Como Usar

1. **Acesse o site:** Abra o `index.html` em um navegador moderno.
2. **Buscar endereço:** Digite um endereço e clique em "Buscar" ou clique diretamente no mapa.
3. **Reconhecimento de voz:** Clique em "Falar" e dite o endereço (requer suporte do navegador).
4. **Meu local:** Clique em "Meu local" para usar a geolocalização do seu dispositivo.
5. **Offline:** O site funciona offline após o primeiro acesso, graças ao Service Worker.

## Observações

- Para funcionamento completo (mapas e geocodificação), é necessário uma chave válida da Google Maps API.
- O reconhecimento de voz depende do suporte do navegador (Chrome recomendado).
- O projeto utiliza arquivos de manifesto para instalação como PWA em dispositivos móveis.

## Créditos

- Ícones por [Font Awesome](https://fontawesome.com/)
- Mapa por [Leaflet](https://leafletjs.com/)
- Tema Jekyll: `jekyll-theme-minimal` ([_config.yml](_config.yml))

## Importante

Para utilizar todas as funcionalidades do projeto, especialmente a busca de endereços e conversão de coordenadas (geocodificação), é necessário possuir uma **API Key do Google Maps** válida.  
Inclua sua chave no local apropriado do código, conforme instruções nos comentários do arquivo `index.html` ou no script responsável pelas requisições à API do Google.

Sem a chave, a busca de endereços e a exibição correta dos mapas podem não funcionar.

---

Desenvolvido por Moises Evangelista.