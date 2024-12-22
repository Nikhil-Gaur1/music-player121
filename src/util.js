import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            id: uuidv4(),
            name: "Faded",
            artist: "Alan Walker",
            cover:  "/image/faded.jpg",
            audio: "/music/faded.mp3",
            active: false,
            color: ['#C3141A','#BC1C22']
        },
        {
            id: uuidv4(),
            name: "Perfect",
            artist: "Ed Sheeran",
            cover:"/image/perfect.jpg",
            audio: "/music/perfect.mp3",
            active: false,
            color: ['#C4B54E','#DEDFB7']
        },
        {
            id: uuidv4(),
            name: "Alone",
            artist: "Alan Walker",
            cover:  "/image/alone.jpg",
            audio: "/music/alone.mp3",
            active: true,
            color: ['#CA4C62', '#E87989']
        },
        {
            id: uuidv4(),
            name: "Something Just Like This",
            artist: "Coldplay",
            cover:"/image/something.jpg",
            audio: "/music/something.mp3",
            active: false,
            color: ['#004143','#02251F']
        },
        {
            id: uuidv4(),
            name: "Shape of You",
            artist: "Ed Sheeran",
            cover: "/image/shape.jpg",
            audio: "/music/shape.mp3",
            active: false,
            color: ['#53BD9F','#449886']
        }
    ]
}

export default chillHop;
