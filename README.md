<br />
<h3 align="center">:lock: :key: :email:</h3>
<h1 align="center" decoration="none"> PROJECT ADVISOR 3000 </h1>
<br />

The project manager 3000 consists of a project management platform with steps that must be reached the user performs the registration creates their projects and stipulates the steps that must be reached.
<br />
<br />

## :computer: Technologies Used

This project has the following technologies:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/pt-br/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
<br />

## :mortar_board: The Idea

I am attending several classes and taking several courses in the world of Node, React and ReactNative and I found a course by the guys at [@Rocketseat](https://github.com/Rocketseat) these guys are incredible they have several free courses and they teach very well!

One of these courses is the development of an API with express, mongo and Node. So the idea of ​​this project is to replicate what these guys did and add an interface with React and automated tests.
<br /> 
<br />

## :wrench: Create Your Secret

To log in to the api, it is necessary to create a unique password, where you will create it 
yourself. It's very simple just follow these steps:

- Acess the following path: <br />
  `./backend/src/config/`

- Create the following file <br />
  `auth.json`

- Now we have to create an encrypted secret in md5. For this access this
[Page](https://www.md5hashgenerator.com/ "Page"). <br />

- Now inside the auth.json file write the following: <br />
  `{ "secret": "theSecretYouCreatedHere" }`

<br />

## :email: Configure the sendmailer

To activate password recovery, it is necessary to configure nodemailer.

- Acess the following path: <br />
  `./backend/src/config/`

- Create the following file <br />
  `mail.json` 
<br />

However, I recommend using Mailtrap.io (Secure email test for preparation and development). It's easy to set up:

- First access the [Mailtrap.io](https://mailtrap.io/)

- Second click on signUp - inform what is requested after the account is finalized you will have an inbox configured, click on it.

- Third in the integration section choose the nodemailer option and copy the code.

Now to configure nodemailer copy the code below and replace the one requested it's simple:
```javascript
{
  "host": "yourHostMailtrap", 
  "post": 2525, 
  "user": "yourUserMailtrap", 
  "pass": "yourPassMailtrap"
}
```

Now everything is ok!
<br />
<br />

## :white_check_mark: How test the API

if you want to test only the API, you can use this [file](https://github.com/EddyPBR/login-system-api/blob/master/backend/InsomniaToTest.json) of [insomnia](https://insomnia.rest/download/). It's very simple and easy.
<br />
<br />

## :star: Interface Prototype with Figma

The prototype of the interface was developed on the [FIGMA](https://www.figma.com/) platform to see the prototype access the [link](https://www.figma.com/file/L4fMK98Za4CdQMCqXSc0vJ/api?node-id=0%3A1).
<br />
<br />

## :memo: License

This project is under mit [MIT license](LICENSE) for more details
<br />
<br />

## :wave: Social

Follow me on my [Instagram](https://www.instagram.com/edvaldo_junior_dev/) and let's talk a little :wink:
<br />
