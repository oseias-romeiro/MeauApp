# MeauApp
Projeto de Desenvolvimento de Aplicativos em React Native baseado no projeto visual [Aplicativo Meau](./Visual/Meau_Relatório_Final.pdf)

## Descrição do projeto
O aplicativo​ ​tem​ ​como​ ​principal​ ​funcionalidade​ ​a​ ​adoção​ ​e​ ​doação​ ​de​ ​animais​ ​domésticos (especificamente​ ​cães​ ​e​ ​gatos)​ ​e​ ​visa​ ​facilitar​ ​o​ ​intermédio​ ​dos​ ​protetores​ ​com​ ​possíveis adotantes,​ ​padrinhos​ ​e​ ​ajudantes.​

## Start
Antes, deve configurar o **.env** e adicionar o arquivo **google-services.json** de acordo com seu ambiente firebase

```sh
npm install
npm start
```


## Build apk
Defina os `secrets` do **.env** e o `serverkey do firebase cloud messaging` no seu projeto em [expo.dev](https://expo.dev), e após isso, execute o seguinte comando:

```sh
npx eas build -p android --profile preview
```

