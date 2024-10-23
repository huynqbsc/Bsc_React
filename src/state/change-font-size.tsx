import { useState } from "react";

export default function ChangeFontSize() {
    const [size, setSize] = useState(12);

    return (
        <div>
            <h1>Change Font Size</h1>
            <div style={{ width: '100%' }}>
                <label style={{ fontSize: size + "px" }}>BSC vinh dự nhận bằng khen của Bộ Tài chính với thành tích đóng góp trong xây dựng và phát triển thị trường chứng khoán giai đoạn 2020-2024</label>
                <br />
                <br />

                <button type="button" className="btn btn-success" onClick={() => setSize(size + 1)}>+ zoom in</button>
                &nbsp;
                <button type="button" className="btn btn-success" onClick={() => setSize(size - 1)}>- zoom out</button>

            </div>
        </div>
    );
}