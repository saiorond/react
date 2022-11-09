import config from "../config.json";

function HomePage() {
    const estiloHomePage = {backgroundColor: "red"};

    return (
        <div style={estiloHomePage}>
        <Menu />
        <Header />
        <Timeline />
        </div>
    );
}

export default HomePage

function Menu(){
    return (
        <div>
            <img src="banner" />
            <img src={`https://github.com/${config.github}.png`} />
            {config.name}
            {config.job}
        </div>
    )
}

function Header(){
    return (
        <div>
            Header
        </div>
    )
}

function Timeline(){
    return (
        <div>
            Timeline
        </div>
    )
}