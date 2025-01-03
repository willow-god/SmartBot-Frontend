import React, { useEffect, useState } from 'react';
import { Checkbox, message, Input, Button, Space, Image, Tag } from 'antd';
import axios from 'axios';
import moment from 'moment';  // 用于时间格式化
import '/src/css/text-search.css';

const App = () => {
    const [groups, setGroups] = useState([]); // 群组列表
    const [selectedGroups, setSelectedGroups] = useState([]); // 选中的群组
    const [inputValue, setInputValue] = useState(''); // 文本内容
    const [results, setResults] = useState([]); // 搜索结果
    const [imageCount, setImageCount] = useState(5); // 图片数量

    const BASE_API = import.meta.env.VITE_BASE_API || 'http://localhost:8000';

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await axios.get(`${BASE_API}/groups`);
                const groupList = Object.entries(response.data).map(([groupId, groupName]) => ({
                    label: `${groupName} (${groupId})`, // 在群名后附加群号
                    value: groupId,
                }));
                setGroups(groupList);
            } catch (error) {
                console.error('Failed to fetch groups:', error);
                message.error('无法加载群组数据，请稍后重试。');
            }
        };

        fetchGroups();
    }, [BASE_API]);

    const handleSearch = async () => {
        if (!selectedGroups.length) {
            message.warning('请选择至少一个群组！');
            return;
        }
        if (!inputValue.trim()) {
            message.warning('请输入搜索文本！');
            return;
        }
    
        try {
            const requestData = {
                groups: selectedGroups,
                query: inputValue,
                image_count: imageCount,
            };
    
            const response = await axios.post(`${BASE_API}/text-search`, requestData, {
                headers: { 'Content-Type': 'application/json' },
            });
    
            const resultsWithNames = response.data.matched_images.map((image) => {
                const group = groups.find((g) => g.value === image.group_id); // 查找匹配的群组
                return {
                    ...image,
                    group_name: group ? group.label.split(' (')[0] : '未知群组', // 提取群名部分
                };
            });
    
            setResults(resultsWithNames);
            message.success('搜索成功！');
        } catch (error) {
            console.error('Search error:', error);
            message.error('搜索失败，请稍后再试！');
        }
    };
    

    return (
        <>
            <div className="text-search-input" style={{ marginTop: 20 }}>
                <h2>📸📸📸文本检索</h2>
                <h3>利用CLIP的强大能力实现通过文本检索Q群中的所有图片</h3>
                <div className='search-input-and-button'>
                    <Input
                        style={{ fontSize: 25, borderRadius: 50, marginRight: 10, width: 80 }}
                        type="number"
                        min={1}
                        max={100}
                        placeholder="图片数量"
                        value={imageCount}
                        onChange={(e) => setImageCount(Number(e.target.value))}
                    />
                    <Input
                        className='search-input'
                        style={{ width: 600, fontSize: 25, borderRadius: 50 }}
                        placeholder="搜索的图片描述文本"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Space />
                    <Button
                        type="primary"
                        style={{ marginLeft: 10, height: 50, fontSize: 25, borderRadius: 50 }}
                        onClick={handleSearch}
                    >
                        搜索
                    </Button>
                </div>
                <div className="CheckBox-select-groups">
                    {groups.length > 0 ? (
                        <Checkbox.Group
                            options={groups}
                            value={selectedGroups}
                            onChange={setSelectedGroups}
                        />
                    ) : (
                        <p>加载群组数据中...</p>
                    )}
                </div>
            </div>

            <div className="results-images-show" style={{ marginTop: 40 }}>
                {results.length > 0 ? (
                    <div className="results-container">
                        {results.map((result, index) => (
                            <div className="result-item" key={index}>
                                <Image
                                    width={150}
                                    height={150}
                                    src={result.url}
                                    alt={`Result ${index}`}
                                    style={{
                                        borderRadius: 20,
                                        objectFit: 'cover',
                                    }}
                                />
                                <div className='pic-info'>
                                    <p><strong>群号：</strong>{result.group_id}</p>
                                    <p><strong>群名：</strong>{result.group_name}</p>
                                    <p><strong>时间：</strong>{moment(result.timestamp).format('MM月DD日 HH时mm分')}</p>
                                    <Tag color="blue">{result.group_name}</Tag>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p></p>
                )}
            </div>
        </>
    );
};

export default App;
