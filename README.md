# Spofify

A site which enables simple lookup of list of random songs with it's detailed view done with react and node.

## Install: 

Install mongodb and node, if you haven't, then,

- Import the uploaded csv into a mongodb collection
	
		mongoimport -d songs -c songlists --type CSV top_spotify_021e61205.csv --headerline

- Dive into the backend folder and type,

		npm i
		npm start

- Dive back to the frontend folder and type,

		npm i
		npm start
