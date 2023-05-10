# Julieta Magnago | Hotelinking Challenge

## Installation requirements: 
Node.js, npm, MySql, PHP

## How to use: 
<ol>
  <li>Download the project (or clone using GIT) </li>
    <code> </code>
   <li>Copy .env.example into .env and configure database credentials as your local machine requires </li>
      <li>Navigate to the project's root directory using terminal </li>
      <li>Run <code> composer install</code></li>
      <li>Set the encryption key by executing  <code> php artisan key:generate --ansi</code> </li>  <li>Run migrations    <code> php artisan migrate --seed</code>  </li>
      <li> Start local server by executing  <code> php artisan serve</code> </li>
      <li>Open new terminal and navigate to the react-hotelinking folder </li>
      <li>Copy react/.env.example into .env and adjust the VITE_API_BASE_URL parameter </li>
      <li>Run    <code> npm install</code></li>
       <li> Run <code>npm run dev </code> to start vite server for React </li>
   
</ol>










