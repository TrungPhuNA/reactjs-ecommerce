import React from "react";
import Images from "../../../Image/Images";
import {Link } from "react-router-dom";

function HomeBanner({number}) {
    return (
        <div className="cm-width">
            {number === 4 && 
                    <>
                    <div className="home-banner--top">
                        <Link to="/home">
                            <Images src="https://salt.tikicdn.com/ts/banner/57/8a/27/d7380cdcf25a5542e5fea4a0a8d0b465.png" alt="top-1" />
                        </Link>
                        <Link to="/home"> 
                            <Images src="https://salt.tikicdn.com/ts/banner/57/8a/27/d7380cdcf25a5542e5fea4a0a8d0b465.png" alt="222" />
                        </Link>
                        <Link to="/home">
                            <Images src="https://salt.tikicdn.com/ts/banner/57/8a/27/d7380cdcf25a5542e5fea4a0a8d0b465.png" alt="333" />
                        </Link>
                        <Link to="/home">
                            <Images src="https://salt.tikicdn.com/ts/banner/57/8a/27/d7380cdcf25a5542e5fea4a0a8d0b465.png" alt="4" />
                        </Link>
                    </div>
                        
                    </>
                }
            {number !== 4 && 
                <>
                <div className="home-banner">
                    <Link to="/home">
                        <Images src="https://salt.tikicdn.com/ts/banner/72/38/3c/5653a85c9e0c79503051cadcbefad23b.png" alt="23" />
                    </Link>
                    <Link to="/home">
                        <Images src="https://salt.tikicdn.com/ts/banner/72/38/3c/5653a85c9e0c79503051cadcbefad23b.png" alt="123" />
                    </Link>
                    <Link to="/home">
                        <Images src="https://salt.tikicdn.com/ts/banner/72/38/3c/5653a85c9e0c79503051cadcbefad23b.png" alt="123" />
                    </Link>
                </div>
                </>
            }
        </div>
    )
}
export default HomeBanner