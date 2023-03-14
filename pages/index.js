import SearchBar from "@/components/SearchBar";
import { Card, Col, Divider, Image, Row, Space, Spin } from "antd";
import { useState } from "react";

export default function Home() {
    const [loading,setLoading] = useState(false)
    const [data, setData] = useState([]);

    const onFinish = async (values) => {
        setLoading(true)
        let res = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const content = await res.json();

        setData(content.data);
        setLoading(false)
    };

    return (
        <>
            <div className="d-flex-center">
                <SearchBar onFinish={onFinish} />
            </div>
            <Divider />
            <Row gutter={[20,20]} justify={'space-between'} className="d-flex-center">
                {!loading ? <>
                    {data.length> 0 && data.map((d,i)=>(<Col span={6}>
                        <Card key={i} bodyStyle={{padding:0}}>
                            <Image src={d.url}/>
                            
                        </Card>
                    </Col>
                    ))}
                </>:<Spin/>}
            </Row>
        </>
    )
}
