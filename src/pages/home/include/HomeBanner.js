import React from "react";
import Images from "../../../components/Image/Images";
import {Link } from "react-router-dom";

function HomeBanner({number}) {
    return (
        <div className="cm-width">
            {number === 4 &&
                <>
                    <div className="home-banner--top">
                        <Link to="/">
                            <Images src="https://media.hasaki.vn/hsk/1639446173415x130_laneige.jpg" alt="top-1" />
                        </Link>
                        <Link to="/">
                            <Images src="https://media.hasaki.vn/hsk/1640663436415x130_shu%20uemura.jpg" alt="222" />
                        </Link>
                        <Link to="/">
                            <Images src="https://media.hasaki.vn/hsk/1665475978elc_415x130.jpg" alt="333" />
                        </Link>
                    </div>

                </>
            }
            {number !== 4 &&
                <>
                    <div className="home-banner">
                        <Link to="/">
                            <Images src="https://media.hasaki.vn/hsk/1639446173415x130_laneige.jpg" alt="23" />
                        </Link>
                        <Link to="/">
                            <Images src="https://media.hasaki.vn/hsk/1640663436415x130_shu%20uemura.jpg" alt="123" />
                        </Link>
                        <Link to="/">
                            <Images src="https://media.hasaki.vn/hsk/1665475978elc_415x130.jpg" alt="123" />
                        </Link>
                    </div>
                </>
            }
        </div>
    )
}
export default HomeBanner
