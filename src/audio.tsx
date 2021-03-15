//words and audio files 
export class AudioTextController {
    static wrong_words: string[] = ["te", "qaick", "browm", "sox", "jumed", "oer", "sentineel"];
    static correct_words: string[] = ["the", "quick", "brown", "fox", "jumped", "over", "sentinel"]
    static audio_files: string[] = ["test.mp3", "test.mp3", "test.mp3", "test.mp3", "test.mp3", "test.mp3", "test.mp3"]
  
    //return a random value of both audio and word
    static getWord() {
      let array_size = this.wrong_words.length;
      let item_id = Rand.randomInt(array_size - 1);
      return [this.wrong_words[item_id], this.correct_words[item_id], this.audio_files[item_id]]
    }
  }