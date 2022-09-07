## Introduction

This is the classic to do list but made with Solidity.

The project was developed with NodeJs, Solidity and Truffle. Besides, Ganache was used to get the blockchain/wallets to test that everything was working.

Following Fazt video on Youtube, the idea was to introduce myself this technologies. It was very interesting how the contract is made and the interaction.

Next step, good practices and Wagmi/ethers.

## Try Out

After clone this respository.

- open the project console
- you have to download Ganache and configure the port given in the file truffle-config.js (line 69)
![1truffleconfigAndGanache](https://user-images.githubusercontent.com/103390530/188783860-9b2a9f41-ed2d-485f-ad9f-ba111e0cd26b.png)
- must have metamask installed in your browser and configured
- add in Metamask the account given by Ganache (private key)
![1GanachePrivateKeys](https://user-images.githubusercontent.com/103390530/188784289-712044aa-b774-4101-b9e8-6534532d434e.png)
![Captura de pantalla (633)](https://user-images.githubusercontent.com/103390530/188784368-08e0fdfe-4176-44ef-ba4d-bcfc81b29ee2.png)
- add localhost:7545 as a network (or whatever port Ganache gives you and you put in the truffle-config.js line69 - first step)
![1Network](https://user-images.githubusercontent.com/103390530/188784796-e7249a8c-781d-4475-b266-82b8142ddfe5.png)
![1NetworkAdded](https://user-images.githubusercontent.com/103390530/188785292-a712ee71-0118-4c26-a6a6-9d74671b7213.png)
- select the new network added
![1NetworkSelect](https://user-images.githubusercontent.com/103390530/188785527-5cd7709e-eb9a-4e8c-979b-070c4806e224.png)
- open the project and run the command line `npm i`
- run in the console of truffle deployed
- then `npm run dev`
- go to [http://localhost:3000/](http://localhost:3000/)

## Project Screens

- Home!
![Captura de pantalla (634)](https://user-images.githubusercontent.com/103390530/188785725-c70e5c7b-ba12-4c4e-a999-8048763d741a.png)

- Getting a task done
![Captura de pantalla (637)](https://user-images.githubusercontent.com/103390530/188785916-ff17c695-771f-4bba-b3b7-89a835eb505f.png)
![Captura de pantalla (638)](https://user-images.githubusercontent.com/103390530/188785938-8605e2a6-4f4e-4af5-beb6-3c07c7ed89c3.png)

- Creating a task
![Captura de pantalla (635)](https://user-images.githubusercontent.com/103390530/188785764-aceb6250-5c18-4208-a63c-f03bd250eb54.png)
![Captura de pantalla (636)](https://user-images.githubusercontent.com/103390530/188785822-2f6bce9f-5d72-40bb-9f93-96dc75acafd2.png)
