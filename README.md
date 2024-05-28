# itunes-seeker

<p align="center">
  <img src="https://github.com/iassadki/itunes-seeker/blob/master/git/itunes-seeker-1.PNG?raw=true" alt="itunes-seeker-1" width="200"/>
  <img src="https://github.com/iassadki/itunes-seeker/blob/master/git/itunes-seeker-2.PNG?raw=true" alt="itunes-seeker-2" width="200"/>
  <img src="https://github.com/iassadki/itunes-seeker/blob/master/git/itunes-seeker-3.PNG?raw=true" alt="itunes-seeker-3" width="200"/>
  <img src="https://github.com/iassadki/itunes-seeker/blob/master/git/itunes-seeker-4.PNG?raw=true" alt="itunes-seeker-4" width="200"/>
</p>

## 💻 About the project
Application using the iTunes API to search for music, albums, etc. Users can also like their favourite tracks.

## ⚙️ Functionalities
- [x] Search for artists
- [x] Search for artists 
- [x] Display of a selectable list of items
- [x] A display view of a result item
- [ ] Possibility of adding a result to your own base (storage are optional)
- [x] Personalized Rating system 

## Fonctionnalité like
Quand je like une musique, elle s'ajoute bien dans le tableau likedSongs (depuis la HomeScreen).
J'ai un useEffect qui affiche en console le tableau likedSongs avec une intervalle de temps.
```javascript
    // Utilisation de useSelector pour accéder à la liste des chansons aimées dans le store Redux
    const likedSongs = useSelector(state => state.likedSongs);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("LikedSongs : ", likedSongs.map(song => song.trackName));
        }, 10000); // Actualise toutes les secondes

        return () => clearInterval(interval); // Nettoie l'intervalle lors du démontage du composant
    }, [likedSongs]);
```

En console la liste est tout le temps vide
```shell
 HomeScreen       :  ["Get Low", "Turn Down For What", "Slow Down"]
 LikedSongsScreen :  []
```

Dans l'idée ça marche, mais rien ne se transfère entre les pages malgré l'utilisation de redux.

## 🛠 Technologies
- Languages : `JavaScript`
- Framework : `React-Native`
- Tools : `Expo`

## 🧭 Running the application
1. Install the dependencies
```shell 
npm install # or 'yarn add'
```
2. Run the application woth expo
```shell
npx expo start
```