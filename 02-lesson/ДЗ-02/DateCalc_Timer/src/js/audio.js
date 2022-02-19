import { Howl } from 'howler';
import audio from '../media/audio/sound.mp3'

export const sound = new Howl({
    src: [audio]
    /* src: ['../media/audio/sound.mp3'] */
});