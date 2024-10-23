import { useState } from "react";

export default function ChangeAvatar() {
    const [avatar, setAvatar] = useState(Math.floor(Math.random() * 50));

    return (
        <div>
            <h1>Change Avatar</h1>
            <div style={{ width: '100%' }}>
                <img src={"https://i.pravatar.cc/?u=" + avatar} width={800} height={680} />
                <br />
                <br />
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-dark" onClick={() => setAvatar(Math.floor(Math.random() * 70))}>Dislike</button>
                    <button type="button" className="btn btn-danger" onClick={() => setAvatar(Math.floor(Math.random() * 70))}>Like</button>
                </div>
            </div>
        </div>
    );
}