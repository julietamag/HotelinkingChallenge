# Julieta Magnago | Hotelinking Challenge

## Installation requirements: 
Node.js, npm, MySql, PHP

## How to use: 
<ol>
  <li>Download the project (or clone using GIT) </li>
   <li>Copy .env.example into .env and configure database credentials as your local machine requires </li>
      <li>Navigate to the project's root directory using terminal </li>
      <li>Run ``composer install`` </li>
      <li>Set the encryption key by executing ``php artisan key:generate --ansi`` </li>  <li>Run migrations ``php artisan migrate --seed`` </li>
      <li> Start local server by executing ``php artisan serve``</li>
      <li>Open new terminal and navigate to the react-hotelinking folder </li>
      <li>Copy react/.env.example into .env and adjust the VITE_API_BASE_URL parameter </li>
      <li>Run ``npm install`` </li>
       <li> Run ``npm run dev`` to start vite server for React </li>
   
</ol>










