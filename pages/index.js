import config from "../config.json";
import styled from "styled-components";

function HomePage() {
    const estiloHomePage = {backgroundColor: "red"};

    return (
        <div style={estiloHomePage}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlist} />
        </div>
    );
}

export default HomePage

function Menu(){
    <div>
        Menu
    </div>
}

const StyledHeader = styled.div `
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header(){
    return (
        <StyledHeader>

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                        </h2>
                    <p>
                    {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {
    console.log("Dentro do componente", props)
    const playlistNames = Object.keys(props.playlists)
    return (
        <div>
            {playlistNames.map((playlistNames) => {
                const videos  = props.playlists[playlistName];
                return videos.map((video) => {
                    return (
                        <a href={videos.url}>
                            <img src={video.thumb} />
                            <span>
                                {video.title}
                            </span>
                        </a>
                    )
                });
            })}
        </div>
    )
}