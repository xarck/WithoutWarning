import React, { useState } from "react";

const Home = () => {
    const [msg, setMsg] = useState("");
    return (
        <div>
            <textarea
                placeholder="Please Enter your Text "
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <br />
            <button>Submit</button>
        </div>
    );
};

export default Home;
