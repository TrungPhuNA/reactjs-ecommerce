import React from "react";

function HomeBanner({number}) {
    return (
        <div className="cm-width">
            {number === 4 && 
                    <>
                    <div className="home-banner--top">
                        <a href="/home">
                            <img src="https://salt.tikicdn.com/ts/banner/57/8a/27/d7380cdcf25a5542e5fea4a0a8d0b465.png" alt="" />
                        </a>
                        <a href="/home">
                            <img src="https://salt.tikicdn.com/ts/banner/57/8a/27/d7380cdcf25a5542e5fea4a0a8d0b465.png" alt="" />
                        </a>
                        <a href="/home">
                            <img src="https://salt.tikicdn.com/ts/banner/57/8a/27/d7380cdcf25a5542e5fea4a0a8d0b465.png" alt="" />
                        </a>
                        <a href="/home">
                            <img src="https://salt.tikicdn.com/ts/banner/57/8a/27/d7380cdcf25a5542e5fea4a0a8d0b465.png" alt="" />
                        </a>
                    </div>
                        
                    </>
                }
            {number !== 4 && 
                <>
                <div className="home-banner">
                    <a href="/home">
                        <img src="https://salt.tikicdn.com/ts/banner/72/38/3c/5653a85c9e0c79503051cadcbefad23b.png" alt="" />
                    </a>
                    <a href="/home">
                        <img src="https://salt.tikicdn.com/ts/banner/72/38/3c/5653a85c9e0c79503051cadcbefad23b.png" alt="" />
                    </a>
                    <a href="/home">
                        <img src="https://salt.tikicdn.com/ts/banner/72/38/3c/5653a85c9e0c79503051cadcbefad23b.png" alt="" />
                    </a>
                </div>
                </>
            }
        </div>
    )
}
export default HomeBanner