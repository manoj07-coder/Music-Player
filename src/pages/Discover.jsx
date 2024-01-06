import { Error,Loader,SongCard } from "../components";
import { genres } from "../assets/constants";

const Discover = () => {

    const genreTitle = 'Pop'

    return (
        <div className="flex flex-col">
            <div className="flex w-full justify-between items-center
            sm:flex-col flex-row mt-4 mb-10">
                <h2 className="text-white font-bold text-3xl text-left">
                    Discover {genreTitle}</h2>
                <select className="bg-black text-gray-300 text-sm rounded-lg
                 outline-none p-3 sm:mt-5 mt-0"
                 onChange={()=>{}}
                 value="">
                    {
                        genres.map((genre)=>(
                            <option key={genre.value} value={genre.value}>{genre.title}</option>
                        ))
                    }
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-center justify-start gap-8">
                {[1,2,3,4,5,6,7,8,9,10].map((song,i)=>(
                    <SongCard 
                    key={song.key}
                    song={song}
                    i={i}/>
                ))}
            </div>
        </div>
    )
}

export default Discover;
