
type VideoProps = {
    id: string
}

export const YoutubeVideo: React.FC<VideoProps> = ({ id }) => {
    return (
        <div>
            <iframe width="800" height="415" src={"https://www.youtube.com/embed/" + id}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen className="mt-10 md:w-[100%] w-[100%] md:py-0 py-4 md:mx-0 mx-auto"></iframe>
        </div>
    )
}
