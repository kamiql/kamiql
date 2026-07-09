import {TypeAnimation} from "react-type-animation";

import background from "../../assets/minecraft_banner.png"

export default function Banner() {
    return (
        <div style={{
            position: "relative",
            aspectRatio: "16 / 6",
            width: "100%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(1px)",
                transform: "scale(1.05)",
                zIndex: 0,
            }}/>

            <div style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "0.5rem",
            }}>
                <span style={{
                    color: "white",
                    fontFamily: "Silkscreen, sans-serif",
                    fontSize: "3rem",
                    fontWeight: 700,
                    textShadow: "2px 6px 4px #000000",
                }}>
                    Building with
                </span>

                <TypeAnimation
                    style={{
                        fontSize: "3rem",
                        fontFamily: "Silkscreen, sans-serif",
                        fontWeight: 700,
                        textShadow: "2px 6px 4px #000000",
                    }}
                    sequence={[
                        (el) => {
                            if (el) el.style.color = "#830fe3"
                        },
                        "Kotlin",
                        2000,
                        "",
                        (el) => {
                            if (el) el.style.color = "#36e30f"
                        },
                        "Minecraft",
                        2000,
                        "",
                        (el) => {
                            if (el) el.style.color = "#0f92e3"
                        },
                        "Fullstack",
                        2000,
                        "",
                    ]}
                    speed={3}
                    deletionSpeed={12}
                    repeat={Infinity}
                />
            </div>
        </div>
    )
}