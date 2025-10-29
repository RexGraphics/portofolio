import GradualBlur from "../commons/GradualBlur/GradualBlur"

const Home = () => {
    return (
        <div className="w-full max-w-7xl h-full absolute overflow-hidden" id="home-section">
            <div className="w-full">
                <div className="w-full">
                    <GradualBlur
                        target="parent"
                        position="bottom"
                        height="6rem"
                        strength={2}
                        divCount={5}
                        curve="bezier"
                        exponential={true}
                        opacity={1}
                    />
                    asd
                </div>
                <div className="w-full">
                    asd
                </div>
            </div>
        </div>
    )
}

export default Home